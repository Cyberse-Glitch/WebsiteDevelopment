


function answerChecking() {
    let score = 0;
    const answer1 = document.forms["Quiz"]["person"].value;

    if (answer1 === "right") {
        score++;
    }





 const answer2 = document.forms["Quiz"]["persontwo"].value;

    if (answer2 === "right") {
        score++;
    }


        const answer3 = document.forms["Quiz"]["amount"].value;

    if (answer3 === "50") {
        score++;


    }

    
 const answer4 = document.forms["Quiz"]["place"].value;

    if (answer4 === "right") {
        score++;
    }

    
 const answer5 = document.forms["Quiz"]["number"].value;

    if (answer5 === "5") {
        score++;
    }
const answer6 = document.forms["Quiz"]["ride"].value;

if (answer6 === "right") { score++;} 

const answer7 = document.forms["Quiz"]["personthre"].value;

if (answer7 === "right") { score++;} 


const answer8 = document.forms["Quiz"]["evil"].value;

if (answer8 === "right") { score++;} 


const answer9 = document.forms["Quiz"]["song"].value;

if (answer9 === "right") { score++;} 


     const answer10 = document.forms["Quiz"]["lenerd"].value;

if (answer10 === "right") { score++;} 


  

    alert("Yeah, looking good mate... Your score: " + score);


}