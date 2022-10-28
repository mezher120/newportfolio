import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';   // para poder hacer las querys a sanity
import { sanityClient } from '../../sanity';  // lo importo de sanity.ts donde puse su configuracion
import { Social } from '../../typings';


// lanzo la query para sanity

const query = groq`
    *[_type == "social"]
`

type Data = {
    socials: Social[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const socials: Social[] = await sanityClient.fetch(query);
    console.log(socials)
    res.status(200).json({ socials })
  }