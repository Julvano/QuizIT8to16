const questions = [
    { q: "Quel type d'installation efface toutes les données de l'utilisateur ?", r: "C", o: ["Mise à jour", "Installation personnalisée", "Installation propre", "Réparation"] },
    { q: "Quel système de fichiers Windows prend en charge le chiffrement ?", r: "C", o: ["FAT16", "FAT32", "NTFS", "exFAT"] },
    { q: "Quel outil permet de partitionner un disque dur sous Windows ?", r: "C", o: ["Gestionnaire de périphériques", "Invite de commandes", "Gestion des disques", "Panneau de configuration"] },
    { q: "Quel est le rôle du BIOS ?", r: "A", o: ["Initialiser le matériel au démarrage", "Accélérer l'ordinateur", "Augmenter la RAM", "Changer le système de fichiers"] },
    { q: "Quelle commande vérifie l'intégrité des fichiers système sous Windows ?", r: "B", o: ["chkdsk", "sfc /scannow", "format", "diskpart"] },
    { q: "Quel protocole est utilisé pour envoyer des e-mails ?", r: "D", o: ["HTTP", "FTP", "IMAP", "SMTP"] },
    { q: "Quel type de malware se dissimule dans un autre programme ?", r: "C", o: ["Ver", "Rançongiciel", "Cheval de Troie", "Rootkit"] },
    { q: "Que signifie VPN ?", r: "B", o: ["Virtual Public Network", "Virtual Private Network", "Visual Packet Network", "Verified Private Network"] },
    { q: "Quelle est la taille maximale d'un fichier dans FAT32 ?", r: "D", o: ["2 Go", "16 Go", "1 To", "4 Go"] },
    { q: "Quel outil Windows affiche les performances du système ?", r: "A", o: ["Gestionnaire des tâches", "Explorateur de fichiers", "Panneau de configuration", "Invite de commande"] },
    { q: "Quel type d'adresse commence par FE80 ?", r: "C", o: ["Adresse IPv4", "Adresse publique IPv6", "Adresse lien-local IPv6", "Adresse MAC"] },
    { q: "Quel est le rôle du service DHCP ?", r: "A", o: ["Attribuer automatiquement des adresses IP", "Traduire les noms de domaine", "Envoyer des e-mails", "Contrôler le trafic réseau"] },
    { q: "Quel outil permet de diagnostiquer les problèmes de mémoire ?", r: "D", o: ["CHKDSK", "MSCONFIG", "DISKPART", "Diagnostique mémoire Windows"] },
    { q: "Quel est le port par défaut de HTTP ?", r: "B", o: ["21", "80", "443", "110"] },
    { q: "Quel outil supprime temporairement les fichiers inutiles ?", r: "A", o: ["Nettoyage de disque", "Gestionnaire de tâches", "Défragmenteur", "Regedit"] },
    { q: "Quel outil configure les programmes au démarrage ?", r: "C", o: ["Regedit", "Panneau de configuration", "MSCONFIG", "Disk Cleanup"] },
    { q: "Quel est le rôle d'un antivirus ?", r: "D", o: ["Gérer le pare-feu", "Optimiser la mémoire", "Analyser les logs", "Détecter les malwares"] },
    { q: "Quelle extension correspond à un fichier exécutable ?", r: "A", o: [".exe", ".jpg", ".docx", ".zip"] },
    { q: "Quel est le rôle du pare-feu ?", r: "C", o: ["Augmenter la vitesse Internet", "Attribuer une IP", "Filtrer les connexions réseau", "Analyser les virus"] },
    { q: "Quel outil affiche les adresses MAC ?", r: "B", o: ["tracert", "ipconfig /all", "nslookup", "netstat"] },
    { q: "Que signifie POST ?", r: "C", o: ["Process of System Test", "Preboot Online Scan Tool", "Power On Self Test", "Packet On Secure Transmission"] },
    { q: "Quel format est utilisé pour compresser plusieurs fichiers ?", r: "D", o: [".exe", ".sys", ".msi", ".zip"] },
    { q: "Quel est l'utilité de la commande ping ?", r: "A", o: ["Tester la connectivité réseau", "Chiffrer les paquets", "Scanner les ports", "Afficher l'adresse MAC"] },
    { q: "Quel outil affiche la topologie réseau ?", r: "B", o: ["tracert", "Visio", "ping", "ipconfig"] },
    { q: "Que signifie GUI ?", r: "D", o: ["Graphical Usage Interface", "Global User Interface", "Generic UI", "Graphical User Interface"] },
    { q: "Quel logiciel permet d'accéder à distance à un ordinateur ?", r: "A", o: ["TeamViewer", "CCleaner", "VLC", "Word"] },
    { q: "Quel format de fichier est un image disque ?", r: "C", o: [".zip", ".exe", ".iso", ".bat"] },
    { q: "Que signifie HTTPS ?", r: "D", o: ["Hypertext Transport Standard", "Hyperlink Transmission Protocol", "Host Transfer Protocol Secure", "Hypertext Transfer Protocol Secure"] },
    { q: "Quel est le rôle de DNS ?", r: "B", o: ["Chiffrer les noms de domaine", "Traduire les noms en adresses IP", "Créer des adresses MAC", "Répartir la bande passante"] },
    { q: "Quel système permet de gérer plusieurs OS sur un disque ?", r: "C", o: ["RAID", "UEFI", "Boot Manager", "Virtual Disk"] },
    { q: "Quel type de logiciel est Linux ?", r: "A", o: ["Système d'exploitation", "Pilote", "Logiciel propriétaire", "Firmware"] },
    { q: "Quel protocole utilise le port 443 ?", r: "D", o: ["FTP", "SMTP", "HTTP", "HTTPS"] },
    { q: "Quelle commande affiche les ports actifs ?", r: "C", o: ["ping", "tracert", "netstat", "ipconfig"] },
    { q: "Quel est le format de fichier d'un pilote sous Windows ?", r: "B", o: [".exe", ".inf", ".doc", ".zip"] },
    { q: "Quelle est la première étape du dépannage ?", r: "A", o: ["Identifier le problème", "Remplacer le matériel", "Formater", "Réinitialiser"] },
    { q: "Quel est le rôle d'un NAS ?", r: "C", o: ["Routeur réseau", "Scanner réseau", "Stockage en réseau", "Processeur graphique"] },
    { q: "Quelle commande teste le chemin réseau ?", r: "D", o: ["ping", "ipconfig", "netstat", "tracert"] },
    { q: "Quelle version de Windows offre Cortana ?", r: "B", o: ["Windows 7", "Windows 10", "Windows Vista", "Windows XP"] },
    { q: "Quel outil permet de défragmenter un disque ?", r: "C", o: ["CHKDSK", "DISKPART", "Défragmenteur de disque", "ScanDisk"] },
    { q: "Que fait la commande FORMAT ?", r: "A", o: ["Efface et prépare le disque", "Copie les fichiers", "Lance l'antivirus", "Installe Windows"] },
    { q: "Quel outil affiche les services actifs ?", r: "B", o: ["MSCONFIG", "Services.msc", "CMD", "Regedit"] },
    { q: "Quel format de fichier est un script batch ?", r: "D", o: [".cmd", ".vbs", ".exe", ".bat"] },
    { q: "Quel est le rôle de l'outil DISKPART ?", r: "A", o: ["Gérer les partitions", "Détecter les virus", "Sauvegarder les fichiers", "Analyser la mémoire"] },
    { q: "Que permet l'outil MSCONFIG ?", r: "B", o: ["Changer l'interface", "Configurer le démarrage", "Vérifier les pilotes", "Créer une partition"] },
    { q: "Quel est le rôle de Regedit ?", r: "C", o: ["Lancer le terminal", "Configurer les utilisateurs", "Modifier le registre", "Changer les ports"] },
    { q: "Quel protocole utilise le port 21 ?", r: "D", o: ["SMTP", "HTTP", "DNS", "FTP"] },
    { q: "Quel système permet l'authentification à deux facteurs ?", r: "A", o: ["2FA", "VPN", "RAID", "NTFS"] },
    { q: "Quel est le rôle principal du CPU dans un ordinateur ?", r: "B", o: ["Stocker les données", "Exécuter les instructions", "Gérer la mémoire", "Contrôler l'écran"] },
    { q: "Quelle est la fonction principale de la RAM ?", r: "C", o: ["Stockage permanent", "Refroidissement", "Stockage temporaire", "Communication réseau"] },
    { q: "Quel protocole permet la synchronisation de l'heure sur un réseau ?", r: "D", o: ["HTTP", "SMTP", "DNS", "NTP"] }
];

// Variables globales
const correctAnswers = {};
let totalQuestions = questions.length;

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    generateQuestions();
    setupEventListeners();
});

// Génération des questions
function generateQuestions() {
    const container = document.getElementById('questionsContainer');
    let html = '';

    questions.forEach((question, index) => {
        const questionNumber = index + 1;
        correctAnswers[`q${questionNumber}`] = question.r;

        html += `
      <div class="card mb-4 question-card" data-question="q${questionNumber}">
        <div class="card-header bg-primary bg-opacity-10 d-flex align-items-center">
          <span class="badge bg-primary me-3 question-badge">${questionNumber}</span>
          <h5 class="mb-0 question-title">${question.q}</h5>
        </div>
        <div class="card-body">
          <div class="options-container">
    `;

        question.o.forEach((option, optionIndex) => {
            const letter = String.fromCharCode(65 + optionIndex);
            html += `
        <div class="form-check mb-3 option-item">
          <input class="form-check-input" type="radio" name="q${questionNumber}" id="q${questionNumber}_${letter}" value="${letter}">
          <label class="form-check-label option-label" for="q${questionNumber}_${letter}">
            <span class="option-letter fw-bold text-primary me-2">${letter}.</span>
            <span class="option-text">${option}</span>
          </label>
        </div>
      `;
        });

        html += `
          </div>
        </div>
      </div>
    `;
    });

    container.innerHTML = html;
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
    // Écouter les changements sur les boutons radio
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', updateProgress);
    });
}

// Mise à jour de la barre de progression
function updateProgress() {
    const answeredQuestions = document.querySelectorAll('input[type="radio"]:checked').length;
    const percentage = Math.round((answeredQuestions / totalQuestions) * 100);

    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    progressBar.style.width = percentage + '%';
    progressBar.setAttribute('aria-valuenow', percentage);
    progressText.textContent = percentage + '%';
}

// Animation de confettis
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

    // Créer 100 confettis
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      left: ${Math.random() * 100}vw;
      animation: confetti-fall 3s linear forwards;
      animation-delay: ${Math.random() * 3}s;
      z-index: 9999;
      pointer-events: none;
    `;

        container.appendChild(confetti);

        // Supprimer le confetti après l'animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.parentNode.removeChild(confetti);
            }
        }, 6000);
    }

    // Ajouter le style CSS pour l'animation si pas déjà présent
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
      @keyframes confetti-fall {
        0% {
          transform: translateY(-100vh) rotate(0deg);
          opacity: 1;
        }
        100% {
          transform: translateY(100vh) rotate(720deg);
          opacity: 0;
        }
      }
    `;
        document.head.appendChild(style);
    }
}

// Animation du cercle de score
function animateScoreCircle(percentage) {
    const circle = document.getElementById('scoreCircle');
    const circumference = 2 * Math.PI * 90; // rayon de 90px
    const offset = circumference - (percentage / 100) * circumference;

    // Créer ou mettre à jour le SVG du cercle
    circle.style.background = `conic-gradient(
    #198754 0deg,
    #198754 ${percentage * 3.6}deg,
    #e9ecef ${percentage * 3.6}deg
  )`;
}

// Correction du quiz
function submitQuiz() {
    let score = 0;
    const results = [];

    // Vérifier chaque question
    for (let questionKey in correctAnswers) {
        const options = document.getElementsByName(questionKey);
        const questionCard = document.querySelector(`[data-question="${questionKey}"]`);
        let userAnswer = null;
        const correctAnswer = correctAnswers[questionKey];

        // Trouver la réponse de l'utilisateur
        for (let option of options) {
            if (option.checked) {
                userAnswer = option.value;
                break;
            }
        }

        // Marquer les réponses
        for (let option of options) {
            const label = option.closest('.option-item');
            const optionValue = option.value;

            // Réinitialiser les styles
            label.classList.remove('correct-answer', 'incorrect-answer');

            // Marquer la bonne réponse
            if (optionValue === correctAnswer) {
                label.classList.add('correct-answer');
                label.style.cssText = `
          background-color: #d1e7dd !important;
          border: 2px solid #0f5132 !important;
          border-radius: 8px;
          padding: 10px;
        `;

                // Ajouter une icône de validation
                const checkIcon = label.querySelector('.fa-check') || document.createElement('i');
                if (!label.querySelector('.fa-check')) {
                    checkIcon.className = 'fas fa-check text-success ms-2';
                    label.querySelector('.option-text').appendChild(checkIcon);
                }
            }

            // Marquer la mauvaise réponse choisie
            if (option.checked && optionValue !== correctAnswer) {
                label.classList.add('incorrect-answer');
                label.style.cssText = `
          background-color: #f8d7da !important;
          border: 2px solid #842029 !important;
          border-radius: 8px;
          padding: 10px;
        `;

                // Ajouter une icône d'erreur
                const crossIcon = label.querySelector('.fa-times') || document.createElement('i');
                if (!label.querySelector('.fa-times')) {
                    crossIcon.className = 'fas fa-times text-danger ms-2';
                    label.querySelector('.option-text').appendChild(crossIcon);
                }
            }
        }

        // Calculer le score
        if (userAnswer === correctAnswer) {
            score++;
            questionCard.classList.add('correct');
        } else {
            questionCard.classList.add('incorrect');
        }

        results.push({
            question: questionKey,
            correct: userAnswer === correctAnswer,
            userAnswer,
            correctAnswer
        });
    }

    // Afficher les résultats
    displayResults(score, totalQuestions);

    // Désactiver le formulaire
    document.querySelectorAll('input[type="radio"]').forEach(input => {
        input.disabled = true;
    });

    // Modifier le bouton de soumission
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn.innerHTML = '<i class="fas fa-chart-line me-2"></i>Quiz Terminé';
    submitBtn.disabled = true;
    submitBtn.classList.remove('btn-primary');
    submitBtn.classList.add('btn-secondary');
}

// Affichage des résultats
function displayResults(score, total) {
    const percentage = Math.round((score / total) * 100);
    const incorrect = total - score;

    // Mettre à jour les éléments de résultat
    document.getElementById('scoreNumber').textContent = `${score}/${total}`;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = score;
    document.getElementById('incorrectCount').textContent = incorrect;
    document.getElementById('successRate').textContent = `${percentage}%`;

    // Message personnalisé selon le score
    const resultMessage = document.getElementById('resultMessage');
    let message = '';
    let messageClass = '';

    if (percentage >= 90) {
        message = '🎉 Excellent ! Vous maîtrisez parfaitement IT Essentials !';
        messageClass = 'text-success';
        createConfetti(); // Lancer les confettis pour les excellents scores
    } else if (percentage >= 75) {
        message = '👍 Très bien ! Vous avez de solides connaissances.';
        messageClass = 'text-success';
    } else if (percentage >= 60) {
        message = '📖 Pas mal ! Continuez vos efforts.';
        messageClass = 'text-info';
    } else if (percentage >= 40) {
        message = '📚 Il faut réviser davantage les concepts IT Essentials.';
        messageClass = 'text-warning';
    } else {
        message = '💪 Ne vous découragez pas, recommencez après avoir révisé !';
        messageClass = 'text-danger';
    }

    resultMessage.textContent = message;
    resultMessage.className = `mb-4 ${messageClass}`;

    // Animer le cercle de score
    animateScoreCircle(percentage);

    // Afficher la section des résultats avec animation
    const resultsSection = document.getElementById('resultsSection');
    resultsSection.style.display = 'block';

    setTimeout(() => {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 300);
}

// Redémarrer le quiz
function restartQuiz() {
    // Recharger la page pour réinitialiser complètement le quiz
    window.location.reload();
}