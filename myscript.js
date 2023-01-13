alert("Hello,please enter your some information")
var nm = prompt("enter your first name: ")
var nm2 = prompt("enter your second name: ")
var age = prompt("enter your age: ")
var height = prompt("enter your height: ")

if (nm[0] === nm2[0]) {
    if (age > 20 && age < 35) {
        if (height > 170) {
            console.log("he has the vast probability for being a spy")
        }
        else
            console.log("has mid probability for being a SPY")
    }
    else
        console.log("little probability for being a SPY")
}
else
    console.log("He is just an civilian prople")
alert("Thanks for your information,Have a good luck sir")