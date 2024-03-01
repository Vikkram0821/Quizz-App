const Science = document.querySelector(".science")
const maths = document.querySelector(".maths")
const gk = document.querySelector(".gk")
const random = document.querySelector(".random")
const txt = document.querySelector(".quiz")
const body = document.getElementById("body")



const questionContainer = document.querySelector(".question-container")
const themeContainer = document.querySelector(".theme")
const resultContainer = document.querySelector(".result-contaier")


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
let round =1;

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
    <input type="submit" value="${questions.options[2]}" class="b o3">
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

option1.addEventListener("click", () =>{
    if (option1.value === questions.answer){
        body.classList.add("green")
        option1.classList.add("opacity");
       
        score++;
    }
    else{
        body.classList.add("red")
        option1.classList.add("opacity");

    }
})
option2.addEventListener("click", () =>{
    if (option2.value === questions.answer){
        body.classList.add("green");
        option2.classList.add("opacity");
        score++;
    }
    else{
        body.classList.add("red")
        option2.classList.add("opacity");
        
    }
})

option3.addEventListener("click", () =>{
    if (option3.value === questions.answer){
        body.classList.add("green");
        option3.classList.add("opacity");
        score++;
    }
    else{
        body.classList.add("red")
        option3.classList.add("opacity");
    }
})

option4.addEventListener("click", () =>{
    if (option4.value === questions.answer){
        body.classList.add("green");
        option4.classList.add("opacity");
        score++;
    }
    else{
        body.classList.add("red")
        option4.classList.add("opacity");
    }
})

    submit.addEventListener("click", () => {
        round++;
        
        optionsElement.innerHTML = "";
        currentQuestion++;
        displayQuestion();
        body.classList.remove("green");
        body.classList.remove("red");
        console.log(round)
        // if(round == 20){
        //    let html1 = `
        //      <div class="result">You have scored <span class="score">${score}</span> out of 20</div>
        //    `;
        //    resultContainer.insertAdjacentHTML("afterbegin",html1)

        // }
    })
}

