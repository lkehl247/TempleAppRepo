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
            .Include(a => a.Temple) // Eagerly load related Temple data
            .Include(a => a.Ordinance) // Eagerly load related Ordinance data
            .Select(a => new
            {
                a.AppointmentId,
                TempleName = a.Temple.TempleName, // Replace templeId with templeName
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

        return Ok(new
        {
            Appointments = appointments,
        });
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


    }
    