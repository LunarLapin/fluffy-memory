function clickFunction () {
    const numberOne = document.getElementById("mathOne").value;
    const numberTwo = document.getElementById("mathTwo").value;
    
    const sum = +numberOne + +numberTwo;
    var total = sum.toString();
    document.getElementById("result").textContent = total;
    console.log(total); 
}