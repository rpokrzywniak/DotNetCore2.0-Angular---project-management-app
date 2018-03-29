
using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore;
using Microsoft.Extensions.Configuration;
using DotNetGigs;

namespace dotNetGigs
{
  public class Program
  {
    public static void Main(string[] args)
    {
      WebHost.CreateDefaultBuilder()
        .UseStartup<Startup>()
        .Build()
        .Run();
    }

    // Only used by EF Tooling
    public static IWebHost BuildWebHost(string[] args)
    {
      return WebHost.CreateDefaultBuilder()
        .ConfigureAppConfiguration((ctx, cfg) =>
        {
          cfg.SetBasePath(Directory.GetCurrentDirectory())
            .AddJsonFile("config.json", true) // require the json file!
            .AddEnvironmentVariables();
        })
        .ConfigureLogging((ctx, logging) => { }) // No logging
        .UseStartup<Startup>()
        .UseSetting("DesignTime", "true")
        .Build();
    }
  }
}



