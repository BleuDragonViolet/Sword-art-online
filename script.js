// Obtenir la vidéo et l'icône de volume
const video = document.getElementById('video');
const volumeIcon = document.getElementById('volume-icon');

// Toggle mute/unmute quand on clique sur l'icône de volume
volumeIcon.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;
        volumeIcon.textContent = '🔊'; // Changer l'icône en haut-parleur activé
    } else {
        video.muted = true;
        volumeIcon.textContent = '🔇'; // Changer l'icône en haut-parleur désactivé
    }
});

// Redirection après la fin de la vidéo
video.addEventListener('ended', () => {
    window.location.href = "Suite/index.html";  // Redirection vers la page souhaitée
});
