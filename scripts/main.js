window.addEventListener('DOMContentLoaded', init);

// create a custom error for division
class DivisionError extends Error {

    constructor(message) {
        super(message);
        this.name = "DivisionError"
        
    }
}

function init() {


    handleButtonFunctionality();
}

function handleButtonFunctionality() {


    let form = document.querySelector('form');
        form.addEventListener('submit', e => {
        e.preventDefault();
        try {
            let output = document.querySelector('output');
            let firstNum = document.querySelector('#first-num').value;
            let secondNum = document.querySelector('#second-num').value;
            let operator = document.querySelector('#operator').value;
            // checking for division by zero.
            if ((operator === "/") && (secondNum === '0')) {
                throw new DivisionError("You tried to divide by zero");
            }
            output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        }
        catch (err) {
            if (err instanceof DivisionError) {
                console.error("Division Error:", err.message);
            } else if (err instanceof SyntaxError) {
                console.error("Syntax Error:", err.message);
            } else {
                console.error("Other error:", err.message);
            }
        } finally {
            console.log("Try catch completed successfully!");
        }
            
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    errorBtns[0].addEventListener('click', function () {

        console.log("Console Log Demo");
    });

    errorBtns[1].addEventListener('click', function () {

        console.error("Console Log Demo Error");
    });

    errorBtns[2].addEventListener('click', function () {

        console.count("Count Button:");
    });

    errorBtns[3].addEventListener('click', function () {

        console.warn("Console warning button");
    });

    errorBtns[4].addEventListener('click', function () {

        console.assert((1+2) == 4, "\'1+2\' = 3 NOT 4.");
    });

    errorBtns[5].addEventListener('click', function () {

        console.clear();
    });

    errorBtns[6].addEventListener('click', function () {

        console.dir(errorBtns);
    });

    errorBtns[7].addEventListener('click', function () {

        console.dirxml(errorBtns[6]);
    });

    errorBtns[8].addEventListener('click', function () {

        console.group("My Group");
    });

    errorBtns[9].addEventListener('click', function () {

        console.groupEnd();
    });

    errorBtns[10].addEventListener('click', function () {

        var exampleArray = [
            {Team: 'ManU', manager: 'Ten Hag'},
            {Team: 'ManC', manager: 'Pep Guardiola'},
            {Team: 'Liverpool', manager: 'Arne Slot'}
        ];
            
        console.table(exampleArray);
    });

    errorBtns[11].addEventListener('click', function () {

        console.time();
    });

    errorBtns[12].addEventListener('click', function () {

        console.timeEnd();
    });

    errorBtns[13].addEventListener('click', function () {

        console.trace();
    });

    errorBtns[14].addEventListener('click', function () {
        // intentionally throw an error
        throw new Error("I'm throwing an error on purpose");
    });

    window.onerror = function() {
        console.error("There was an error in the program handled by 'window.onerror'.");
        // to suppress the browser's message of an uncaught error.
        return true;
    }


}



