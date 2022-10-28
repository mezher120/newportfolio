import { Social } from "../typings";



export async function fetchSocials() {
 const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
 const data = await response.json();
 const social: Social[] = data.socials;
 return social;

}
