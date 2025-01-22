function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Désactiver le menu contextuel par défaut et afficher le menu personnalisé
document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    const customMenu = document.getElementById("custom-menu");
    customMenu.style.top = `${event.clientY}px`;
    customMenu.style.left = `${event.clientX}px`;
    customMenu.style.display = "block";
});

// Masquer le menu contextuel personnalisé lorsqu'on clique ailleurs
document.addEventListener("click", () => {
    const customMenu = document.getElementById("custom-menu");
    customMenu.style.display = "none";
});

// Fonction pour rafraîchir la page
function refreshPage() {
    location.reload();
}

// Fonction pour changer de langue
function changeLanguage(lang) {
    if (lang === "fr") {
        window.location.href = "index.html";
    } else if (lang === "en") {
        window.location.href = "ANindex.html";
    }
}

// Gestion des pistes musicales
let currentMusicIndex = 0;
const musicFiles = [
    'sound/Sword Art Online - Opening 1.mp3',
    'sound/A Brisk Conversation.mp3',
    'sound/A Narrow Escape.mp3',
    'sound/A New World of Fairies.mp3',
    'sound/A Strategy Meeting.mp3',
    'sound/A Tender Feeling.mp3',
    'sound/Daily Life, You and Me.mp3',
    'sound/Dance with Me.mp3',
    'sound/Death Gun.mp3',
    'sound/Desolate Landscape.mp3',
    'sound/Drive Your Way.mp3',
    'sound/Got to Win.mp3',
    'sound/Gracefully.mp3',
    'sound/Gunland.mp3',
    'sound/He, or She?.mp3',
    'sound/Heartbreaking Reality.mp3',
    'sound/Luminous Sword.mp3',
    'sound/March Down.mp3',
    'sound/Moon and Shadow.mp3',
    'sound/No-Escape.mp3',
    'sound/Peace, Again.mp3',
    'sound/Survive the Swordland.mp3',
    'sound/Swordland - To Be Continued.mp3',
    'sound/Swordland.mp3',
    'sound/Tears for You.mp3',
    'sound/The First Town.mp3',
    'sound/You Are Not Alone #3.mp3',
    'sound/You Are Not Alone Acoustic Guitar Version.mp3',
    'sound/You Are Not Alone Piano Version.mp3',
    'sound/You Are Not Alone.mp3',
    'sound/You Are the Winner!.mp3',
    'sound/Yui.mp3'
];

let audioFond = new Audio();
let audioMenu = new Audio('SoundM/Menu.mp3');
let buttonClickSound = new Audio('SoundM/bouton.m4a');
let isHoverSoundPlaying = false;

function nextMusic() {
    currentMusicIndex = (currentMusicIndex + 1) % musicFiles.length;
    playBackgroundMusic();
}

function previousMusic() {
    currentMusicIndex = (currentMusicIndex - 1 + musicFiles.length) % musicFiles.length;
    playBackgroundMusic();
}

function playBackgroundMusic() {
    audioFond.src = musicFiles[currentMusicIndex];
    audioFond.play().catch(error => {
        console.error("Erreur lors de la lecture de la musique de fond :", error);
    });

    audioFond.onended = function () {
        nextMusic();
    };
}



// Gestion des sons interactifs
document.body.addEventListener('click', function () {
    if (audioFond.paused) {
        playBackgroundMusic();
    }

    buttonClickSound.currentTime = 0; // Remettre le son au début
    buttonClickSound.play().catch(error => {
        console.error("Erreur lors de la lecture du son de bouton :", error);
    });
});

const header = document.querySelector('header');
header.addEventListener('mouseenter', function () {
    if (!isHoverSoundPlaying) {
        audioMenu.currentTime = 0;
        audioMenu.play().catch(error => {
            console.error("Erreur lors de la lecture du son du menu :", error);
        });
        isHoverSoundPlaying = true;
    }
});

header.addEventListener('mouseleave', function () {
    isHoverSoundPlaying = false;
});

// Amélioration de la disposition des sous-menus
document.addEventListener("DOMContentLoaded", () => {
    const customMenu = document.getElementById("custom-menu");

    customMenu.innerHTML = `
        <div onclick="refreshPage()">Actualiser</div>
        <hr>
        <div onclick="nextMusic()">⏭️ Musique suivante</div>
        <div onclick="previousMusic()">⏮️ Musique précédente</div>
        <hr>
        <div>
            Langues
            <div class="submenu">
                <div onclick="changeLanguage('fr')">
                    <img src="img/fr.png" alt="Français" class="flag-icon"> Français
                </div>
                <div onclick="changeLanguage('en')">
                    <img src="img/uk.png" alt="Anglais" class="flag-icon"> Anglais
                </div>
            </div>
        </div>
    `;

    // Ajouter un lecteur audio caché pour la gestion des pistes
    const audioPlayer = document.createElement("audio");
    audioPlayer.id = "audio-player";
    document.body.appendChild(audioPlayer);
});


window.addEventListener('load', () => {
    window.scrollTo(0, 0); // Remonte en haut de la page
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
    }, 500);  // Délai pour un effet de démarrage naturel (optionnel)
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}




window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
    }, 500);  // Délai pour un effet de démarrage naturel (optionnel)
});


const characters = {
    kirito: {
        name: "Kirito (Kazuto Kirigaya)",
        img: "img/info/kirito.png",
        description: "⚔️ **Kirito**, alias **Kazuto Kirigaya**, est le protagoniste principal de *Sword Art Online*. 🎮 Connu comme un 'beater' 🛡️, il se bat seul et utilise des stratégies astucieuses pour affronter les boss. Armé de son épée légendaire *Elucidator*, il devient une légende dans le jeu. Son amour pour **Asuna** ❤️ et sa volonté de protéger ses amis 💪 le poussent à des exploits héroïques. 🌟"
    },
    asuna: {
        name: "Asuna Yuuki",
        img: "img/info/Asuna.png",
        description: "⚔️ **Asuna** est une combattante exceptionnelle et l'intérêt amoureux de Kirito. ❤️ Vice-commandante des 'Knights of the Blood Oath', elle est surnommée 'Flash' 🌪️ pour sa vitesse au combat. Dévouée à sauver les joueurs, elle fait preuve d'un courage et d'une force mentale incroyables. 🌟"
    },
    klein: {
        name: "Klein (Ryotaro Tsuboi)",
        img: "img/info/Klein.png",
        description: "🛡️ **Klein** est l'un des premiers amis de Kirito. Leader loyal et protecteur de sa guilde, il est toujours prêt à défendre ses camarades et à se battre pour ce qui est juste. Son humour et sa bravoure en font un allié de confiance. 💪"
    },
    agil: {
        name: "Agil (Andrew Gilbert Mills)",
        img: "img/info/Agil.png",
        description: "🛠️ **Agil** est un marchand robuste avec un grand cœur. Malgré son pragmatisme, il est profondément engagé à aider les autres joueurs à survivre. 💼 Son magasin est un refuge pour de nombreux aventuriers, et son amitié avec Kirito est précieuse. 🤝"
    },
    silica: {
        name: "Silica (Keiko Ayano)",
        img: "img/info/Silica.png",
        description: "🐉 **Silica** est une jeune joueuse avec la capacité unique d'invoquer un dragon de compagnie, **Pina**. 🐲 Elle peut paraître innocente, mais elle est courageuse et prête à se battre pour ses amis. 🌸"
    },
    lisbeth: {
        name: "Lisbeth (Rika Shinozaki)",
        img: "img/info/Lisbeth.png",
        description: "⚒️ **Lisbeth** est une forgeronne talentueuse et une amie proche d'Asuna. Elle fabrique certaines des épées les plus puissantes pour Kirito, prouvant ainsi son importance au sein du groupe. 🔨 Son optimisme et son courage en font un personnage attachant. 💖"
    },
    yui: {
        name: "Yui",
        img: "img/info/Yui.png",
        description: "🤖 **Yui** est une IA conçue pour surveiller le bien-être des joueurs. Elle devient la 'fille adoptive' de Kirito et Asuna 👨‍👩‍👧, leur offrant des conseils grâce à ses vastes connaissances. Son lien émotionnel avec eux est touchant. ❤️"
    },
    sachi: {
        name: "Sachi",
        img: "img/info/Sachi.png",
        description: "😔 **Sachi** est un membre de la guilde de Kirito dont la mort tragique laisse une cicatrice émotionnelle profonde sur lui. 🖤 Sa perte marque un tournant important dans le développement de Kirito en tant que héros. 🕊️"
    },
    diavel: {
        name: "Diavel",
        img: "img/info/Diavel.png",
        description: "⚔️ **Diavel** est un leader charismatique et courageux qui guide le premier raid de boss. Son sacrifice héroïque 💀 pour ses camarades démontre l'importance du courage et de la responsabilité dans SAO. ⚡"
    },
    kuradeel: {
        name: "Kuradeel",
        img: "img/info/Kuradeel.png",
        description: "😠 **Kuradeel** est un personnage complexe, parfois antagoniste, dont les actions sombres révèlent les tensions et les luttes au sein des guildes de SAO. ⚔️"
    },
    kibaou: {
        name: "Kibaou",
        img: "img/info/Kibaou.png",
        description: "👿 **Kibaou** est manipulateur et cherche constamment à augmenter son pouvoir au sein des joueurs. Son égoïsme et ses actions agressives créent des conflits qui menacent la cohésion des groupes. 🧨"
    },
    heathcliff: {
        name: "Heathcliff (Akihiko Kayaba)",
        img: "img/info/Heathcliff.png",
        description: "👑 **Heathcliff** est le créateur de SAO et l'antagoniste principal de l'arc Aincrad. 🧠 Manipulateur et puissant, il impose une présence imposante sur le monde du jeu. ⚔️ Son rôle d'architecte et de tyran montre les dangers du contrôle absolu. 🏰"
    },
    argo: {
        name: "Argo",
        img: "img/info/Argo.png",
        description: "🦊 **Argo** est une hackeuse astucieuse et informatrice de Kirito et Asuna. 💻 Elle joue un rôle crucial dans la transmission d'informations vitales pour leur progression. Son esprit vif et son réseau en font un allié de choix. 📜"
    },
    thinker: {
        name: "Thinker",
        img: "img/info/Thinker.png",
        description: "🧠 **Thinker** est un stratège brillant, souvent consulté pour son expertise dans les mécanismes du jeu et les raids de boss. 🎮 Sa sagesse aide à naviguer dans les situations les plus dangereuses. 💡"
    },
    yulier: {
        name: "Yulier",
        img: "img/info/Yulier.png",
        description: "⚔️ **Yulier** est une guerrière dévouée qui illustre la bravoure et la loyauté de ceux qui se battent pour survivre dans SAO. 🌟 Son sens du devoir est admirable. 🛡️"
    },
    johnny_black: {
        name: "Johnny Black",
        img: "img/info/Johnny Black.png",
        description: "🕶️ **Johnny Black** est un joueur mystérieux et dangereux, apportant une dose de suspense et d'intrigue dans l'univers de SAO. 🎯"
    },
    poh: {
        name: "PoH (Prince of Hell)",
        img: "img/info/PoH.png",
        description: "👹 **PoH** est un antagoniste redouté, leader d'une guilde maléfique. Ses actions illustrent les dangers des jeux en ligne et la cruauté que certains joueurs peuvent montrer. ⚔️"
    },
    grimlock: {
        name: "Grimlock",
        img: "img/info/Grimlock.png",
        description: "🛡️ **Grimlock** est un personnage impitoyable, incarnant la dureté de *Sword Art Online*. Ses actions démontrent les risques mortels dans ce monde virtuel. ⚔️"
    },
    yolko: {
        name: "Yolko",
        img: "img/info/Yolko.png",
        description: "🎮 **Yolko** est un personnage mineur, mais son rôle unique ajoute de la couleur et du contraste à l'univers de SAO. 🎭"
    },
    leafa: {
        name: "Leafa (Suguha Kirigaya)",
        img: "img/info/Leafa.png",
        description: "🧚 **Leafa** est la cousine de Kirito et une guerrière talentueuse dans *Alfheim Online*. 🛡️ Experte en magie et en vol, elle est déterminée à se forger sa propre identité en dehors de son célèbre cousin. 🌟"
    },
    oberon: {
        name: "Oberon (Nobuyuki Sugou)",
        img: "img/info/Oberon.png",
        description: "👑 **Oberon** est le principal antagoniste de l'arc Alfheim. Il manipule et exploite les joueurs pour ses propres ambitions sinistres. 💀"
    },
    recon: {
        name: "Recon (Shinichi Nagata)",
        img: "img/info/Recon.png",
        description: "🏹 **Recon** est un archer et un ami loyal de Leafa. 🛡️ Bien qu'il soit plus réservé, il joue un rôle de soutien crucial dans leurs aventures. 🌲"
    },
    eugene: {
        name: "Eugene",
        img: "img/info/Eugene.png",
        description: "⚔️ **Eugene** est un guerrier fort et honorable, contribuant à la lutte contre Oberon. Son dévouement à ses alliés en fait un adversaire redoutable. 🛡️"
    },
    sinon: {
        name: "Sinon (Shino Asada)",
        img: "img/info/Sinon.png",
        description: "🎯 **Sinon** est une tireuse d'élite dans *Gun Gale Online*, luttant contre ses propres démons intérieurs. 🔫 Elle devient une alliée précieuse pour Kirito. 🌟"
    },
    death_gun: {
        name: "Death Gun (Sterben)",
        img: "img/info/Death Gun.png",
        description: "👿 **Death Gun** est le tueur en série qui hante *Gun Gale Online*, représentant une menace réelle pour les joueurs. ⚔️ Son nom évoque la terreur. 💀"
    },
    shinkawa: {
        name: "Shinkawa Kyouji",
        img: "img/info/Shinkawa Kyouji.png",
        description: "🧠 **Shinkawa Kyouji** est un personnage complexe dont les motivations sont explorées tout au long de l'arc Phantom Bullet. Son rôle ambigu ajoute de la profondeur à l'intrigue. 🔍"
    },
    yamikaze: {
        name: "Yamikaze",
        img: "img/info/Yamikaze.png",
        description: "⚔️ **Yamikaze** est un joueur redouté dans *Gun Gale Online*, connu pour ses compétences exceptionnelles au combat. 💥 Il représente un défi sérieux pour Kirito et les autres joueurs. 🎯"
    },
    pale_rider: {
        name: "Pale Rider",
        img: "img/info/Pale Rider.png",
        description: "🎯 **Pale Rider** est un tireur d'élite légendaire. Ses compétences redoutables en font un adversaire difficile pour **Kirito** et **Sinon** dans Gun Gale Online. 🔫"
    },
    sterben: {
        name: "Sterben (Shouichi Shinkawa)",
        img: "img/info/Sterben (Shouichi Shinkawa).png",
        description: "💀 **Sterben**, alias **Shouichi Shinkawa**, est l'un des principaux antagonistes de l'arc Phantom Bullet. ⚔️ Ses actions ont des répercussions majeures sur les autres personnages, ajoutant une tension intense à l'histoire. 🎭"
    },
    dyne: {
        name: "Dyne",
        img: "img/info/Dyne.png",
        description: "⚔️ **Dyne** est un joueur reconnu pour ses talents au combat dans *Gun Gale Online*. 🎮 Son rôle en tant que leader contribue à la dynamique de l'univers du jeu. 💥"
    },

    // Arc Mother's Rosario
    yuuki_mr: {
        name: "Yuuki Konno",
        description: "🌸 **Yuuki Konno** est une joueuse talentueuse et la protagoniste de l'arc *Mother's Rosario*. 💔 Son histoire tragique touche profondément **Kirito** et **Asuna**, marquant l'un des moments les plus émouvants de la série. 🎭"
    },
    siune: {
        name: "Siune",
        description: "💫 **Siune** est une amie proche de **Yuuki**, offrant soutien et compassion. 🤝 Son rôle au sein de l'arc Mother's Rosario souligne l'importance des liens d'amitié. ❤️"
    },
    jun: {
        name: "Jun",
        description: "🌍 **Jun** incarne l'importance des relations humaines dans le monde virtuel. Son lien avec **Yuuki** et les autres est un aspect clé de l'arc Mother's Rosario. 🤝"
    },
    tecchi: {
        name: "Tecchi",
        description: "⚔️ **Tecchi** est un compagnon fidèle de **Yuuki**. Ensemble, ils partagent des moments importants dans le monde virtuel, renforçant l'idée de camaraderie. 🤝"
    },
    nori: {
        name: "Nori",
        description: "🌸 **Nori** est un personnage secondaire dans l'arc Mother's Rosario, jouant un rôle de soutien crucial pour **Yuuki** et ses amis. 💖"
    },
    talken: {
        name: "Talken",
        description: "⚔️ **Talken** apporte une dynamique particulière au groupe de **Yuuki**, illustrant l'importance du travail d'équipe et de l'amitié. 🤝"
    },

    // Arc Alicization
    eugeo: {
        name: "Eugeo",
        description: "⚔️ **Eugeo** est le meilleur ami de **Kirito** dans l'arc Alicization. Ensemble, ils partagent une quête pour découvrir la vérité dans ce monde virtuel complexe. 🌍"
    },
    alice: {
        name: "Alice Zuberg",
        description: "🛡️ **Alice** est une guerrière puissante et loyale. Son parcours dans l'arc Alicization explore des thèmes de loyauté, de sacrifice, et de lutte pour la justice. 🌟"
    },
    quinella: {
        name: "Quinella (Administrator)",
        description: "👑 **Quinella**, aussi connue sous le nom d'Administrator, est l'antagoniste principale de l'arc Alicization. Elle cherche à contrôler le monde virtuel avec une autorité absolue. 🧠"
    },
    cardinal: {
        name: "Cardinal",
        description: "📜 **Cardinal** est une IA sage qui guide **Kirito** et **Eugeo** dans leur quête. 💡 Elle incarne la sagesse et le savoir dans cet univers virtuel. 🌟"
    },
    bercouli: {
        name: "Bercouli Synthesis One",
        description: "🛡️ **Bercouli** est un guerrier légendaire, un modèle de courage et de force dans l'arc Alicization. ⚔️ Son leadership est une source d'inspiration pour ceux qui l'entourent. 🌟"
    },
    fanatio: {
        name: "Fanatio Synthesis Two",
        description: "⚔️ **Fanatio** est une guerrière redoutable, symbolisant les défis que **Kirito** et **Eugeo** doivent surmonter au cours de leur aventure. 💥"
    },
    deusolbert: {
        name: "Deusolbert Synthesis Seven",
        description: "⚔️ **Deusolbert** est un puissant antagoniste. Il incarne les dangers liés à la manipulation du pouvoir dans cet univers virtuel. 💥"
    },
    eldrie: {
        name: "Eldrie Synthesis Thirty-One",
        description: "🔮 **Eldrie** est un personnage complexe de l'arc Alicization, dont les motivations profondes ajoutent une grande intensité à l'intrigue. 💫"
    },
    chudelkin: {
        name: "Chudelkin",
        description: "🎭 **Chudelkin** est un personnage intrigant, apportant à la fois humour et mystère dans l'arc Alicization. 🤹‍♂️"
    },
    sortiliena: {
        name: "Sortiliena Serlut",
        description: "⚔️ **Sortiliena** est une guerrière loyale qui joue un rôle important dans la lutte contre le mal dans Alicization. 🌟"
    },
    ronye: {
        name: "Ronye Arabel",
        description: "🤝 **Ronye** se bat aux côtés de **Kirito** et **Eugeo**, incarnant l'amitié et le dévouement qui sont au cœur de cet arc. 🌟"
    },
    tiese: {
        name: "Tiese Shtolienen",
        description: "💪 **Tiese** est une alliée fidèle qui apporte son soutien dans les moments critiques de l'arc Alicization. 🌟"
    },
    humbert: {
        name: "Humbert Zizek",
        description: "🛡️ **Humbert** est un personnage secondaire dont l'importance dans l'univers d'Alicization ne doit pas être sous-estimée. 🌟"
    },
    raios: {
        name: "Raios Antinous",
        description: "👿 **Raios** est un antagoniste redoutable dont les actions ont des répercussions importantes sur le développement des personnages principaux. ⚔️"
    },
    lipia: {
        name: "Lipia Zancale",
        description: "🔮 **Lipia** est un personnage mystérieux qui apporte une profondeur et une intrigue supplémentaires à l'histoire. 🌟"
    },
    shasta: {
        name: "Shasta",
        description: "⚔️ **Shasta** est un personnage mineur dans l'arc Alicization, mais son rôle influence le déroulement de l'intrigue. 🌍"
    },
    ishkan: {
        name: "Ishkan",
        description: "💪 **Ishkan** est un guerrier dont le caractère unique enrichit l'univers d'Alicization. 🌟"
    },
    lilpilin: {
        name: "Lilpilin",
        description: "💫 **Lilpilin** est un personnage dont la naïveté et l'innocence contrastent avec la dureté du monde d'Alicization. 🌸"
    }
    ,
    // Arc War of Underworld
    gabriel: {
        name: "Gabriel Miller (Subtilizer)",
        description: "👿 **Gabriel Miller**, alias **Subtilizer**, est l'antagoniste principal de l'arc War of Underworld. Sa manipulation machiavélique illustre les dangers du pouvoir. ⚔️"
    },
    vassago: {
        name: "Vassago Casals",
        description: "👹 **Vassago** est un allié de **Gabriel** et un antagoniste redoutable dans *War of Underworld*. Sa cruauté ajoute de la tension à l'arc. ⚡"
    },
    critter: {
        name: "Critter",
        description: "💻 **Critter** est un technicien talentueux, mais dangereux, représentant les menaces constantes auxquelles **Kirito** et ses amis sont confrontés dans l'arc War of Underworld. ⚠️"
    },
    iskahn: {
        name: "Iskahn",
        description: "⚔️ **Iskahn** joue un rôle clé dans les événements tumultueux de l'arc War of Underworld, illustrant les luttes internes et les sacrifices. 💪"
    },
    sheyta: {
        name: "Sheyta",
        description: "🛡️ **Sheyta** est une guerrière loyale et courageuse, prête à se battre pour ses amis dans la quête pour la paix dans Underworld. 🌟"
    },
    renly: {
        name: "Renly Synthesis Twenty-Seven",
        description: "💪 **Renly** est un personnage noble et déterminé, dont la bravoure est mise à l'épreuve dans les moments critiques de la bataille de Underworld. ⚔️"
    },
    yanai: {
        name: "Yanai",
        description: "💼 **Yanai** est un personnage secondaire, mais ses actions contribuent fortement à l'évolution de l'intrigue dans *War of Underworld*. 🌍"
    },

    // Personnages des jeux vidéo
    strea: {
        name: "Strea",
        description: "🌟 **Strea** est une joueuse d'exception, mystérieuse et pleine de vie. 🎮 Sa personnalité enjouée et son désir de protéger les autres cachent une profondeur intrigante. 🔮"
    },
    philia: {
        name: "Philia",
        description: "⚔️ **Philia** est une guerrière courageuse et déterminée. 💪 Elle se bat sans relâche pour protéger ceux qui lui sont chers, affrontant tous les dangers avec bravoure. 🛡️"
    },
    rain: {
        name: "Rain",
        description: "🎮 **Rain** est une joueuse extrêmement talentueuse, respectée pour ses compétences impressionnantes dans le monde virtuel. 💥 Son agilité et sa ruse en font un personnage redoutable. 🌟"
    },
    seven: {
        name: "Seven (Professor Nanairo)",
        description: "🧠 **Seven**, également connue sous le nom de *Professor Nanairo*, est un génie intellectuel. 🧬 Sa capacité à apporter science et stratégie dans l'univers de *Sword Art Online* est inégalée. 📚"
    },
    eiji: {
        name: "Eiji Nochizawa (Nautilus)",
        description: "🔮 **Eiji Nochizawa**, alias *Nautilus*, est un personnage complexe dont le passé et les motivations ajoutent de la profondeur à l'intrigue. Son parcours est marqué par des moments de rédemption et de vengeance. 🎭"
    },
    yuna: {
        name: "Yuna (Yuuna Shigemura)",
        description: "🎤 **Yuna** est une figure emblématique de l'univers virtuel, incarnant l'espoir et la résilience. 🌸 Sa voix et sa présence apportent un réconfort émotionnel aux joueurs. 🎶"
    },
    tia: {
        name: "Tia",
        description: "⚔️ **Tia** est une guerrière passionnée, combattant pour la justice. 💪 Elle incarne la force de la volonté humaine et la détermination à changer le monde virtuel pour le mieux. 🌟"
    },
    premiere: {
        name: "Premiere",
        description: "🔮 **Premiere** est un personnage intrigant dont l'existence soulève des questions profondes sur l'identité et la conscience dans le monde virtuel. 🌌 Son parcours est mystérieux et captivant. 🧠"
    },
    kureha: {
        name: "Kureha",
        description: "⚔️ **Kureha** est une guerrière résolue à protéger ceux qu'elle aime, montrant un dévouement sans faille à ses amis dans le monde virtuel. 💪 Son courage est inébranlable. 🛡️"
    },
    zeliska: {
        name: "Zeliska",
        description: "🌟 **Zeliska** est une joueuse redoutable, reconnue pour sa bravoure et ses compétences au combat. 💥 Son esprit et son agilité en font une alliée précieuse dans le monde virtuel. ⚔️"
    },
    itsuki: {
        name: "Itsuki",
        description: "🔮 **Itsuki** est un personnage mineur mais intrigant dont les actions jouent un rôle important dans le développement de l'intrigue. 🌍 Son mystère laisse souvent présager de grands changements. ⚡"
    },
    bazalt: {
        name: "Bazalt Joe",
        description: "⚔️ **Bazalt Joe** est un personnage bien connu dans le monde des jeux vidéo, représentant les nombreux défis auxquels les joueurs doivent faire face. 🎮 Son charisme et sa force font de lui un adversaire redoutable. 💪"
    },

    // Personnages mineurs et autres
    natsuki: {
        name: "Natsuki Aki",
        description: "💫 **Natsuki** est un personnage secondaire dont le charme et la personnalité laissent une impression durable, même dans les moments les plus critiques. 🌸"
    },
    lux: {
        name: "Lux",
        description: "🌟 **Lux** incarne l'élégance et le mystère, ajoutant une profondeur captivante à l'histoire. 💫 Sa grâce naturelle la rend inoubliable. 🌙"
    },
    arabelle: {
        name: "Arabelle",
        description: "🎭 **Arabelle** est un personnage dont les actions influencent le cours de l'histoire de manière subtile mais significative. 🌍 Elle incarne l'idée que même les plus petites décisions peuvent avoir de grands impacts. 💡"
    },
    seven_mineur: {
        name: "Seven",
        description: "🧠 **Seven** se distingue par son intelligence et son approche stratégique du monde virtuel. 🌟 Ses compétences en planification la placent parmi les meilleurs joueurs. 🧬"
    },
    alice_synthesis: {
        name: "Alice Synthesis Thirty",
        description: "⚔️ **Alice Synthesis Thirty** est un personnage dont l'évolution personnelle reflète des thèmes profonds de loyauté et de sacrifice. 💫 Elle incarne la noblesse dans chaque décision qu'elle prend. 🛡️"
    },
    sigu: {
        name: "Sigu",
        description: "🌟 **Sigu** est un personnage mineur mais dont l'impact émotionnel et narratif dans l'histoire ne doit pas être sous-estimé. 🌌"
    },
    dai: {
        name: "Dai",
        description: "💫 **Dai** est un personnage secondaire dont la présence enrichit l'univers de *Sword Art Online* par sa force de caractère et sa résilience. 🌍"
    },
    silky: {
        name: "Silky Heart",
        description: "💖 **Silky Heart** est un personnage charmant, apportant une touche de légèreté et de douceur dans l'histoire. 🎭 Elle fait briller les moments joyeux avec son charme. ✨"
    },
    musketeer: {
        name: "Musketeer X",
        description: "🎯 **Musketeer X** est un personnage mystérieux, dont les actions ajoutent une touche de suspense et d'intrigue à l'univers. 🌑 Sa précision au combat est inégalée. ⚔️"
    },
    sakuya_mineur: {
        name: "Sakuya",
        description: "⚔️ **Sakuya** est une guerrière courageuse qui se bat pour ses idéaux et montre une détermination sans faille à protéger ceux qu'elle aime. 🌟"
    },
    alicia_mineur: {
        name: "Alicia Rue",
        description: "🌸 **Alicia Rue** est un personnage qui incarne l'espoir et la détermination, apportant une lumière positive dans chaque situation. 🌟"
    },
    eugene_mineur: {
        name: "Eugene",
        description: "⚔️ **Eugene** est un personnage secondaire dont l'influence est notable dans le développement de l'histoire. 🛡️ Sa force et sa loyauté en font un allié de taille. 💪"
    },
    lind: {
        name: "Lind",
        description: "🛡️ **Lind** est un personnage dont la loyauté et le sens du devoir inspirent ceux qui l'entourent. 🌟 Sa bravoure est exemplaire dans chaque combat. ⚔️"
    },
    asunas_mother: {
        name: "Mère d'Asuna (Kyouko Yuuki)",
        description: "👩 **Kyouko Yuuki**, la mère d'Asuna, représente l'autorité et l'ambition, cherchant à guider sa fille sur un chemin qu'elle considère comme le meilleur. 🌸 Leur relation explore des dynamiques parentales complexes. 🌱"
    },
    rinko: {
        name: "Rinko Koujiro",
        description: "🧠 **Rinko Koujiro** joue un rôle clé dans le développement des personnages principaux, apportant des éléments de science et de psychologie à l'intrigue. 🔬"
    },
    seijirou: {
        name: "Seijirou Kikuoka",
        description: "💼 **Seijirou** est un personnage dont les actions ont une grande influence sur les événements dans le monde virtuel. 🌍 Ses décisions stratégiques jouent un rôle majeur dans la série. 💡"
    },
    takeru: {
        name: "Takeru Higa",
        description: "🧬 **Takeru Higa** est un personnage qui apporte une dimension scientifique et technique à l'univers de *Sword Art Online*, jouant un rôle crucial dans les coulisses. 💡"
    }

};




function showCharacterInfo(characterId) {
    const character = characters[characterId];
    document.getElementById('character-name').textContent = character.name;

    const characterImg = document.getElementById('character-img');

    if (character.img) {
        characterImg.src = character.img;
        characterImg.style.display = 'block'; // Afficher l'image si définie
        characterImg.classList.add('centered-image'); // Centrer l'image
    } else {
        characterImg.style.display = 'none'; // Cacher l'image si non définie
        characterImg.classList.remove('centered-image'); // Retirer la classe pour garder la mise en page intacte
    }

    document.getElementById('character-description').textContent = character.description;
    showSection('character-info');
}

