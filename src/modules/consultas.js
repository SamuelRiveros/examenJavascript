// Se importan los jsons online de las apis

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