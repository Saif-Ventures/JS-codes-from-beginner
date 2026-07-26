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

    // FUNCTION PRACTICE

    //QUES-01 : create a function using a function keyword that takes a string as an arguement and returns the number of vowel in the string .

    //  function countVowel(str){
    //     let count = 0;
    //     for(const char of str){
    //         if(char === "a" || char === "e" || char === "i" || char ===  "o" || char === "u"){
    //             count ++;
    //         }
    //     }
    //     return count;
    //  }
    //  countVowel("How are  you");

     //This similar question solving with arrow function 

    //  const vowl = (char)=>{
    //     let count = 0;
    //     for(const char of str){
    //         if(char === "a" || char === "e" || char === "i" || char ===  "o" || char === "u"){
    //             count ++;
    //         }
    //     }
    //     return count;
    //  }

    // Ques-02 : for given array of numbers,print the squar of each value Using each Loop .

    // let num = [1,2,3,4,5,6]; 
     
    // num.forEach((val)=>{
    //     console.log(val*val);
    // });

    //Ques-03 : For given array of student marks , filter out OF THE MARKS scores 90+.

    // let marks = [87,99,44,66,70,91,90];

    // let toppers = marks.filter((val)=>{
    //    return val > 90 ;
    // });
    // console.log(toppers);

    //Ques-04 :**Qs.** Take a number **n** as input from the user. Create an array of numbers from **1** to **n**.Use the **reduce()** method to calculate the **sum** of all numbers in the array.Use the **reduce()** method to calculate the **product** of all numbers in the array.

    // let n = prompt("Enter a number");
    // let arr = [];
    // for(let i =1 ; i<=n; i++){
    //     arr[i-1]= i ;
    // }

    // let sum = arr.reduce((prev,now)=>{
    //     return prev + now ;
    // })
    // console.log("sum=",sum);

    // let factorial = arr.reduce((prev,now)=>{
    //     return prev * now ;
    // })
    // console.log("factorial=", factorial);


    // DOM practice 

    // Question-01 : create a h2 heading write Hello JavaScript . Append "from Apna College" with JS.

    // let heading = document.querySelector("h2");
    // console.dir(heading.innerText);
    // heading.innerText = `${heading.innerText}  from Apna college`;

    // Question: create 3 divs with same class name "box". Access theme and add some uniqe text each of them .

    // let div = document.querySelectorAll(".box");
    // // div[0].innerText= "value of div 1";
    // // div[1].innerText= "value of div 2";
    // // div[2].innerText= "value of div 3"; // this is okay but we always use loops here to access all arrays.
    // let idx = 1 ;
    // for ( divs of div){
    //     divs.innerText = `New value ${idx}`;
    //     idx++;
    // } // this is a proper way. 
