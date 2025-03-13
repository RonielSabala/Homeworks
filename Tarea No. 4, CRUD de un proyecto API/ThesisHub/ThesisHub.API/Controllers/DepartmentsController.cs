using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ThesisHub.API.Dtos;
using ThesisHub.Persistence;

namespace ThesisHub.API.Controllers;

[ApiController]
[Route("[controller]")]
public class DepartmentsController : ControllerBase
{
    private readonly ThesisHubContext _context;

    public DepartmentsController(ThesisHubContext context)
    {
        _context = context;
    }

}
