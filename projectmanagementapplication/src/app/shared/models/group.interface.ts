import { Student } from "app/shared/models/student.interface";

export interface Group {
  id: number;
  workerId: number;
  name: string;
  students: Student[];
}
