/*Take Home Challenge
Begin your final project:
Your final project will be to build a magic 8 ball app
Create a new repository named: magic8ball
Clone your repository
Add your index file, stylesheet, script file and the provided 8ball images
Main objectives:
Create an input field for users to ask a question
Create a label for your input field telling your user to "Ask me anything!"
Create an "ask" button (this will run the function that outputs a random magic 8 ball image)
Create a div with an id of "answers" that you will insert the images into using js
Create an "ask" function that when clicked, will choose a random 8ball image and insert it into your "answers" div
Replace the input field with the user's question when displaying the answer
Style your page any way you like
Activate Github Pages for your project*/
 
    //  let answer = document.createElement("img");
    //  answer.src = "../../magic/magic/magic8ball_1.png";
let answer =  [];
index = 0;
// answer[0] = "<img src='../magic/magic8ball_1.png  'alt=''>";
answer[0] = new Image();
answer[0].src = '../magic/magic8ball_1.png';
answer[1] = new Image();
answer[1].src = '../magic/magic8ball_2.png';
answer[2] = new Image();
answer[2].src = '../magic/magic8ball_3.png';
answer[3] = new Image();
answer[3].src = '../magic/magic8ball_4.png';
answer[4] = new Image();
answer[4].src = '../magic/magic8ball_5.png';
answer[5] = new Image();
answer[5].src = '../magic/magic8ball_6.png';
answer[6] = new Image();
answer[6].src = '../magic/magic8ball_7.png';
answer[7] = new Image();
answer[7].src = '../magic/magic8ball_8.png';
answer[8] = new Image();
answer[8].src = '../magic/magic8ball_9.png';
answer[9] = new Image();
answer[9].src = '../magic/magic8ball_10.png';
answer[10] = new Image();
answer[10].src = '../magic/magic8ball_11.png';
answer[11] = new Image();
answer[11].src = '../magic/magic8ball_12.png';
answer[12] = new Image();
answer[12].src = '../magic/magic8ball_13.png';
answer[13] = new Image();
answer[13].src = '../magic/magic8ball_14.png';
answer[14] = new Image();
answer[14].src = '../magic/magic8ball_15.png';
answer[15] = new Image();
answer[15].src = '../magic/magic8ball_16.png';
answer[16] = new Image();
answer[16].src = '../magic/magic8ball_17.png';
answer[17] = new Image();
answer[17].src = '../magic/magic8ball_18.png';
answer[18] = new Image();
answer[18].src = '../magic/magic8ball_19.png';
// answer[1] = "<img src='../magic/magic8ball_2.png' alt=''>";
// answer[2] = "<img src='../magic/magic8ball_3.png' alt=''>";
// answer[3] = "<img src='../magic/magic8ball_1.png' alt=''>";
// answer[4] = "<img src='../magic/magic8ball_1.png' alt=''>";
// answer[5] = "><img src='../magic/magic8ball_6.png' alt=''>";
// answer[6] = "><img src='../magic/magic8ball_7.png' alt=''>";
// answer[7] = "<img src='../magic/magic8ball_8.png' alt=''>";
// answer[8] = "<img src='../magic/magic8ball_9.png' alt=''>";
// answer[9] = "<img src='../magic/magic8ball_10.png' alt=''>";
// answer[10] = "<img src='../magic/magic8ball_11.png' alt=''>";
// answer[11] = "<img src='../magic/magic8ball_12.png' alt=''>";
// answer[12] = "<img src='../magic/magic8ball_13.png' alt=''>";
// answer[13] = "<img src='../magic/magic8ball_14.png' alt=''>";
// answer[14] = "<img src='../magic/magic8ball_15.png' alt=''>";
// answer[15] = "<img src='../magic/magic8ball_16.png' alt=''>";
// answer[16] = "<img src='../magic/magic8ball_17.png' alt=''>";
// answer[17] = "<img src='../magic/magic8ball_18.png' alt=''>";
// answer[18] = "<img src='../magic/magic8ball_19.png' alt=''>";
// answer[19] = "<img src='../magic/magic8ball_20.png' alt=''>";
console.log(answer);

function Ask() {
    let result = document.getElementById("placehere");
    let question = document.getElementById("question");
    let firstImg = document.getElementById("firstImg");
    if (question.value.length < 1) {
    alert(`Enter a question!`);
    } else {
    let index = Math.floor(Math.random() * answer.length);
    firstImg.src = answer[index];
    // result.innerHTML+=index;
    }
    };



