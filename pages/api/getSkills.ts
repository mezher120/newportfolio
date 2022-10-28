import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity';   // para poder hacer las querys a sanity
import { sanityClient } from '../../sanity';  // lo importo de sanity.ts donde puse su configuracion
import { Skill } from '../../typings';


// lanzo la query para sanity

const query = groq`
  *[_type == "skill"]
`

type Data = {
    skills: Skill[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {

    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({ skills })
  }