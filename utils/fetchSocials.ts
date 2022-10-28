import { Social } from "../typings";
import axios from 'axios';


export async function fetchSocials() {
 const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`)
 console.log(response, "estoy en fethc");
 const social: Social[] = response.data.socials;
 console.log(social);
 return social;

}
