using System.Runtime.InteropServices;
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

    [HttpGet("ScheduleAppointments")]
    public IActionResult GetAppointments(
        [FromQuery] int? TempleId,
        [FromQuery] int? OrdinanceId,
        [FromQuery] DateTime? AppointmentDate,
        [FromQuery] DateTime? AppointmentTime
        
        )
    {
        var query = _context.Appointments.AsQueryable();
        
        if (TempleId.HasValue)
            query = query.Where(x => x.TempleId == TempleId);
        if (OrdinanceId.HasValue)
            query = query.Where(x => x.OrdinanceId == OrdinanceId);
        if (AppointmentDate.HasValue)
            query = query.Where(x => x.AppointmentDate >= AppointmentDate);
        if (AppointmentTime.HasValue)
            query = query.Where(x => x.AppointmentTime >= AppointmentTime);

        
        var appointments = query.ToList();
        return Ok(appointments);
    }
    
    [HttpGet("GetTemples")]
    public IActionResult GetTemples()
    {
        // Fetch only TempleId and TempleName from the database
        var temples = _context.Temples
            .Select(t => new 
            {
                t.TempleId,
                t.TempleName
            })
            .ToList();

        return Ok(temples);
    }
    
    [HttpGet("GetOrdinances")]
    public IActionResult GetOrdinances()
    {
        // Fetch only OrdinanceId and OrdinanceName from the database
        var ordinances = _context.Ordinances
            .Select(o => new 
            {
                o.OrdinanceId,
                o.OrdinanceName
            })
            .ToList();

        return Ok(ordinances);
    }
}

