import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';   // para poder hacer las querys a sanity
import { sanityClient } from '../../sanity';  // lo importo de sanity.ts donde puse su configuracion
import { Experience } from '../../typings';


// lanzo la query para sanity

const query = groq`
*[_type == "experience"] {
  ..., 
  technologies[]->
}
`

type Data = {
    experience: Experience[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const experience: Experience[] = await sanityClient.fetch(query);
    res.status(200).json({ experience })
  }