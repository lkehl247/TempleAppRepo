using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
    public IActionResult GetAppointments()
    {
        // Use eager loading to get related Temple and Ordinance data
        var appointments = _context.Appointments
            .Include(a => a.Temple)          // Eagerly load related Temple data
            .Include(a => a.Ordinance)       // Eagerly load related Ordinance data
            .Select(a => new
            {
                a.AppointmentId,
                TempleName = a.Temple.TempleName,       // Replace templeId with templeName
                OrdinanceName = a.Ordinance.OrdinanceName, // Replace ordinanceId with ordinanceName
                a.UserName,
                a.UserAccount,
                AppointmentTime = a.AppointmentTime.ToString("yyyy-MM-dd HH:mm:ss"),
                a.Confirmed,
                a.Cancelled,
                a.Completed,
                a.Notes
            })
            .ToList();

        // Total number of appointments (for pagination)
        var totalNumAppointments = _context.Appointments.Count();

        return Ok(new
        {
            Appointments = appointments,
        });
    }

    
}