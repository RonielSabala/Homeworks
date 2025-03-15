using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.IdentityModel.Tokens;
using ThesisHub.Domain.Entities;
using ThesisHub.Persistence;

namespace ThesisHub.Web.Controllers
{
    public class DepartmentsController : Controller
    {
        private readonly ThesisHubContext _context;

        public DepartmentsController(ThesisHubContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Create()
        {
            return View();
        }

        public IActionResult Details(int id)
        {
            return View(new Department { Id = id });
        }

        public IActionResult Edit(int id)
        {
            return View(new Department { Id = id });
        }

        public IActionResult Delete(int id)
        {
            return View(new Department { Id = id });
        }
    }
}
