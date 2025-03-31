// @ts-ignore
import React, { useEffect, useState } from "react";
import Appointment from "../types/Appointment";

export const AppointmentList: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    const fetchUserAppointments = async () => {
      try {
        const response = await fetch(
          "http://localhost:5051/api/Appointment/AllUserAppointments?userName=ryanGosling"
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
  // Dummy data for testing
  useEffect(() => {
    const dummyAppointments: Appointment[] = [
      {
        appointmentId: "1",
        templeName: "Orem Temple",
        appointmentTime: new Date("2024-02-24T10:00:00").toISOString(),
        ordinanceName: "Baptism",
      },
      {
        appointmentId: "2",
        templeName: "Provo City Center Temple",
        appointmentTime: new Date("2024-02-26T16:00:00").toISOString(),
        ordinanceName: "Endowment",
      },
    ];
    setAppointments(dummyAppointments);
  }, []);

  return (
    <section>
      <h2>Upcoming Appointments</h2>
      <div>
        {appointments.length > 0 ? (
          appointments.map((a) => (
            <article key={a.appointmentId} className="appointment-box">
              <div>
                <p>
                  <strong>{a.templeName}</strong>
                </p>
                <p>
                  <strong>{a.ordinanceName}</strong>
                </p>
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
};
