// Variabile per tenere traccia della lingua corrente (default: Italiano)
let linguaCorrente = 'it';

// Funzione per cambiare lingua
function cambiaLingua() {
    if (linguaCorrente === 'it') {
        // Cambia a Spagnolo
        document.getElementById('title').textContent = 'Tienda Nike';
        document.querySelectorAll('.carousel-caption a').forEach(btn => {
            btn.textContent = 'Descubre más';
        });
        document.querySelectorAll('.carousel-control-prev .visually-hidden').forEach(span => {
            span.textContent = 'Anterior';
        });
        document.querySelectorAll('.carousel-control-next .visually-hidden').forEach(span => {
            span.textContent = 'Siguiente';
        });
        document.getElementById('linguaBtn').textContent = 'Idioma';
        linguaCorrente = 'es';
    } else {
        // Torna a Italiano
        document.getElementById('title').textContent = 'Nike Store';
        document.querySelectorAll('.carousel-caption a').forEach(btn => {
            btn.textContent = 'Scopri di più';
        });
        document.querySelectorAll('.carousel-control-prev .visually-hidden').forEach(span => {
            span.textContent = 'Precedente';
        });
        document.querySelectorAll('.carousel-control-next .visually-hidden').forEach(span => {
            span.textContent = 'Successivo';
        });
        document.getElementById('linguaBtn').textContent = 'Lingua';
        linguaCorrente = 'it';
    }
}

// Ascoltatore per il click sul pulsante
document.getElementById('linguaBtn').addEventListener('click', cambiaLingua);