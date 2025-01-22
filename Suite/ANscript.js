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


// Managing music tracks
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
        console.error("Error playing background music:", error);
    });

    audioFond.onended = function () {
        nextMusic();
    };
}

// Managing interactive sounds
document.body.addEventListener('click', function () {
    if (audioFond.paused) {
        playBackgroundMusic();
    }

    buttonClickSound.currentTime = 0; // Reset the sound to the start
    buttonClickSound.play().catch(error => {
        console.error("Error playing button click sound:", error);
    });
});

const header = document.querySelector('header');
header.addEventListener('mouseenter', function () {
    if (!isHoverSoundPlaying) {
        audioMenu.currentTime = 0;
        audioMenu.play().catch(error => {
            console.error("Error playing menu sound:", error);
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
        <div onclick="refreshPage()">Refresh</div>
        <hr>
        <div onclick="nextMusic()">⏭️ Next Music</div>
        <div onclick="previousMusic()">⏮️ Previous Music</div>
        <hr>
        <div>
            Languages
            <div class="submenu">
                <div onclick="changeLanguage('fr')">
                    <img src="img/fr.png" alt="French" class="flag-icon"> French
                </div>
                <div onclick="changeLanguage('en')">
                    <img src="img/uk.png" alt="English" class="flag-icon"> English
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
        description: "⚔️ **Kirito**, also known as **Kazuto Kirigaya**, is the main protagonist of *Sword Art Online*. 🎮 Known as a 'beater' 🛡️, he fights solo and uses clever strategies to defeat bosses. Armed with his legendary sword *Elucidator*, he becomes a legend in the game. His love for **Asuna** ❤️ and his determination to protect his friends 💪 drive him to heroic feats. 🌟"
    },
    asuna: {
        name: "Asuna Yuuki",
        img: "img/info/Asuna.png",
        description: "⚔️ **Asuna** is an exceptional fighter and Kirito's love interest. ❤️ As the vice-commander of the 'Knights of the Blood Oath,' she is nicknamed 'Flash' 🌪️ for her speed in combat. Devoted to saving players, she displays incredible courage and mental strength. 🌟"
    },
    klein: {
        name: "Klein (Ryotaro Tsuboi)",
        img: "img/info/Klein.png",
        description: "🛡️ **Klein** is one of Kirito's first friends. A loyal and protective leader of his guild, he is always ready to defend his comrades and fight for what is right. His humor and bravery make him a trusted ally. 💪"
    },
    agil: {
        name: "Agil (Andrew Gilbert Mills)",
        img: "img/info/Agil.png",
        description: "🛠️ **Agil** is a robust merchant with a big heart. Despite his pragmatism, he is deeply committed to helping other players survive. 💼 His shop serves as a refuge for many adventurers, and his friendship with Kirito is invaluable. 🤝"
    },
    silica: {
        name: "Silica (Keiko Ayano)",
        img: "img/info/Silica.png",
        description: "🐉 **Silica** is a young player with the unique ability to summon a pet dragon, **Pina**. 🐲 She may appear innocent, but she is brave and ready to fight for her friends. 🌸"
    },
    lisbeth: {
        name: "Lisbeth (Rika Shinozaki)",
        img: "img/info/Lisbeth.png",
        description: "⚒️ **Lisbeth** is a talented blacksmith and a close friend of Asuna. She forges some of the most powerful swords for Kirito, proving her importance to the group. 🔨 Her optimism and courage make her a lovable character. 💖"
    },
    yui: {
        name: "Yui",
        img: "img/info/Yui.png",
        description: "🤖 **Yui** is an AI designed to monitor the well-being of players. She becomes the 'adoptive daughter' of Kirito and Asuna 👨‍👩‍👧, offering them advice through her vast knowledge. Her emotional bond with them is touching. ❤️"
    },
    sachi: {
        name: "Sachi",
        img: "img/info/Sachi.png",
        description: "😔 **Sachi** is a member of Kirito's guild whose tragic death leaves a deep emotional scar on him. 🖤 Her loss marks a pivotal moment in Kirito's development as a hero. 🕊️"
    },
    diavel: {
        name: "Diavel",
        img: "img/info/Diavel.png",
        description: "⚔️ **Diavel** is a charismatic and brave leader who guides the first boss raid. His heroic sacrifice 💀 for his comrades demonstrates the importance of courage and responsibility in SAO. ⚡"
    },
    kuradeel: {
        name: "Kuradeel",
        img: "img/info/Kuradeel.png",
        description: "😠 **Kuradeel** is a complex, sometimes antagonistic character whose dark actions reveal the tensions and struggles within SAO's guilds. ⚔️"
    },
    kibaou: {
        name: "Kibaou",
        img: "img/info/Kibaou.png",
        description: "👿 **Kibaou** is manipulative and constantly seeks to increase his power among the players. His selfishness and aggressive actions create conflicts that threaten group cohesion. 🧨"
    },
    heathcliff: {
        name: "Heathcliff (Akihiko Kayaba)",
        img: "img/info/Heathcliff.png",
        description: "👑 **Heathcliff** is the creator of SAO and the main antagonist of the Aincrad arc. 🧠 Manipulative and powerful, he imposes an overwhelming presence in the game world. ⚔️ His role as an architect and tyrant highlights the dangers of absolute control. 🏰"
    },
    argo: {
        name: "Argo",
        img: "img/info/Argo.png",
        description: "🦊 **Argo** is a cunning hacker and informant for Kirito and Asuna. 💻 She plays a crucial role in delivering vital information for their progress. Her quick wit and network make her an invaluable ally. 📜"
    },
    thinker: {
        name: "Thinker",
        img: "img/info/Thinker.png",
        description: "🧠 **Thinker** is a brilliant strategist, often consulted for his expertise in game mechanics and boss raids. 🎮 His wisdom helps navigate the most dangerous situations. 💡"
    },
    yulier: {
        name: "Yulier",
        img: "img/info/Yulier.png",
        description: "⚔️ **Yulier** is a devoted warrior who exemplifies the bravery and loyalty of those fighting to survive in SAO. 🌟 Her sense of duty is admirable. 🛡️"
    },
    johnny_black: {
        name: "Johnny Black",
        img: "img/info/Johnny Black.png",
        description: "🕶️ **Johnny Black** is a mysterious and dangerous player, adding suspense and intrigue to the SAO universe. 🎯"
    },
    poh: {
        name: "PoH (Prince of Hell)",
        img: "img/info/PoH.png",
        description: "👹 **PoH** is a feared antagonist and leader of an evil guild. His actions highlight the dangers of online games and the cruelty some players can exhibit. ⚔️"
    },
    grimlock: {
        name: "Grimlock",
        img: "img/info/Grimlock.png",
        description: "🛡️ **Grimlock** is a ruthless character, embodying the harshness of *Sword Art Online*. His actions demonstrate the deadly risks in this virtual world. ⚔️"
    },
    yolko: {
        name: "Yolko",
        img: "img/info/Yolko.png",
        description: "🎮 **Yolko** is a minor character, but her unique role adds color and contrast to the SAO universe. 🎭"
    },
    leafa: {
        name: "Leafa (Suguha Kirigaya)",
        img: "img/info/Leafa.png",
        description: "🧚 **Leafa** is Kirito's cousin and a skilled warrior in *Alfheim Online*. 🛡️ An expert in magic and flying, she is determined to forge her own identity apart from her famous cousin. 🌟"
    },
    oberon: {
        name: "Oberon (Nobuyuki Sugou)",
        img: "img/info/Oberon.png",
        description: "👑 **Oberon** is the main antagonist of the Alfheim arc. He manipulates and exploits players for his sinister ambitions. 💀"
    },
    recon: {
        name: "Recon (Shinichi Nagata)",
        img: "img/info/Recon.png",
        description: "🏹 **Recon** is an archer and a loyal friend to Leafa. 🛡️ Though more reserved, he plays a crucial supporting role in their adventures. 🌲"
    },
    eugene: {
        name: "Eugene",
        img: "img/info/Eugene.png",
        description: "⚔️ **Eugene** is a strong and honorable warrior, contributing to the fight against Oberon. His dedication to his allies makes him a formidable adversary. 🛡️"
    },
    sinon: {
        name: "Sinon (Shino Asada)",
        img: "img/info/Sinon.png",
        description: "🎯 **Sinon** is a sniper in *Gun Gale Online*, battling her own inner demons. 🔫 She becomes a valuable ally to Kirito. 🌟"
    },

    yuuki_mr: {
        name: "Yuuki Konno",
        description: "🌸 **Yuuki Konno** is a talented player and the protagonist of the *Mother's Rosario* arc. 💔 Her tragic story deeply touches **Kirito** and **Asuna**, marking one of the most emotional moments in the series. 🎭"
    },
    siune: {
        name: "Siune",
        description: "💫 **Siune** is a close friend of **Yuuki**, offering support and compassion. 🤝 Her role in the Mother's Rosario arc highlights the importance of friendship. ❤️"
    },
    jun: {
        name: "Jun",
        description: "🌍 **Jun** embodies the importance of human connections in the virtual world. His bond with **Yuuki** and the others is a key aspect of the Mother's Rosario arc. 🤝"
    },
    tecchi: {
        name: "Tecchi",
        description: "⚔️ **Tecchi** is a loyal companion of **Yuuki**. Together, they share significant moments in the virtual world, reinforcing the idea of camaraderie. 🤝"
    },
    nori: {
        name: "Nori",
        description: "🌸 **Nori** is a secondary character in the Mother's Rosario arc, playing a crucial supporting role for **Yuuki** and her friends. 💖"
    },
    talken: {
        name: "Talken",
        description: "⚔️ **Talken** brings a unique dynamic to **Yuuki**'s group, illustrating the importance of teamwork and friendship. 🤝"
    },

    // Alicization Arc
    eugeo: {
        name: "Eugeo",
        description: "⚔️ **Eugeo** is **Kirito**'s best friend in the Alicization arc. Together, they embark on a quest to uncover the truth in this complex virtual world. 🌍"
    },
    alice: {
        name: "Alice Zuberg",
        description: "🛡️ **Alice** is a powerful and loyal warrior. Her journey in the Alicization arc explores themes of loyalty, sacrifice, and the fight for justice. 🌟"
    },
    quinella: {
        name: "Quinella (Administrator)",
        description: "👑 **Quinella**, also known as the Administrator, is the main antagonist of the Alicization arc. She seeks to control the virtual world with absolute authority. 🧠"
    },
    cardinal: {
        name: "Cardinal",
        description: "📜 **Cardinal** is a wise AI guiding **Kirito** and **Eugeo** on their quest. 💡 She embodies wisdom and knowledge in this virtual universe. 🌟"
    },
    bercouli: {
        name: "Bercouli Synthesis One",
        description: "🛡️ **Bercouli** is a legendary warrior, a model of courage and strength in the Alicization arc. ⚔️ His leadership inspires those around him. 🌟"
    },
    fanatio: {
        name: "Fanatio Synthesis Two",
        description: "⚔️ **Fanatio** is a formidable warrior, symbolizing the challenges that **Kirito** and **Eugeo** must overcome during their adventure. 💥"
    },
    deusolbert: {
        name: "Deusolbert Synthesis Seven",
        description: "⚔️ **Deusolbert** is a powerful antagonist. He represents the dangers of power manipulation in this virtual universe. 💥"
    },
    eldrie: {
        name: "Eldrie Synthesis Thirty-One",
        description: "🔮 **Eldrie** is a complex character in the Alicization arc, whose deep motivations add great intensity to the storyline. 💫"
    },
    chudelkin: {
        name: "Chudelkin",
        description: "🎭 **Chudelkin** is an intriguing character, bringing both humor and mystery to the Alicization arc. 🤹‍♂️"
    },
    sortiliena: {
        name: "Sortiliena Serlut",
        description: "⚔️ **Sortiliena** is a loyal warrior who plays an important role in the fight against evil in Alicization. 🌟"
    },
    ronye: {
        name: "Ronye Arabel",
        description: "🤝 **Ronye** fights alongside **Kirito** and **Eugeo**, embodying the friendship and dedication at the heart of this arc. 🌟"
    },
    tiese: {
        name: "Tiese Shtolienen",
        description: "💪 **Tiese** is a faithful ally who provides support during critical moments in the Alicization arc. 🌟"
    },
    humbert: {
        name: "Humbert Zizek",
        description: "🛡️ **Humbert** is a secondary character whose importance in the Alicization universe should not be underestimated. 🌟"
    },
    raios: {
        name: "Raios Antinous",
        description: "👿 **Raios** is a formidable antagonist whose actions significantly impact the development of the main characters. ⚔️"
    },
    lipia: {
        name: "Lipia Zancale",
        description: "🔮 **Lipia** is a mysterious character who brings additional depth and intrigue to the story. 🌟"
    },
    shasta: {
        name: "Shasta",
        description: "⚔️ **Shasta** is a minor character in the Alicization arc, but his role influences the progression of the storyline. 🌍"
    },
    ishkan: {
        name: "Ishkan",
        description: "💪 **Ishkan** is a warrior whose unique character enriches the Alicization universe. 🌟"
    },
    lilpilin: {
        name: "Lilpilin",
        description: "💫 **Lilpilin** is a character whose naivety and innocence contrast with the harshness of the Alicization world. 🌸"
    },

    // War of Underworld Arc
    gabriel: {
        name: "Gabriel Miller (Subtilizer)",
        description: "👿 **Gabriel Miller**, also known as **Subtilizer**, is the main antagonist of the War of Underworld arc. His manipulative nature illustrates the dangers of power. ⚔️"
    },
    vassago: {
        name: "Vassago Casals",
        description: "👹 **Vassago** is an ally of **Gabriel** and a formidable antagonist in the War of Underworld arc. His cruelty adds tension to the story. ⚡"
    },
    critter: {
        name: "Critter",
        description: "💻 **Critter** is a talented yet dangerous technician, representing the constant threats faced by **Kirito** and his friends in the War of Underworld arc. ⚠️"
    },
    iskahn: {
        name: "Iskahn",
        description: "⚔️ **Iskahn** plays a key role in the tumultuous events of the War of Underworld arc, illustrating internal struggles and sacrifices. 💪"
    },
    sheyta: {
        name: "Sheyta",
        description: "🛡️ **Sheyta** is a loyal and courageous warrior, ready to fight for her friends in the quest for peace in Underworld. 🌟"
    },
    renly: {
        name: "Renly Synthesis Twenty-Seven",
        description: "💪 **Renly** is a noble and determined character whose bravery is tested in critical moments of the Underworld battle. ⚔️"
    },
    yanai: {
        name: "Yanai",
        description: "💼 **Yanai** is a secondary character, but his actions strongly contribute to the evolution of the War of Underworld plot. 🌍"
    },

    // Video Game Characters
    strea: {
        name: "Strea",
        description: "🌟 **Strea** is an exceptional player, mysterious and full of life. 🎮 Her playful personality and desire to protect others hide an intriguing depth. 🔮"
    },
    philia: {
        name: "Philia",
        description: "⚔️ **Philia** is a courageous and determined warrior. 💪 She fights tirelessly to protect those she cares about, facing all dangers with bravery. 🛡️"
    },
    rain: {
        name: "Rain",
        description: "🎮 **Rain** is an extremely talented player, respected for her impressive skills in the virtual world. 💥 Her agility and cunning make her a formidable character. 🌟"
    },
    seven: {
        name: "Seven (Professor Nanairo)",
        description: "🧠 **Seven**, also known as *Professor Nanairo*, is an intellectual genius. 🧬 Her ability to bring science and strategy to the *Sword Art Online* universe is unmatched. 📚"
    },
    eiji: {
        name: "Eiji Nochizawa (Nautilus)",
        description: "🔮 **Eiji Nochizawa**, alias *Nautilus*, is a complex character whose past and motivations add depth to the story. His journey is marked by moments of redemption and vengeance. 🎭"
    },
    yuna: {
        name: "Yuna (Yuuna Shigemura)",
        description: "🎤 **Yuna** is an iconic figure of the virtual universe, embodying hope and resilience. 🌸 Her voice and presence provide emotional comfort to players. 🎶"
    },
    tia: {
        name: "Tia",
        description: "⚔️ **Tia** is a passionate warrior fighting for justice. 💪 She embodies the strength of human will and determination to change the virtual world for the better. 🌟"
    },
    premiere: {
        name: "Premiere",
        description: "🔮 **Premiere** is an intriguing character whose existence raises deep questions about identity and consciousness in the virtual world. 🌌 Her journey is mysterious and captivating. 🧠"
    },
    kureha: {
        name: "Kureha",
        description: "⚔️ **Kureha** is a warrior determined to protect those she loves, showing unwavering dedication to her friends in the virtual world. 💪 Her courage is unshakable. 🛡️"
    },
    zeliska: {
        name: "Zeliska",
        description: "🌟 **Zeliska** is a formidable player, known for her bravery and combat skills. 💥 Her mind and agility make her a valuable ally in the virtual world. ⚔️"
    },
    itsuki: {
        name: "Itsuki",
        description: "🔮 **Itsuki** is a minor but intriguing character whose actions play an important role in the plot development. 🌍 Her mystery often hints at great changes. ⚡"
    },
    bazalt: {
        name: "Bazalt Joe",
        description: "⚔️ **Bazalt Joe** is a well-known character in the video game world, representing the many challenges players must face. 🎮 His charisma and strength make him a formidable opponent. 💪"
    },

    // Minor characters and others
    natsuki: {
        name: "Natsuki Aki",
        description: "💫 **Natsuki** is a secondary character whose charm and personality leave a lasting impression, even in the most critical moments. 🌸"
    },
    lux: {
        name: "Lux",
        description: "🌟 **Lux** embodies elegance and mystery, adding a captivating depth to the story. 💫 Her natural grace makes her unforgettable. 🌙"
    },
    arabelle: {
        name: "Arabelle",
        description: "🎭 **Arabelle** is a character whose actions subtly but significantly influence the course of the story. 🌍 She represents the idea that even the smallest decisions can have great impacts. 💡"
    },
    seven_mineur: {
        name: "Seven",
        description: "🧠 **Seven** stands out for her intelligence and strategic approach to the virtual world. 🌟 Her planning skills place her among the best players. 🧬"
    },
    alice_synthesis: {
        name: "Alice Synthesis Thirty",
        description: "⚔️ **Alice Synthesis Thirty** is a character whose personal evolution reflects deep themes of loyalty and sacrifice. 💫 She embodies nobility in every decision she makes. 🛡️"
    },
    sigu: {
        name: "Sigu",
        description: "🌟 **Sigu** is a minor character whose emotional and narrative impact in the story should not be underestimated. 🌌"
    },
    dai: {
        name: "Dai",
        description: "💫 **Dai** is a secondary character whose presence enriches the *Sword Art Online* universe with his strong character and resilience. 🌍"
    },
    silky: {
        name: "Silky Heart",
        description: "💖 **Silky Heart** is a charming character who adds a touch of lightness and sweetness to the story. 🎭 She makes joyful moments shine with her charm. ✨"
    },
    musketeer: {
        name: "Musketeer X",
        description: "🎯 **Musketeer X** is a mysterious character whose actions add a touch of suspense and intrigue to the universe. 🌑 His precision in combat is unmatched. ⚔️"
    },
    sakuya_mineur: {
        name: "Sakuya",
        description: "⚔️ **Sakuya** is a courageous warrior who fights for her ideals and shows unwavering determination to protect those she loves. 🌟"
    },
    alicia_mineur: {
        name: "Alicia Rue",
        description: "🌸 **Alicia Rue** is a character who embodies hope and determination, bringing a positive light to every situation. 🌟"
    },
    eugene_mineur: {
        name: "Eugene",
        description: "⚔️ **Eugene** is a secondary character whose influence is notable in the development of the story. 🛡️ His strength and loyalty make him a formidable ally. 💪"
    },
    lind: {
        name: "Lind",
        description: "🛡️ **Lind** is a character whose loyalty and sense of duty inspire those around her. 🌟 Her bravery is exemplary in every battle. ⚔️"
    },
    asunas_mother: {
        name: "Asuna's Mother (Kyouko Yuuki)",
        description: "👩 **Kyouko Yuuki**, Asuna's mother, represents authority and ambition, seeking to guide her daughter down a path she considers the best. 🌸 Their relationship explores complex parental dynamics. 🌱"
    },
    rinko: {
        name: "Rinko Koujiro",
        description: "🧠 **Rinko Koujiro** plays a key role in the development of the main characters, bringing elements of science and psychology to the plot. 🔬"
    },
    seijirou: {
        name: "Seijirou Kikuoka",
        description: "💼 **Seijirou** is a character whose actions have a great influence on events in the virtual world. 🌍 His strategic decisions play a major role in the series. 💡"
    },
    takeru: {
        name: "Takeru Higa",
        description: "🧬 **Takeru Higa** is a character who adds a scientific and technical dimension to the *Sword Art Online* universe, playing a crucial behind-the-scenes role. 💡"
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

