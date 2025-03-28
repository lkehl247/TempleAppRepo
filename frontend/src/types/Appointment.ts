export default interface Appointment {
  appointmentId: number;
  templeName: string;
  ordinanceName: string;
  userName?: string | null;
  userAccount?: string | null;
  appointmentTime: Date; // Allow both string and Date
  confirmed: boolean;
  cancelled: boolean;
  completed: boolean;
  notes?: string;
}
