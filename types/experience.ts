export interface Experience {
  id: string;
  company: string;
  role: string;
  description: Array<string>;
  startDate: string;
  endDate: string | null;
  technologies: string[];
}