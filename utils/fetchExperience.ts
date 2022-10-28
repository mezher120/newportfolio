import axios from "axios";
import { Experience } from "../typings";

export async function fetchExperience() {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const experience: Experience[] = response.data.experience;
    return experience;
}
