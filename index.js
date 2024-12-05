const selectmenu = document.querySelector("#colors")
const btnGetResult = document.querySelector("button")
const resultArea = document.querySelector(".result")
const resultcontainer = document.querySelector(".resultcontainer")

btnGetResult.addEventListener("click", ()=> {

     const userChoice = selectmenu.options[selectmenu.selectedIndex].value;
     let resultText = ""

    switch(userChoice) {
        case "red":
            resultText = "You seek power and control"
            break
            case "green":
                resultText = "You are a natural visionary and a problem solver"
            break
            case "purple":  
            resultText = "You are confident and strong"
            break
            case "yellow":
            resultText = "You like bananas"
            break
            case "black":
                resultText = "You are independent and a bit of a lone wolf"
            break
            case "pink":
                resultText = "You are playful and easy to be around"
            break
            default:
                resultText = "You are an unknown unicorn"
            break    
    }

     if(userChoice === "other") {
        resultcontainer.style.backgroundColor = "#777"
     } else {
        resultcontainer.style.backgroundColor = userChoice
     }


resultArea.innerHTML = resultText


     console.log(resultText)

})


// if(userChoice === "red") {
//     resultText = "You seek power and control"
//  } else if (userChoice === "green") {
//     resultText = "You are a natural visionary and a problem solver"
//  } else if (userChoice === "purple") {
//     resultText = "You are confident and strong"
//  } else if (userChoice === "yellow") {
//     resultText = "You like bananas"
//  } else if (userChoice === "black") {
//     resultText = "You are independent and a bit of a lone wolf"
//  } else if (userChoice === "pink") {
//     resultText = "You are playful and easy to be around"
//  } else  {
//     resultText = "You are an unknown unicorn"
//  }