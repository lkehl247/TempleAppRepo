using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;


[Route("api/[controller]")]
[ApiController]
public class AppointmentController : ControllerBase
{
    private readonly AppDbContext _context;

    public AppointmentController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("AllAppointments")]
    public IActionResult GetAppointments(int pageSize = 10, int pageNum = 1)
    {
        var appointments = _context.Appointments
            .Skip((pageNum - 1) * pageSize)
            .Take(pageSize)
            .ToList();

        var totalNumAppointments = _context.Appointments.Count();

        return Ok(new
        {
            Appointments = appointments,
            TotalNumAppointments = totalNumAppointments
        });
    }
}