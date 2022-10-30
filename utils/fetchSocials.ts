import { Social } from "../typings";



export async function fetchSocials() {
 const response = await fetch(`https://newportfolio-pml1wvgov-mezher120.vercel.app/api/getSocials`)
 const data = await response.json();
 const social: Social[] = data.socials;
 return social;

}
