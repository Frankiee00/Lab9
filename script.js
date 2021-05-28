let calculateBtn = document.querySelector('#calculate');
    calculateBtn.addEventListener('click', () => {
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);

      //step 3 here too
      try{
          if (secondNum == "0" && operator == "/"){
              throw new MathError("Cannot divide by zero");
          }
          output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
      }

      catch(mistake){
          if(mistake instanceof MathError){
              console.error("Math Error: " + mistake.message);
          }
          else{
              console.error("Data is invalid");
          }
      }
      
      finally{
          document.querySelector('#operator').value = null;
          document.querySelector('#first-num').value = null;
          document.querySelector('#second-num').value = null;
      }
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));
    // TODO - Make buttons functional

    //step 2
    const logButton = errorBtns[0];
    logButton.addEventListener("click", () => {
        console.log("Console Log Demo");
    });

    const errorButton = errorBtns[1];
    errorButton.addEventListener("click", () => {
        console.error("Console Error Demo");
    });

    const tableButton = errorBtns[6];
    tableButton.addEventListener("click", () => {
        console.table([{name: "Pikachu", id: "1"}, {name:"Squirtle", id:"2"}]);
    });

    const dirButton = errorBtns[2];
    dirButton.addEventListener("click", () => {
        console.dir(dirButton);
    });

    const dirxmlButton = errorBtns[3];
    dirxmlButton.addEventListener("click", () => {
        console.dirxml(document);
    });

    const groupstartButton = errorBtns[4];
    groupstartButton.addEventListener("click", () => {
        console.group("A group of messages from console");
    });

    const groupendButton = errorBtns[5];
    groupendButton.addEventListener("click", () => {
        console.groupEnd("A group of messages from console");
    });

    const starttimerButton = errorBtns[7];
    starttimerButton.addEventListener("click", () => {
        console.time();
    });

    const endtimerButton = errorBtns[8];
    endtimerButton.addEventListener("click", () => {
        console.timeEnd();
    });

    const traceButton = errorBtns[9];

    traceButton.addEventListener("click", () => {
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { console.trace (); };
        first();
    });

    //step 4 - custom error
    class MathError extends Error {
        constructor(message){
            super(message);
            this.name = "Math";
        }
    }

