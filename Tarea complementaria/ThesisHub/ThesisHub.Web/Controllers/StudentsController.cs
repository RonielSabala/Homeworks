﻿using Microsoft.AspNetCore.Mvc;
using ThesisHub.Presentation.ViewModels;

namespace ThesisHub.Web.Controllers
{
    public class StudentsController : Controller
    {
        public async Task<IActionResult> Index()
        {
            return View();
        }

        public async Task<IActionResult> Create()
        {
            return View();
        }

        public async Task<IActionResult> Details(int id)
        {
            return View(new StudentViewModel { Id = id });
        }

        public async Task<IActionResult> Edit(int id)
        {
            return View(new StudentViewModel { Id = id});
        }

        public async Task<IActionResult> Delete(int id)
        {
            return View(new StudentViewModel { Id = id });
        }
    }
}
