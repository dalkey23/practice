const input_player = document.querySelector("p")

input_player.addEventListener("click", update_name)

function update_name() {
    const name = prompt("Enter the name of the Best Player")
    input_player.textContent = `Man of Match : ${name}`; 
    //input_player.textContent = "Man of Match : " + name;
}

//arrow function
// const update_name = () => {
//     const name = prompt("Enter the name of the Best Player");
//     input_player.textContent = `Man of Match : ${name}`; 
// }

// input_player.addEventListener("click", update_name);
