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
    public IActionResult GetAppointments([FromQuery] int? templeId, [FromQuery] int? ordinanceId, [FromQuery] DateTime? startDate, [FromQuery] DateTime? endDate, [FromQuery] TimeSpan? startTime, [FromQuery] TimeSpan? endTime)
    {
        // Use eager loading to get related Temple and Ordinance data
        var query = _context.Appointments.AsQueryable();

        // Apply filters based on query parameters
        if (templeId.HasValue)
        {
            query = query.Where(a => a.TempleId == templeId.Value);
        }

        if (ordinanceId.HasValue)
        {
            query = query.Where(a => a.OrdinanceId == ordinanceId.Value);
        }

        // if (startDate.HasValue)
        // {
        //     query = query.Where(a => a.AppointmentTime.Date >= startDate.Value.Date);
        // }

        // if (endDate.HasValue)
        // {
        //     query = query.Where(a => a.AppointmentTime.Date <= endDate.Value.Date);
        // }

        // if (startTime != null)
        // {
        //     query = query.Where(a => a.AppointmentTime.TimeOfDay >= startTime);
        // }

        // if (endTime != null)
        // {
        //     query = query.Where(a => a.AppointmentTime.TimeOfDay <= endTime);
        // }
        return Ok(query.ToList());
    }

    [HttpGet("GetUserAppointments")]
    public IActionResult GetUserAppointments([FromQuery] string userName)
    {
        // get appointments for a specific user
        var query = _context.Appointments.Where(a => a.UserName == userName);
        return Ok(query);
    }

    [HttpGet("UserName")]
        public IActionResult GetUserName()
        {
            var userName = _context.Members
                .Select(m => new
                {
                    m.FirstName,
                    m.LastName,
                    m.WardId, 
                    m.HomeStake,
                    m.RecommendStatus,
                    m.RecommendIssueDate,
                    m.RecommendExpirationDate
                })
                .FirstOrDefaultAsync();  // Get the first match

            return Ok(userName);
        }
        
    [HttpGet("AvailableAppointments")]
    public IActionResult GetAvailableAppointments()
    {
        // Fetch available appointments with related Temple and Ordinance data
        var availableAppointments = _context.AvailableAppointments
            .Include(aa => aa.Temple)         // Eagerly load related Temple data
            .Include(aa => aa.Ordinance)      // Eagerly load related Ordinance data
            .Select(aa => new
            {
                aa.AvailableAppointmentId,
                TempleName = aa.Temple.TempleName,       // Replace TempleId with TempleName
                OrdinanceName = aa.Ordinance.OrdinanceName, // Replace OrdinanceId with OrdinanceName
                aa.Date,
                aa.Time,
                aa.AvailableSeats,
                aa.IsBooked,
                aa.MaxParticipants
            })
            .ToList();

        return Ok(new
        {
            AvailableAppointments = availableAppointments,
        });
    }
    [HttpGet("GetTemples")]
    public IActionResult GetTemples()
    {
        var temples = _context.Temples.ToList();
        return Ok(temples);
    }

    [HttpGet("GetOrdinances")]
    public IActionResult GetOrdinances()
    {
        var ordinances = _context.Ordinances.ToList();
        return Ok(ordinances);
    }
}
    