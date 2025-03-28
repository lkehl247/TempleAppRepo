export default interface AvailableAppointments {
  availableAppointmentId: number;
  templeName: string;
  ordinanceName: string;
  Date: string | Date;
  Time: string | Date;
  availableSeats: number;
  isBooked: boolean;
  maxParticipants: number;
}
