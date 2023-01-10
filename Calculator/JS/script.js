
window.onload = function(){
    let calculator = document.querySelector('.calculator');
    let textArea = document.querySelector('.calculator-monitor');
    let buttonArray = [
        '√', '^2', '1/x', 'Del'
        ,'1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', '*', 
        'C'
    ];
    buttonArray.forEach(function(sign){
        let buttonContainer = document.createElement('button');
        buttonContainer.classList.add('button');
        buttonContainer.innerHTML = sign;
        calculator.append(buttonContainer);
        if(buttonContainer.innerHTML == 'c'){
            buttonContainer.setAttribute('id', 'clearAll');
            buttonContainer.innerHTML = sign;
        }
    })
    
        let eventListener =  document.querySelectorAll('.button');
            eventListener.forEach(function(button){
            button.addEventListener('click', textAreaInit);
            }
            )
            function textAreaInit(e) {
                // e - MouseEvent (содержит информацию о клике)
                if (e.target.innerHTML === 'C') {
                    // Если нажата кнопка "с", то стирает все из текстового поля
                    textArea.innerHTML = '0';
                } else if (e.target.innerHTML === '=') {
                    // Если нажата кнопка "=", то, приведя выражение
                    // в текстовом поле к javascript, вычислить значение
                    textArea.innerHTML = eval(textArea.innerHTML);
                } else if (textArea.innerHTML === '0') {
                    if(e.target.innerHTML === 'Del'){
                       return;
                    }
                    // Если textarea содержит только "0", то
                    // стереть "0" и записать
                    // значения кнопки в текстовое поле
                    else{
                        textArea.innerHTML = e.target.innerHTML;
                    }
                    
                    // Если textarea содержит только "0", то
                } else if (e.target.innerHTML === '√') {
                    let sqrtVal = textArea.innerHTML;
                    textArea.innerHTML = Math.sqrt(eval(textArea.innerHTML));
                } else if(e.target.innerHTML === '^2') {
                    textArea.innerHTML = eval(textArea.innerHTML)*eval(textArea.innerHTML);
                } else if(e.target.innerHTML === 'Del') {
                    if (textArea.innerHTML === '0'){
                        return;
                    }
                    else{
                        textArea.innerHTML = textArea.innerHTML.slice(0, -1);
                    }
                    if(textArea.innerHTML.length === 0){
                        textArea.innerHTML = '0';
                    }
                } else if(e.target.innerHTML === '1/x'){
                    textArea.innerHTML = 1/eval(textArea.innerHTML);
                }
                else {
                    // Добавление значения кнопки в текстовое поле
                    textArea.innerHTML += e.target.innerHTML;
                }
            }
}  


