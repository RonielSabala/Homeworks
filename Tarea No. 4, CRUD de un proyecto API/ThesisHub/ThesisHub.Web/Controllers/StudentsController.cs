using Microsoft.AspNetCore.Mvc;
using ThesisHub.Domain.Entities;

namespace ThesisHub.Web.Controllers
{
    public class StudentsController : Controller
    {
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
            return View(new Student { Id = id });
        }

        public IActionResult Edit(int id)
        {
            return View(new Student { Id = id });
        }

        public IActionResult Delete(int id)
        {
            return View(new Student { Id = id });
        }
    }
}
