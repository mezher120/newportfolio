import { Skill } from "../typings";



export async function fetchSkills() {
 const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSkills`)
 const data = await response.json();
 const skill: Skill[] = data.skills;
 return skill;

}
