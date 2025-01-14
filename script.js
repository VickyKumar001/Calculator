let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let string = "";

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "=") {
            try {
                string = eval(string); // Be cautious with eval; it's generally unsafe
                input.value = string;
            } catch (error) {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML === "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});
