using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(TeKssWeb.Startup))]
namespace TeKssWeb
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            //ConfigureAuth(app);
        }
    }
}
