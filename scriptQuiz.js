//function finishFunction() { alert ("very good job" )}


// function answerChecking() { var score = 0; 

   


// quiz = document.forms.quiz.elements; 

// question1 = Quiz.person.value;

// if (answer1 == "true") {

   // score = score + 1;
//}

 // alert (" yeah looking good mate..." + score);

// } 


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


    alert("Yeah, looking good mate... Your score: " + score);

}