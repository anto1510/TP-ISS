
//-------------------------APPELLE API--------------------------------------------------------------// 

const URL_API = "http://api.open-notify.org/iss-now.json";
fetch(URL_API)
    .then(response => response.json())
    .then(data => {
        console.log("Voici les cordonnées", data); 

    
console.log("Message affiché après 2 secondes");







//-------------------------------------------FIN---------------------------------------------//



//-------------------------------------------CONFIGURATION MAP (AVEC API)---------------------------------------------// 

const iss = data.iss_position;
const lat = iss.latitude;
const lon = iss.longitude;



var map = L.map('map').setView([lat, lon], 1);

// Affichage de la map grâce à la variable "map"
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Initialisation des marqueurs

 L.marker([lat, lon,map])
    .addTo(map)
    .bindPopup('ISS est ICI !!.')
    .openPopup();
});





// Appelle de la fonction


//--------------------------------------------------FIN---------------------------------------------------//

