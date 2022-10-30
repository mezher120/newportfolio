import { Skill } from "../typings";



export async function fetchSkills() {
 const response = await fetch(`https://newportfolio-pml1wvgov-mezher120.vercel.app/api/getSkills`)
 const data = await response.json();
 const skill: Skill[] = data.skills;
 return skill;

}
