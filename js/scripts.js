$(document).ready(function() {
  $("form#things").submit(function(event) {
    event.preventDefault();
    const nameInput = ($("input#name").val());
    const answer1 = ($("input#question1").val());
    const answer2 = ($("input#question2").val());
    const answer3 = ($("input#question3").val());
    const answer4 = ($("input#question4").val());
    
    
    let favThings = [];
    favThings.push(nameInput, answer1, answer2, answer3, answer4);
    let favThings2 =[favThings[1],favThings[3],favThings[2]]
    let list = document.getElementById("myList");

  
    favThings2.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  });
});
