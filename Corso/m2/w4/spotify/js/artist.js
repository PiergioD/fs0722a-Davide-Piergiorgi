async function loadJSON(url) {
    const res = await fetch(url);
    return await res.json();
}

// variabili
let lista = document.querySelector('ol')
let i=1
let nomeArtista = document.querySelector('#nome-artista');
let fans = document.querySelector('#fans');
let cantante = document.querySelector('#cantante');
let sfondo = document.querySelector('#sfondo');
let altriAlbum= document.getElementById('containerAlbum')
const albums = [
    "5327691",
    "363906907",
    "217489292",
    "359324967",
    "313482367",
    "65373012",
  ]


//funzione per calcolare il minutaggio
function convertiInMinuti(durata) {
    let minuti = Math.floor(durata / 60);
    let secondi = durata - minuti * 60;
    if(secondi < 10) {
        return minuti + ":0" + secondi;
    }
    else {
        return minuti + ":" + secondi;
    }
}


// funzione per lista canzoni
function listaSongs (data){
    html=` <li class="row border-bottom border-secondary align-items-center">
    <div class="col-1 numero d-none d-md-inline">${i}</div>
    <div class="col-4 col-md-1 canzone">
        <img src="${data.album.cover_small}" alt="imgAlbum" class="">
    </div>
    <div class="col-8 col-md-6 ">${data.title}</div>
    <div class="col-2 views d-none d-md-block">${data.rank}</div>
    <div class="col-2 durata d-none d-md-block">${convertiInMinuti(data.duration)}</div>
</li>`
lista.insertAdjacentHTML('beforeend', html)
}


// funzione per stampare album
function renderAlbum(data){
    const html = `<a href="../albumPage/album.html?albumId=${data.album.id}" class="text-decoration-none text-white col-md-2">
    <div class="card">
        <img src="${data.album.cover_medium}"
            class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">${data.album.title}</p>
        </div>
    </div>
</a>`
altriAlbum.insertAdjacentHTML('beforeend',html)
document.getElementById('artista').textContent= `Discografia di ${data.artist.name}`
}


// funzione asincrona on load per caricare tutto
window.onload = async () => {
    let url = new URLSearchParams(window.location.search)
    let id = url.get("artistId");
    console.log(id)
    loadJSON(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`).then(res => {
        console.log(res);
        nomeArtista.textContent = res.name;
        fans.textContent = res.nb_fan+" Ascoltatori Mensili";
        cantante.textContent = `di ${res.name}`;
        sfondo.style.backgroundImage = `url('${res.picture_xl}')`
        // richiamo funzioni per popolare html

        

    })
    loadJSON(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`).then(res=>{
        console.log(res);
        res.data.forEach(element => {
            listaSongs(element);
            i++;
        });
    })

    
    
    //Load JSON per la sezione altri album dell'artista
    loadJSON(`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}/top?limit=50`).then(res=>{
        console.log(res);



let indexes=[];
        
        // togliere doppioni album 
        res.data.forEach(element => {
            if(!indexes.includes(element.album.id))
            {
                renderAlbum(element);
                indexes.push(element.album.id)
            }
            
            
        });
    })


    
}


