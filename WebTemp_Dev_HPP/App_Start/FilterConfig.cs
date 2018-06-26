using System.Web;
using System.Web.Mvc;

namespace WebTemp_Dev_HPP
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
