interface SanityBody {     // creo un type gral. que siempre se repite y lo extiendo de los nuevos types que voy a crear
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string,
}

interface Image {    // creo un type de image que siempre es igual
    _type: "image"
    asset: {
        _ref:string,
        _type: string
    }

}



export interface Social extends SanityBody {   // creo los distintos types que voy a recibir del back
    _type: "social",
    title: string,
    url: string,
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo",
    address: string,
    backgroundInformation: string,
    email: string,
    heroImage: Image,
    name: string,
    phoneNumber: string,
    profilePic: Image,
    role: string,
    socials: Social[],
    title: string

}

export interface Skill extends SanityBody {
    _type: "skill",
    image: Image,
    progress: number,
    title: string
}

export interface Project extends SanityBody {
    _type:"project",
    image: Image,
    linkToBuild: string,
    summary: string,
    title: string,
    techologies: Skill[],
}

export interface Experience extends SanityBody {
    _type:"experience",
    company:string,
    companyImage: Image,
    dateEnded: string,
    dateStarted: string,
    isCurrentlyWorking: boolean,
    jobTitle: string, 
    points: string[],
    technologies: Skill[],
}