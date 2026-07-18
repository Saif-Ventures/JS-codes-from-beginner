// // Question-1

// let num = prompt ('Enter a number:');

// if (num % 5 === 0) {
//     console.log(num,"is multiple of 5");
// } else {
//     console.log(num,"is not multiple of 5");
// }

// // Question-02

// let score = prompt('Enter your number:');

// if (score >=90 && score <=100) {
//     Grade = "A";
// } else if (score >=70 && score <= 89) {
//     Grade = "B";
// } else if (score >=50 && score <= 69) {
//     Grade = "C";
// } else if (score >=0 && score <= 49) {
//     Grade = "F";
// }

// console.log("According to your Score, Your Grade =", Grade);


//Practice of loop 

//Q-01 : Print all the even numbers from 0 to 100

// for ( let i = 0 ; i <= 100 ; i= i + 2){
//     console.log ("i=",i);
// } // this is a simplest way .there is another way

    // for(let i = 0; i <= 100 ; i++){
    //     if (i % 2 === 0 ){
    //         console.log ("i=",i);
    //     }
    // }

    //for odd numbers 
    // for(let i = 0; i <= 100 ; i++){
    //     if (i % 2 !== 0 ){
    //         console.log ("i=",i);
    //     }
    // }

    //Q-02 : Create a game where you start with any random numbers . Ask the user to  keep guessing  the game number until the user enters correct number.

    // let gmNum = 9 ;
    // let userNum = prompt("Guess the number :");
    // while (gmNum != userNum){
    //     userNum = prompt ("You guess the wrong number.Guess Again:");
    // }

    // console.log("Congratulation you guess the correct number.");

    // PRACTICE FOR  ARRAYS

    //QUESTION-01 : FOR GIVEN A ARRAYS MARKS OF STUDENT >> [85,97,44,37,76,60], FIND THE AVARAGE OF THIS .

    // let stMarks = [85,97,44,37,76,60];
    // let sum = 0 ;
    // for(let val of stMarks){
    //     sum += val ;
    // }
    // let avg = sum / stMarks.length
    //  console.log(`The avarage mark of the class = ${avg}`) ;

    //QUESTION-02 : FOR GIVER ARRAYS OF PRICE LIST >> [250,645,300,900,50] . ALL ITEMS HAVE 10% OFF , CHANGE THE AARRAY  TO STORE FINAL PRICE OF THE ITEMS.

    let items = [250,645,300,900,50];
    // let i = 0;
    // for (let val of items){
    //     console.log(`The price before offer = ${val}`);
    //     let offer = val / 10 ;
    //     items[i] = items[i] - offer ;
    //     console.log(`The price after offer = ${items[i]}`);  
    //     i++;
    // }

    //with for loop  

    // for (let i = 0; i < items.length; i++) {
    // console.log(`Before offer = ${items[i]}`);

    // let offer = items[i] / 10;
    // items[i] = items[i] - offer;

    // console.log(`After offer = ${items[i]}`);
    // } 

    