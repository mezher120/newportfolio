
import { Experience } from "../typings";

export async function fetchExperience() {
    const response = await fetch('https://newportfolio-pml1wvgov-mezher120.vercel.app/api/getExperience');
    const data = await response.json();
    const experience: Experience[] = data.experience;
    return experience;
}