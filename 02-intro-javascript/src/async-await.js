

const getImage = async() => {
    const APIkey = 'LIX21i1kPv2n1jfnHExR2EnPVS9HcQzw'

    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIkey}`)
    const data = await resp.json();
    const {url}=await data.data.images.original


    const img = document.createElement('IMG')
    
    img.src = url
    
    document.body.append(img)
}

getImage()