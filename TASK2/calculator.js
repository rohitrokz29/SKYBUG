let buttons = document.getElementsByClassName('button');
let input = document.querySelector("#current-state");
let currentValue = "";
const operators = ['+', '-', '*', '/']
for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', (e) => {
        let innerText = e.target.innerText;
        if (operators.includes(innerText) && operators.includes(currentValue.charAt(currentValue.length - 1))) {
            currentValue = currentValue.substring(0, currentValue.length - 1);
        }
        switch (innerText) {
            case 'AC':
                currentValue = "";
                input.value = "0";
                break;
            case '=':
                input.value = eval(currentValue);
                currentValue=input.value
                break;
            default:
                currentValue += innerText;
                input.value = currentValue;
                break;
        }
    })
}