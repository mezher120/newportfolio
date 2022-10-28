import { Skill } from "../typings";
import axios from 'axios';


export async function fetchSkills() {
 const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
 const skill: Skill[] = response.data.skills;
 return skill;

}
