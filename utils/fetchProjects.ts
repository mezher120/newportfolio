import axios from "axios";
import { Project } from "../typings";



export async function fetchProjects() {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`);
    const projects: Project[] = res.data.project;
    return projects;
}