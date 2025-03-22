document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        alert('Veuillez entrer un message.');
    } else {
        alert('Message envoyé !');
        // Ici, tu pourrais ajouter une requête AJAX pour envoyer le message à un serveur
    }
});