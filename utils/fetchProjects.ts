import { Project } from "../typings";



export async function fetchProjects() {
    const res = await fetch(`https://newportfolio-pml1wvgov-mezher120.vercel.app/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.project;
    return projects;
}