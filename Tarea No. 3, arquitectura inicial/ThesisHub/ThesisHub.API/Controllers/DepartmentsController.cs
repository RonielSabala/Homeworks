using Microsoft.AspNetCore.Mvc;
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
