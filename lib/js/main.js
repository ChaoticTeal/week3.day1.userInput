// 1. While typing in the #title_input field, the
// #main_title is updated

let titleInput = document.querySelector("#title_input");
titleInput.oninput = updateTitle;

function updateTitle(event) {
    let input = event.target;
    let titleElem = document.querySelector("#main_title");
    titleElem.innerHTML = input.value;
}

/* 2. When the user clicks on the submit button
*   a) If the user has left any fields blank, send an alert telling them to fill all fields
*   b) If the use has filled out all fields...
        i) Parse the inputs into the given ad lib
        ii) Hide the .form_container
        iii) Populate #story_result with the finalized text

   3 (Extra Credit). Customize the ad lib text and include additional input fields
   4 (Extra Credit). Make the .form_container fade out over 0.5 seconds
*/

let submitButton = document.querySelector("#submit_button");
let formContainer = document.querySelector(".form_container");

submitButton.onclick = handleSubmit;

function handleSubmit(event) {
        event.preventDefault();

        /*
        Original Solution Before Extra Credit

        let noun = document.querySelector("#noun");
        let adjective = document.querySelector("#adjective");
        let verb = document.querySelector("#verb");

        if(noun.value === "" ||
            verb.value === "" ||
            adjective.value === "") {
                alert("Please fill out all fields!");
            } else {
                let storyText = document.querySelector("#story_result");
                storyText.innerHTML = `Last night I ate a ${noun.value}, and today I just had to ${verb.value}. What a ${adjective.value} day!`;
                formContainer.style["transition"] = "0.5s"
                formContainer.style["opacity"] = "0";
            }
        */
    let validation = document.querySelectorAll(".adlib input");
    console.dir(validation);
    for(let i = 0; i < validation.length; i++) {
        if(validation[i].value === "") {
            alert("Please fill out all fields!");
            return;
        }
    }
    let storyText = document.querySelector("#story_result");
    storyText.innerHTML = `<h2>${validation[0].value}</h2><br/>
        I am a valiant ${validation[1].value}. My penchant for ${validation[2].value} is known throughout the land.
        My strength is ${validation[3].value} as a ${validation[4].value} and my ${validation[5].value} is ${validation[6].value}.
        If only I didn't have to ${validation[7].value}!`;

    formContainer.style["transition"] = "0.5s"
    formContainer.style["opacity"] = "0";
}

let adjCount = 0;
let nounCount = 0;
let verbCount = 0;

addInputs("noun");
addInputs("noun");
addInputs("adjective");
addInputs("verb");

/**
 * Adds a new adlib input field to the form.
 * @param {string} type the part of speech of the new input 
 */
function addInputs(type) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("adlib");
    formContainer.append(newDiv);

    let count = 0;
    switch(type) {
        case "noun":
            count = nounCount++;
            break;
        case "verb":
            count = verbCount++;
            break;
        case "adjective":
            count = adjCount++;
            break;
    }

    let newLabel = document.createElement("label");
    newLabel.setAttribute("for", `${type}${count}`);
    newLabel.innerHTML = `${type}:`;
    newDiv.append(newLabel);

    let newInput = document.createElement("input");
    newInput.type = "text";
    newInput.id = `${type}${count}`;
    newInput.setAttribute("placeholder", type);
    newDiv.append(newInput);

    formContainer.append(submitButton);
}