const start_btn = document.querySelector(".start_btn button");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

start_btn.onclick = ()=>{
quiz_box.classList.add("activeQuiz");  
showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
    startTimer(15); //calling startTimer function
    startTimerLine(0); //calling startTimerLine function 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const bottom_ques_counter = document.querySelector("footer .total_que");


function showQuetions(index){
    const que_text = document.querySelector(".que_text");
}
let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
+ '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
que_text.innerHTML = que_tag; //adding new span tag inside que_tag
option_list.innerHTML = option_tag; //adding new div tag inside option_tag

const option = option_list.querySelectorAll(".option");

for(i=0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
}
