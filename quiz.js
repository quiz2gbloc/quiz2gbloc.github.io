const questions = [
    {
        question: "Les fluides médicaux sont utilisé pour regrouper:",
        answers: ["Les gaz", "Les liquides", "Les déchets", "Les médicaments"]
    },
    {
        question: "Parmi les équipements mobiles de la salle d'opération on destingue:",
        answers: ["Bistouri électrique", "Bras plafonnier", "Plateau universel"]
    },
    {
        question: "Bras plafonnier permet l'accés aux:",
        answers: ["Gaz médicaux", "Médicament", "Matérielles"]
    },
    {
        question: "Le défibrillateur aide à:",
        answers: ["Restaurer la fonction cardiaque", "Anesthésier le patient", "Corriger l'hypotension"]
    },
    {
        question: "Le système de stérilisation est dans:",
        answers: ["Les salles d'opération", "L'urgence", "Les salles de radiologie", "La réception"]
    },
    {
        question: "Le plateau universel est utilisé pour:",
        answers: ["Organiser et présenter les instruments chirurgicaux", "Réaliser un certain type des chirurgies", "Assurer la sécurité du patient"]
    },
    {
        question: "Le bistouri électrique est utilisé pour:",
        answers: ["Effuctuer des opérations très précise", "Détruire et éliminer tous les micro-organismes", "Assurer la sécurié du patient"]
    }
];

let score = 0;

// Shuffle function to randomize answers
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Load quiz questions
function loadQuiz() {
    const quizQuestionsDiv = document.getElementById('quiz-questions');
    quizQuestionsDiv.innerHTML = ''; // Clear any previous content

    questions.forEach((q, index) => {
        const shuffledAnswers = shuffle([...q.answers]); // Randomize answers

        // Generate HTML for each question
        let questionBlock = `
            <div class="question">
                <h3>${q.question}</h3>`;

        shuffledAnswers.forEach((answer) => {
            questionBlock += `
                <label>
                    <input type="radio" name="question${index}" value="${answer}">
                    ${answer}
                </label>`;
        });

        questionBlock += `</div>`;
        quizQuestionsDiv.innerHTML += questionBlock;
    });
}

// Check answers and display results
function checkAnswers() {
    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const resultMessage = document.getElementById('result-message');
    const resultScore = document.getElementById('result-score');
    score = 0;

    // Validate answers
    questions.forEach((q, index) => {
        const userAnswer = form[`question${index}`].value;
        const correctAnswer = q.answers[0]; // Use the first answer as the correct one
        if (userAnswer === correctAnswer) {
            score += 10; // Each correct answer adds 10 points
        }
    });

    // Hide the quiz form and display the result
    form.style.display = 'none';
    resultDiv.style.display = 'block'; // Show result div

    // Set the result message and score
    if (score >= 50) {
        resultMessage.textContent = "Félicitations, vous avez réussi !";
    } else {
        resultMessage.textContent = "Plus de chance la prochaine fois !";
    }

    resultScore.textContent = `Votre score est: ${score}/70`;
}

// Load quiz on page load
document.addEventListener('DOMContentLoaded', loadQuiz);
