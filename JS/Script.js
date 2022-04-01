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

index = 0;
 let answer =  ["magic/magic8ball_12.png","magic/magic8ball_1.png","magic/magic8ball_2.png","magic/magic8ball_3.png","magic/magic8ball_4.png","magic/magic8ball_5.png","magic/magic8ball_6.png","magic/magic8ball_8.png","magic/magic8ball_9.png","magic/magic8ball_10.png","magic/magic8ball_11.png","magic/magic8ball_12.png","magic/magic8ball_13.png","magic/magic8ball_14.png","magic/magic8ball_15.png","magic/magic8ball_16.png","magic/magic8ball_17.png","magic/magic8ball_18.png"
]


function Ask() {
    let result = document.getElementById("placehere");
    let question = document.getElementById("question");
    let firstImg = document.getElementById("firstImg");
    if (question.value.length < 1) {
    alert(`Enter a question!`);
    } else {
    let index = Math.floor(Math.random() * answer.length);
    firstImg.src = answer[index];
    
    }
    };



