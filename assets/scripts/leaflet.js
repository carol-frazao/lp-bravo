// Define as coordenadas do centro do mapa
var map = L.map('map').setView([-16.239288, -50.937488], 4);
var resetBtn = L.DomUtil.create('button', 'reset-button', L.DomUtil.get('map'));
import { filiais } from "./filiais.js";

resetBtn.innerHTML = "Reset";
resetBtn.style.top = '10px';
resetBtn.style.right = '10px';
resetBtn.style.position = 'absolute';
resetBtn.style.zIndex = '999';

console.log(filiais)


// Adiciona uma camada de tiles do OpenStreetMap ao mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    function removeMarks() {
        map.eachLayer(function(layer) {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });
    }

    // Define o objeto com informações sobre as filiais
    var states = {
        AL: {
            center: [-9.75446461509024, -36.65550404137929],
            zoom: 6,
            branches: [
            {
                name: 'Bravo Brasil Corretora',
                address: 'Endereço fictício',
                center: [-9.633196226711544, -35.720656655181315],
                zoom: 15
            }
            // Adicione mais filiais aqui...
            ]
        },
        SP: {
            center: [-23.54326681595273, -46.63819028315632],
            zoom: 10,
            branches: [
            {
                name: 'Bravo Brasil Corretora',
                address: 'R. Itapura, 239 - Vila Gomes Cardim, São Paulo - SP, 03310-000',
                center: [-23.54041450137944, -46.56717913403756],
                zoom: 15
            },
            {
                name: 'Bravo Brasil Corretora',
                address: 'Endereço fictício',
                center: [-23.550665, -46.648976],
                zoom: 15
            }
            // Adicione mais filiais aqui...
            ]
        },
        RS: {
            center: [-29.571542, -53.211137],
            zoom: 6,
            branches: [
            {
                name: 'Bravo Brasil Corretora',
                address: 'Endereço fictício',
                center: [-30.044200, -51.183951],
                zoom: 15
            }
            // Adicione mais filiais aqui...
            ]
        },
        // Adicione mais estados aqui...
    };

    for (var state in states) {
        let marker = L.marker(states[state].center).addTo(map);
        let branches = states[state].branches;
        let center = states[state].center;
        let zoom = states[state].zoom;
        // marker.bindPopup("<b>" + state + "</b><br>Clique para exibir as filiais.");

        marker.on('click', e => {
            // Remover quaisquer marcadores existentes do mapa
            removeMarks()

            // Atualizar as coordenadas do centro e o nível de zoom no mapa
            map.setView(center, zoom);

            // Listar as filiais de cada estado
            for (var i = 0; i < branches.length; i++) {
                let branch = branches[i];
                var markerState = L.marker(branch.center).addTo(map);

                markerState.bindPopup("<b>" + branch.name + "</b> <br>" + branch.address);

                markerState.on('click', e => {
                    map.setView(branch.center, branch.zoom);
                })
            }
        }).bindTooltip(state, { permanent: false, direction: 'center', className: 'state-label' });

        resetBtn.onclick = function() {

            // Mantenha uma lista separada dos marcadores dos estados
            let stateMarkers = [];

            removeMarks()
            // Remova apenas os marcadores dos estados
            for (var i = 0; i < stateMarkers.length; i++) {
                map.removeLayer(stateMarkers[i]);
            }
            stateMarkers = [];

            // Adiciona novamente o marker para cada estado
            for (var state in states) {
                let marker = L.marker(states[state].center).addTo(map);
                stateMarkers.push(marker);

                let branches = states[state].branches;
                let center = states[state].center;
                let zoom = states[state].zoom;
            // marker.bindPopup("<b>" + state + "</b><br>Clique para exibir as filiais.");

            marker.on('click', e => {
                // Remover quaisquer marcadores existentes do mapa
                removeMarks()

                // Atualizar as coordenadas do centro e o nível de zoom no mapa
                map.setView(center, zoom);

                // Listar as filiais de cada estado
                for (var i = 0; i < branches.length; i++) {
                    let branch = branches[i];
                    let markerState = L.marker(branch.center).addTo(map);

                    markerState.bindPopup("<b>" + branch.name + "</b> <br>" + branch.address);

                    markerState.on('click', e => {
                        map.setView(branch.center, branch.zoom);
                    })
                }}).bindTooltip(state, { permanent: false, direction: 'center', className: 'state-label' });
            }

            // Redefine as coordenadas do centro do mapa e o nível de zoom
            map.setView([-16.239288, -50.937488], 4);
        };

}