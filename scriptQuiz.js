


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
const answer6 = document.forms["Quiz"]["ride"].value;

if (answer6 === "right") { score++;} 


     const answer10 = document.forms["Quiz"]["lenerd"].value;

if (answer10 === "right") { score++;} 


  

    alert("Yeah, looking good mate... Your score: " + score);


}