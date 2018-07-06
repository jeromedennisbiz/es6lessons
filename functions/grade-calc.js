// Students Score, Total possible score
// 15/20 -> You got a C Grade (75%)!
// A 90-100, B 80-89 , C 70-79, D 60-69, F 0-59

let grade;
let percent;

let calculateAndPrintGradeAndPercent = function (studentsScore, totalPossibleScore = 100)
{
    percent = (studentsScore / totalPossibleScore) * 100; 
    
    // studentsScore = parseInt(studentsScore,10);

    // switch(true)
    // {
    //     case (studentsScore >= 90):
    //         console.log('studentsScore : ', studentsScore);
    //         grade = 'A';
    //         break;
    //     case (studentsScore >= 80 && studentsScore <= 89): 
    //         console.log('studentsScore : ', studentsScore);
    //         grade = 'B';
    //         break;
    //     case (studentsScore >= 70 && studentsScore <= 79):
    //         console.log('studentsScore : ', studentsScore);
    //         grade = 'C';
    //         break;
    //     case (studentsScore >= 60 && studentsScore <= 69):
    //         console.log('studentsScore : ', studentsScore);
    //         grade = 'D';
    //         break;
    //     default:
    //         console.log('studentsScore default : ', studentsScore);
    //         grade = 'F';
    //         break;
    // }

    
    if(studentsScore >= 90)
    {
        grade = 'A';
    }
    else if (studentsScore >= 80 && studentsScore <= 89) 
    {
        grade = 'B';
    }
    else if (studentsScore >= 70 && studentsScore <= 79) {
        grade = 'C';
    }
    else if (studentsScore >= 60 && studentsScore <= 69) {
        grade = 'D';
    }
    else
    {
        grade = 'F';
    }
    console.log(`You got a ${grade} Grade (${percent}%)!`);
};

calculateAndPrintGradeAndPercent(75);
calculateAndPrintGradeAndPercent(86.75);
calculateAndPrintGradeAndPercent(94);
calculateAndPrintGradeAndPercent(87);
calculateAndPrintGradeAndPercent(74);
calculateAndPrintGradeAndPercent(63);
calculateAndPrintGradeAndPercent(59);