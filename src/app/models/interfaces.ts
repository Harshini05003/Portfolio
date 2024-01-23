export interface Education {
    id: number;
    course: string;
    institution: string;
    completionBy: number;
    marks: number;
  }
export interface Internship {
    id: number;
    title: string;
    role: string;
    timePeriod: string;
    duration: string;
    companyname?: string; 
  }
export interface Certificate {
    id: number;
    certificate: string;
  }
export interface Project {
    id: number;
    title: string;
    timePeriod: string;
    description: string;
  }
    
  