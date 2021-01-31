
function amountChange(takaChange, isIncreas) {
    const inputNumber = document.getElementById(takaChange +'-number');
    const countNumber = parseInt(inputNumber.value);
    let countNotunNumber = countNumber;
    if(isIncreas == true){
        countNotunNumber = countNumber +1;
    }
    if(isIncreas == false && countNotunNumber>0 ){
        countNotunNumber = countNumber -1;
    }
    inputNumber.value = countNotunNumber;
   
    let totalPrice = 0;
    if(takaChange == 'first'){
        totalPrice = countNotunNumber*150;
    }
    if(takaChange == 'economy'){
        totalPrice =countNotunNumber*100;
    }
    document.getElementById(takaChange +'Price').innerText = totalPrice;
    calculate()
}

function calculate(){
    
    const countFirst = getInputNumber('first');
    const countEconomy = getInputNumber('economy');
    const subTotal = countFirst*150 + countEconomy*100;
    document.getElementById('sub-total').innerText = subTotal;
    const tax = Math.round(subTotal*0.1);
    document.getElementById('tex-amount').innerText = tax;

    const total = subTotal+tax;
    document.getElementById('amount').innerText = total;
}

function getInputNumber(inputChange){
    const ClassCount = document.getElementById(inputChange +'-number');
    const countResult = parseInt(ClassCount.value);
    return countResult;
}
