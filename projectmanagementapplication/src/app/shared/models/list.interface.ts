import { Student } from "app/shared/models/student.interface";

export interface List {
  id: number;
  name: string;
  repoGit: string;
  description: string;
  mentoring: string;
  pblic: boolean;
  toChange: string;
  confirmed: boolean;
  starred: boolean;
  students: Student[];
}
