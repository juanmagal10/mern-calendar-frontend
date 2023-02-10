const APIkey = 'LIX21i1kPv2n1jfnHExR2EnPVS9HcQzw'

const peticion=fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIkey}`)

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url
        
        document.body.append(img)
    })
    .catch(console.warn)
