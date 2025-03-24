export default interface Appointment {
  appointmentId: number;
  templeId: number;
  temple: number;
  ordinanceId: number;
  ordinance: number;
  userName?: string;
  userAccount: string;
  appointmentDate: Date;
  appointmentTime: Date;
  confirmed: boolean;
  cancelled: boolean;
  completed: boolean;
  notes?: string;
}
