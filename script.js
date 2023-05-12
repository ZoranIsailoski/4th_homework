//Prva Zadaca

for (let numberEvenOdd = 0; numberEvenOdd <= 20; numberEvenOdd++){

if(numberEvenOdd % 2 == 0){
    console.log(`The number ${numberEvenOdd} is even`);
}

else{
    console.log(`The number ${numberEvenOdd} is odd`);
}

}

//Vtora Zadaca

for (let numberMultiplication = 0; numberMultiplication <= 10; numberMultiplication++){
    let multiplier = 9;
    console.log(`${numberMultiplication} * ${multiplier} is ${numberMultiplication * multiplier}`);
}

for (let numberMultiplication = 0; numberMultiplication <= 100; numberMultiplication++){
    let multiplier = 9;
    console.log(`${numberMultiplication} * ${multiplier} is ${numberMultiplication * multiplier}`);
}

//Treta Zadaca

for (let numberGrade = 60; numberGrade <=100; numberGrade++){
    if (numberGrade >=90 && numberGrade <=100){
        console.log("For " + numberGrade + " you got an A");
    }
    else if (numberGrade >=80 && numberGrade <=89){
    console.log("For " + numberGrade + " you got a B");
   }
    else if (numberGrade >=70 && numberGrade  <=79){
    console.log("For " + numberGrade + " you got a C");
   }
    else if (numberGrade <= 60){
    console.log("For " + numberGrade + " you got a D");
   }
 }