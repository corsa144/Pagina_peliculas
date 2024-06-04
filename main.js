// Script para index.html
document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    if (loginButton) {
        loginButton.addEventListener('click', function() {
            window.location.href = 'login.html'; // Redirige a la página de inicio de sesión
        });
    }

    var loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            if (username === '' || password === '') {
                event.preventDefault(); // Previene el envío del formulario

                Swal.fire({
                    icon: 'warning',
                    title: 'Campos vacíos',
                    text: 'Por favor, complete todos los campos.',
                });
            }
        });
    }

    var getPokemonButton = document.getElementById('getPokemonButton');
    if (getPokemonButton) {
        getPokemonButton.addEventListener('click', function() {
            fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
                .then(response => response.json())
                .then(data => {
                    localStorage.setItem('pokemonData', JSON.stringify(data.results));
                    window.location.href = 'pokemon.html'; // Redirige a la página de lista de Pokémon
                })
                .catch(error => {
                    console.error('Error:', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema al obtener los datos de Pokémon.',
                    });
                });
        });
    }
});


