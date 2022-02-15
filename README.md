# calculator
A project of creating simple calculator with HTML, CSS and JavaScript, by The Odin Project.

The basic version of the calculator is finally finished!
- The most difficult part was figureing out the logic behind when to store the number on the display (displayNum) inputted by number buttons (btnsNumber), and how to distinguish between whether this number is the first number or the second one.
-  After some writings of logic flow charts, I figured out that the best way to do this is to use am object with three keys, i.e. inputObj {firstNumber, secondNumber, operator};
- The way that I determine whether the displayNumber is the first number or the second number is to test whether firstNum and opeator is empty:
1. if firstNum and operator are both empty, it means this should be the first number, so the displayNumber is added as firstNum, and the operator is added too.
2. if firstNum is not empty, while operator is eppty, it means that the last calculation is done, so only the operator is added in.
3. if firstNum and operator are both not empty, it means that we are ready to run the opetate() function now because the displayNumber right now should be the secondNum.
- All of the above three branches are inside the when an operator is pressed, i.e. btnsOperator.
- The equal button (btnEqual) is basically what runs when condition3 is met, it does the following: put the displayNumber right now to secondNum; run operate() with inputObj (which is now complete with all three keys); dealing with maximizing number of digits, where two cases are considered: if the result has many decimals, or the result is too large with too many digits, two different ways of handling the digits are applied; display the result, but reset displayNumber so it is ready to take another number, put result into firstNum so it is ready to have the next caculation, reset secondNum and operator.
- btnAC and btnC are much easier after all of above works.


