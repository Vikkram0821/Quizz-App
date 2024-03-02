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
let background = "";
Science.addEventListener("click",() => {
    background="s-b";
    body.classList.remove("f-b");
    body.classList.add("s-b")
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
    body.classList.remove("f-b");
    body.classList.add("m-b");
    background="m-b";
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
    body.classList.remove("f-b");
    body.classList.add("gk-b");
    background="gk-b";
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
    background="r-b";
    body.classList.remove("f-b");
    body.classList.add("r-b");
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
    <div class="btn-c">
    <button class="submit ">SUBMIT</button>
    <button class="quit_all submit" style="  color: rgb(255, 255, 255);
    background-color: black;
    font-family: 'lilita one',sans-serif;
    font-weight: bolder;">QUIT</button>
    </div>
    
    `;
    
    optionsElement.insertAdjacentHTML("afterbegin",html);
const exit = document.querySelector(".quit_all")
    
    exit.addEventListener("click", () =>{
        location.reload()
    })

    function enterEvent(event){
        if(event.key === "Enter"){
          round++;
          console.log(round);
          round == 21? displayResult() : "" ; 
          optionsElement.innerHTML = "";
          currentQuestion++;
          displayQuestion();
          body.classList.remove("green");
          body.classList.remove("red");
          body.classList.add(background);
        }
     }

    //Initializing Elements
    const submit = document.querySelector(".submit");
    const option1 = document.querySelector(".o1");
    const option2 = document.querySelector(".o2");
    const option3 = document.querySelector(".o3");
    const option4 = document.querySelector(".o4");

    option1.addEventListener("click", optionEvent);
    option2.addEventListener("click", optionEvent);
    option3.addEventListener("click", optionEvent);
    option4.addEventListener("click", optionEvent);
    
    option1.addEventListener("keypress", enterEvent);
    option2.addEventListener("keypress", enterEvent);
    option3.addEventListener("keypress", enterEvent);
    option4.addEventListener("keypress", enterEvent);

    function optionEvent(event) {
        const clickedOption = event.target;
        const clickedVal = clickedOption.value;
        
        if (clickedVal === questions.answer) {
            body.classList.remove("s-b","m-b","gk-b","r-b");
            body.classList.add("green");
            score++;
        } else {
            body.classList.remove("s-b","m-b","gk-b","r-b");
            body.classList.add("red");
        }
        
       
       //SubmitButton event
 
       submit.addEventListener("click", () => {
        
        round++;
        console.log(round);
        round == 21? displayResult() : "" ; 
        optionsElement.innerHTML = "";
        currentQuestion++;
        displayQuestion();
        body.classList.remove("green");
        body.classList.remove("red");
        body.classList.add(background);

        
    })
    option1.removeEventListener("click", optionEvent);
    option2.removeEventListener("click", optionEvent);
    option3.removeEventListener("click", optionEvent);
    option4.removeEventListener("click", optionEvent);
    }
    
const displayResult = function(){
body.classList.add(background);
body.classList.remove("green");
body.classList.remove("red");
  questionContainer.innerHTML = "";
  let html = `
  <center><div class="quiz1 gap1">Score - (<span class="score">  ${score}  </span>/20)${score <=10? "🙂": ""}${score >9 && score <15? "😍": ""}${score>15? "🥳" :""}</div>
  <div><button class="back">Back to Home</button></div></center>
  `;
  questionContainer.insertAdjacentHTML("afterbegin",html);
  
const backBtn = document.querySelector('.back');

    backBtn.addEventListener("click", () =>{
        location.reload()
  })
}
   
}