using System;
using Microsoft.AspNetCore.Identity;

namespace ServerApp.Models
{
    public class User
    {
      public string Name { get; set; }
      
      public DateTime DateOfBirth { get; set; }
      public DateTime Created { get; set; }
      public DateTime LastActive { get; set; }
  

    }
}