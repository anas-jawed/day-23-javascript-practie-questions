// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
//  that changes the button’s color to green when it is clicked


// let btn = document.createElement("button");
// btn.innerHTML = "Click Me";
// document.querySelector("body").append(btn);

// let btn1 = document.querySelector("button");

// btn1.addEventListener("click", function(){
//     this.style.color = "green";
// })

// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
//  H2 heading on the page inside HTML.
//  The purpose of this input element is to enter a user’s name so it should only input
//  letters from a-z, A-Z and space (all other characters should not be detected).
//  Whenever the user inputs their name, their input should be dynamically visible inside
//  the heading.
//  [Please note that no other character apart from the allowed characters should be
//  visible in the heading]


let greetbutton = document.querySelector("greetButton");

let nameInput = document.querySelector("nameInput");

let greetingElement =  document.querySelector("greeting");

greetbutton.addEventListener("click", function(){
    let username = nameInput.value;
    if(username.trim() !== ""){
        greetingElement.textContent = `Hello ${username} Wlecome to the page!`;
    } else{
        greetingElement.textContent = "please enter your name.";
    }

    nameInput.value = "";
})