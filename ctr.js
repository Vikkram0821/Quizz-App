const Science = document.querySelector(".science")
const maths = document.querySelector(".maths")
const gk = document.querySelector(".gk")
const random = document.querySelector(".random")
const txt = document.querySelector(".quiz")
const body = document.getElementById("body")



const questionContainer = document.querySelector(".question-container")
const themeContainer = document.querySelector(".theme")



let theme = "";
Science.addEventListener("click",() => {
    theme = window.scienceQuestions;
    Science.classList.add("hidden");
    maths.classList.add("hidden");
    gk.classList.add("hidden");
    random.classList.add("hidden");
    txt.classList.add("hidden")
    questionContainer.classList.remove("hidden");
    themeContainer.classList.add("hidden")
    displayQuestion();
})

maths.addEventListener("click",() => {
    theme = window.mathsQuestions;
    Science.classList.add("hidden");
    maths.classList.add("hidden");
    gk.classList.add("hidden");
    random.classList.add("hidden");
    txt.classList.add("hidden")
    questionContainer.classList.remove("hidden");
    themeContainer.classList.add("hidden");
    displayQuestion();
})
gk.addEventListener("click",() => {
    theme = window.generalKnowledgeQuestions;
    Science.classList.add("hidden");
    maths.classList.add("hidden");
    gk.classList.add("hidden");
    random.classList.add("hidden");
    txt.classList.add("hidden")
    questionContainer.classList.remove("hidden");
    themeContainer.classList.add("hidden");
    displayQuestion();
})
random.addEventListener("click",() => {
    theme = window.randomQuestions;
    Science.classList.add("hidden");
    maths.classList.add("hidden");
    gk.classList.add("hidden");
    random.classList.add("hidden");
    txt.classList.add("hidden")
    questionContainer.classList.remove("hidden");
    themeContainer.classList.add("hidden")
    displayQuestion();
})

const quizContainer = document.querySelector(".question-container");
const questionElement = document.querySelector(".question");
const optionsElement = document.querySelector(".options");
const submitButton = document.querySelector(".submit");

let currentQuestion = 0;
let score = 0;

function displayQuestion() {

    let q_type = theme;
    const questions = q_type[currentQuestion];
    questionElement.textContent = questions.question;
    optionsElement.innerHTML=" ";
 
const html = `
    <div class="gap">
    <input type="submit" value="${questions.options[0]}" class="b o1">
    <input type="submit" value="${questions.options[1]}" class="b o2">
    </div>
    <div class="gap">
    <input type="submit" value="${questions.options[2]}" class="b 03">
    <input type="submit" value="${questions.options[3]}" class="b o4">
    </div>
    <button class="submit">SUBMIT</button>`;
    optionsElement.insertAdjacentHTML("afterbegin",html);

    //Initializing Elements
    const submit = document.querySelector(".submit")
    const option1 = document.querySelector(".o1")
    const option2 = document.querySelector(".o2")
    const option3 = document.querySelector(".o3")
    const option4 = document.querySelector(".o4")
    
    submit.addEventListener("click", () => {
        optionsElement.innerHTML = "";
        currentQuestion++;
        displayQuestion()
    })
    
    }
    

function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultElement.textContent = `Your score: ${score} out of ${questions.length}`;
    resultElement.style.display = "block";
}

displayQuestion();