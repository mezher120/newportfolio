import { createClient } from "next-sanity";  // importamos createClient de next-sanity que instalamos
import createImageUrlBuilder from '@sanity/image-url'; // importamos para poder importar las imagenes de sanity

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATABASE || 'production',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '494n649f',  // tengo un problem que no me detecta el project ID
    apiVersion: '2021-03-25',
    useCdn: process.env.NODE_ENV === "production",
}; // todo esto esta en las docs de sanity es para configurarlo y traer la informacion del back al front.

export const sanityClient = createClient(config);  // lo voy a importar en mis rutas en carpeta api

export const urlFor = (source: any) => {
    return createImageUrlBuilder(config).image(source);   // para poder traer las imagenes de sanity
}