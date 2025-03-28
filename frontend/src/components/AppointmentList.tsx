// @ts-ignore
import React, { useEffect, useState } from "react";
import { Appointment } from "../types/Appointment";

function AppointmentList() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const response = await fetch(
          "http://localhost:5051/api/Appointment/AllUserAppointments"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch appointments");
        }
        const data: { appointments: Appointment[] } = await response.json();

        console.log("API Response:", data); // Debugging

        setAppointments(data.appointments || []);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchUserAppointments();
  }, []);

  return (
    <section>
      <h2>Upcoming Appointments</h2>
      <div>
        {appointments.length > 0 ? (
          appointments.map((a) => (
            <article key={a.appointmentId} className="appointment-box">
              <div>
                <h1>{a.templeName}</h1>
                <p>{new Date(a.appointmentTime).toLocaleDateString()}</p>
                <p>{new Date(a.appointmentTime).toLocaleTimeString()}</p>
              </div>
            </article>
          ))
        ) : (
          <p>No upcoming appointments.</p>
        )}
      </div>
    </section>
  );
}

export default AppointmentList;
