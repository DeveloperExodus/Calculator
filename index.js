const screen = document.getElementById('screen')
const buttons = [...document.querySelectorAll('#num')]
const ops = [...document.querySelectorAll('#op')]
let currentOperand = null
let prevNums = ''
let currNums = ''

buttons.forEach((btn) => {
    btn.addEventListener('click', render)
})

ops.forEach((op) => {
    op.addEventListener('click', calc)
})


screen.textContent = ''

function render(e) {
    if (e.target.textContent == '0' && prevNums == '0') return
    screen.textContent += e.target.textContent
    if (currentOperand == null) {
        prevNums += e.target.textContent
        console.log(prevNums)
    } else {
        currNums += e.target.textContent
        console.log(currNums)

    }
}

function calc(e) {
    if (prevNums !== '' || prevNums == "0") {

    switch (e.target.textContent) {
        case '+':

            if (currentOperand !== null) {
                console.log(currentOperand)

                if (currNums == '') return
                let num = eval()
                prevNums = num
                currNums = ''
                currentOperand = '+'
                screen.textContent = num
                screen.textContent += ' '
                screen.textContent += currentOperand
                screen.textContent += ' '
            }
            else {
                currentOperand = '+'
                console.log(currentOperand)
                screen.textContent += ' '
                screen.textContent += e.target.textContent
                screen.textContent += ' '
            }
            break

        case '-':
            if (currentOperand !== null) {
                if (currNums == '') return
                let num = eval()
                prevNums = num
                currNums = ''
                currentOperand = '-'
                screen.textContent = num
                screen.textContent += ' '
                screen.textContent += currentOperand
                screen.textContent += ' '
            }
            else {
                currentOperand = '-'
                screen.textContent += ' '
                screen.textContent += e.target.textContent
                screen.textContent += ' '
            }
            break
        case '÷':
            if (currentOperand !== null) {
                if (currNums == '') return
                let num = eval()
                prevNums = num
                currNums = ''
                currentOperand = '÷'
                screen.textContent = num
                screen.textContent += ' '
                screen.textContent += currentOperand
                screen.textContent += ' '
            }
            else {
                currentOperand = '÷'
                screen.textContent += ' '
                screen.textContent += e.target.textContent
                screen.textContent += ' '
            }
            break
        case 'x':
            if (currentOperand !== null) {
                if (currNums == '') return
                let num = eval()
                prevNums = num
                currNums = ''
                currentOperand = 'x'
                screen.textContent = num
                screen.textContent += ' '
                screen.textContent += currentOperand
                screen.textContent += ' '
            }
            else {
                currentOperand = 'x'
                screen.textContent += ' '
                screen.textContent += e.target.textContent
                screen.textContent += ' '
            }
            break

        case 'AC':
            prevNums = ''
            currNums = ''
            currentOperand = null
            screen.textContent = ''    
        
        case '=':
            if (currentOperand !== null) {
                if (currNums == '') return
                let num = eval()
                prevNums = num
                currNums = ''
                currentOperand = null
                screen.textContent = num
            }

    }
    }
}


function eval() {
    let num
    switch (currentOperand) {
        case '+':
            num = parseInt(prevNums) + parseInt(currNums)
            break
        case '-':
            num = parseInt(prevNums) - parseInt(currNums)
            break
        case '÷':
            num = parseInt(prevNums) / parseInt(currNums)
            break
        case 'x':
            num = parseInt(prevNums) * parseInt(currNums)
            break
    }
    console.log(num)
    return num

}


