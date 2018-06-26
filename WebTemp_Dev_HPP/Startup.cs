using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebTemp_Dev_HPP.Startup))]
namespace WebTemp_Dev_HPP
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
