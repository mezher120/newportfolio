
import { Experience } from "../typings";

export async function fetchExperience() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await response.json();
    const experience: Experience[] = data.experience;
    return experience;
}