//script.js
function calculateEMI(){
    let num1=Number(document.getElementById("num1").value);
    let num2=Number(document.getElementById("num2").value);
    let num3=Number(document.getElementById("num3").value);
    let interest=(num1*(num2*0.01))/num3;
    const emi = ((num1 / num3) + interest).toFixed(2);
    document.querySelector("#emi")
            .innerHTML = "EMI : (₹)" + emi;
}