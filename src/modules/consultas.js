//- Consulta los títulos y años de lanzamiento originales de todos los contenidos (películas y programas de TV). 
//- Consulta los identificadores y títulos de todas las películas.
//- Consulta las URL completas y los tipos de objetos (películas y programas de TV).
//- Consulta los títulos, años de lanzamiento originales y tipos de objetos, pero solo para películas.

//- Filtrar películas por año de lanzamiento. PELICULASDATA
//- Filtrar películas por actor. PELICULASDATA
//- Filtrar películas por rango de IMDb. PELICULASDATA
//- Consulta los títulos de todas las películas. PELICULASDATA 

export const peliculasdata = async() =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?q=Niram`)
    let data = await res.json();
    return data
}


export const getvideotrailer = async() =>{
    let res = await fetch(`http://media.imdbot.workers.dev/tt5548032`)
    let data = await res.json();
    return data
}

export const getphotoposter = async() =>{
    let res = await fetch(`https://photo.imdbot.workers.dev/tt6067752`)
    let data = await res.json();
    return data
}


export const getmoredetailsofparticularimDb = async() =>{
    let res = await fetch(`https://search.imdbot.workers.dev/?tt=tt13667402`)
    let data = await res.json();
    return data
}


export const moviesources = async() =>{
    let res = await fetch(`https://justwatch.imdbot.workers.dev/?q=Niram&L=en_IN`)
    let data = await res.json();
    return data
}