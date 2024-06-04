// Script para pokemon.html
document.addEventListener('DOMContentLoaded', function() {
    var pokemonContainer = document.getElementById('pokemonContainer');
    var pokemonData = JSON.parse(localStorage.getItem('pokemonData'));

    if (pokemonData && pokemonContainer) {
        pokemonData.forEach(pokemon => {
            var div = document.createElement('div');
            div.className = 'pokemon';
            div.innerText = pokemon.name;
            pokemonContainer.appendChild(div);
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No se encontraron datos de Pokémon.',
        });
    }
});