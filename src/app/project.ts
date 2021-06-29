export interface Project {
    name: string;
    description: string;
    type: string;
    skills: string;
    startdate: string;
    enddate: string;
    github?: string;
    otherlinks?: Array<Object>;
}