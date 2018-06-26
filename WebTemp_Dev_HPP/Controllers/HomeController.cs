using Microsoft.Exchange.WebServices.Data;
using System;

using System.Collections.Generic;
using System.Configuration;
using System.IO;

using System.Linq;

using System.Net;

using System.Net.Mail;

using System.Web;

using System.Web.Mvc;



namespace TeKssWeb.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }


        public ActionResult GetFeedback()
        {

            return View();
        }

        [HttpGet]
        public JsonResult GetFeedbackForm(string name, string email, string subject, string message)
        {

            try
            {
                string messageBody = "";



                messageBody = "<html xmlns=\"http://www.w3.org/1999/xhtml\" >";
                messageBody += "<head runat=\"server\">";
                messageBody += "<title></title>";
                messageBody += "<style type=\"text/css\">";
                messageBody += ".style1";
                messageBody += "{";
                messageBody += "border-color:#fff;border-width:thin;border-style:solid";

                messageBody += "}";
                messageBody += "</style>";
                messageBody += "</head>";
                messageBody += "<body>";
                messageBody += "<p>";
                messageBody += "<b>";
                messageBody += "Feedback form...";
                messageBody += "</b>";
                messageBody += "</p>";
                messageBody += "<table class=\"style1\">";

                messageBody += "<tr>";
                messageBody += "<td>";
                messageBody += "Name : ";
                messageBody += "</td>";
                messageBody += "<td>";
                messageBody += name;
                messageBody += "</td>";
                messageBody += "</tr>";
                messageBody += "<tr>";
                messageBody += "<td>";
                messageBody += "Subject : ";
                messageBody += "</td>";
                messageBody += "<td>";
                messageBody += subject;
                messageBody += "</td>";
                messageBody += "</tr>";
                messageBody += "<tr>";
                messageBody += "<td>";
                messageBody += "E-mail Adress : ";
                messageBody += "</td>";
                messageBody += "<td>";
                messageBody += email;
                messageBody += "</td>";
                messageBody += "</tr>";
                messageBody += "<tr>";
                messageBody += "<td>";
                messageBody += "Message : ";
                messageBody += "</td>";
                messageBody += "<td>";
                messageBody += message;
                messageBody += "</td>";
                messageBody += "</tr>";

                messageBody += "</body>";
                messageBody += "</html>";

                ExchangeService service = new ExchangeService(ExchangeVersion.Exchange2010_SP2);
                var serviceEmailAddress = ConfigurationManager.AppSettings["ServiceEmailAddress"];
                var servicePassword = ConfigurationManager.AppSettings["ServicePassword"];
                service.Credentials = new System.Net.NetworkCredential(serviceEmailAddress, servicePassword);
                service.UseDefaultCredentials = false;
                service.Url = new Uri(ConfigurationManager.AppSettings["ExchangeServiceUrl"]);


                Console.WriteLine(service.Url);
                service.TraceEnabled = true;
                service.Timeout = 1000000;
                EmailMessage mail = new EmailMessage(service);

                // mail.From = from;
                mail.From = ConfigurationManager.AppSettings["FromEmailAddress"];

                var feedbackToEmailAddress = ConfigurationManager.AppSettings["ToRecipientEmailAddressFeedback"];
                mail.ToRecipients.Add(feedbackToEmailAddress);


                var Subject = "TeKSS website feedback E-mail " + DateTime.Now.ToLongDateString();

                mail.Body = messageBody;
                mail.Subject = Subject;
                mail.Send();
                return Json(new { success = true, responseText = "Your message successfuly sent!" }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(false);
            }


        }
        public ActionResult ApplyNow(string titel)
        {
            ViewBag.position = titel;
            return View();
        }
        [HttpPost]
        public ActionResult ApplyNow(HttpPostedFileBase myFile, string name, string email, string position)
        {
            if (name != "" && email != "")
            {
                try
                {
                    string messageBody = "";
                    messageBody = "<html xmlns=\"http://www.w3.org/1999/xhtml\" >";
                    messageBody += "<head runat=\"server\">";
                    messageBody += "<title></title>";
                    messageBody += "<style type=\"text/css\">";
                    messageBody += ".style1";
                    messageBody += "{";
                    messageBody += "border-color:#33333;border-width:thin;border-style:solid";

                    messageBody += "}";
                    messageBody += "</style>";
                    messageBody += "</head>";
                    messageBody += "<body>";
                    messageBody += "<p> ";
                    messageBody += "Dear sir/ madam,";
                    messageBody += "</p> ";
                    messageBody += "<br/>";
                    messageBody += "<p> ";
                    messageBody += "This refers to the current openings at your company  for the role of ";
                    messageBody += "</b> ";
                    messageBody += position;
                    messageBody += "</b> ";
                    messageBody += "</p> ";

                    messageBody += "<p> ";
                    messageBody += "Please find my resume attached here.";
                    messageBody += "</p> ";

                    messageBody += "<p> ";
                    messageBody += "Thank you for your consideration.";
                    messageBody += "</p> ";

                    messageBody += "<br/>";
                    messageBody += "<p> ";
                    messageBody += " Sincerely,";
                    messageBody += "</p> ";

                    messageBody += "<p> ";
                    messageBody += name;
                    messageBody += "<br/>";
                    messageBody += "My email :";
                    messageBody += email;
                    messageBody += "</p> ";
                    messageBody += "</body>";
                    messageBody += "</html>";


                    ExchangeService service = new ExchangeService(ExchangeVersion.Exchange2010_SP2);
                    var serviceEmailAddress = ConfigurationManager.AppSettings["ServiceEmailAddress"];
                    var servicePassword = ConfigurationManager.AppSettings["ServicePassword"];
                    service.Credentials = new System.Net.NetworkCredential(serviceEmailAddress, servicePassword);
                    service.UseDefaultCredentials = false;
                    service.Url = new Uri(ConfigurationManager.AppSettings["ExchangeServiceUrl"]);
                    Console.WriteLine(service.Url);
                    service.TraceEnabled = true;
                    service.Timeout = 1000000;
                    EmailMessage mail = new EmailMessage(service);
                    HttpPostedFileBase file = Request.Files["myFile"];

                    mail.Attachments.AddFileAttachment(file.FileName, file.InputStream);

                    mail.From = ConfigurationManager.AppSettings["FromEmailAddress"];
                    var careersToEmailAddress = ConfigurationManager.AppSettings["ToRecipientEmailAddressCareers"];
                    mail.ToRecipients.Add(careersToEmailAddress);
                    var Subject = "TeKSS website Apply for a job E-mail " + DateTime.Now.ToLongDateString();

                    mail.Body = messageBody;
                    mail.Subject = Subject;
                    mail.Send();
                }
                catch (Exception ex)
                {
                    return null;
                }
                return RedirectToAction("Index");
            }

            return RedirectToAction("Index");
        }




    }
}