//create an array of objects
const submissions = [
    {name: "Jane", score: 95, date: "2020-01-24", passed: true},
    {name: "Joe", score: 77, date: "2018-05-14", passed: true},
    {name: "Jack", score: 59, date: "2019-07-05", passed: false},
    {name: "Jill", score: 88, date: "2020-04-22", passed: true}
]

//Declare a function named addSubmission
//Parameter(s): array, newName, newScore, newDate
function addSubmission(array, newName, newScore, newDate){
    let newPassed; 
    if(newScore >= 60){
        newPassed = true;
    }else{
        newPassed = false;
    }
    return array.push({name: newName, score: newScore, date: newDate, passed: newPassed});
}

//addsubmission test cases
addSubmission(submissions, "Tiffany", 60, "2020-11-11");
addSubmission(submissions, "Spike", 49, "2020-07-20");
// addSubmission(submissions, "Anna", 99, "2020-07-20");
// addSubmission(submissions, "Elsa", 95, "2020-07-20");
console.log("addsubmission test cases");
console.log(submissions);



// Declare a function named deleteSubmissionByIndex
// Parameter(s): array, index
function deleteSubmissionbyIndex(array, index){

    return array.splice(index, 1);
}

//deletesubmissionsbyindex test cases
deleteSubmissionbyIndex(submissions, 5);
console.log("deletesubmissionsbyindex test cases");
console.log(submissions);



// Declare a function named deleteSubmissionByName
// Parameter(s): array, name
function deleteSubmissionByName(array, name){
    const found = array.findIndex(array => array.name === name);
    
    return deleteSubmissionbyIndex(array, found);
}

//deletesubmissionsbyname test cases
deleteSubmissionByName(submissions, "Joe");
console.log("deleteSubmissionByName test cases");
console.log(submissions);



// Declare a function named editSubmission
// Parameter(s): array, index, score
function editSubmission(array, index, score){
    let newPassed; 
    if(score >= 60){
        newPassed = true;
    }else{
        newPassed = false;
    }
    
    array[index].score = score;
    array[index].passed = newPassed;
}

//editsubmission test cases
// editSubmission(submissions, 3, 30);
editSubmission(submissions, 0, 100);
console.log("editsubmission test cases");
console.log(submissions);



// Declare a function named findSubmissionByName
// Parameter(s): array, name
function findSubmissionByName(array, name){
    const found = array.find(array => array.name === name);
    return found;
}

//findsubmissionbyname test cases
console.log("findSubmissionByName test case");
console.log(findSubmissionByName(submissions,"Tiffany"));
//console.log(findSubmissionByName(submissions, "Jill"));



//Declare a function named findLowestScore
//Parameter(s): array
function findLowestScore(array){
    let lowestScoreObject = null;
    array.forEach(function(object) {
        let searchScore = object.score;
        if(lowestScoreObject === null || searchScore < lowestScoreObject.score){
            lowestScoreObject = object;
        }
    });
    return lowestScoreObject;
}

//findlowestscore test cases
console.log("findlowestscore test case");
console.log(findLowestScore(submissions));



// Declare a function named findAverageScore
// Parameter(s): array
function findAverageScore(array){
    let totalScores = 0;
    for (const submission of array) {
        totalScores += submission.score;
    }
    totalScores /= array.length;
    return totalScores;
}

//findsveragescore test cases
console.log("findAverageScore test case");
console.log(findAverageScore(submissions));



// Declare a function named filterPassing
// Parameter(s): array
function filterPassing(array){
    const passing = array.filter(passing => passing.passed === true);
    return passing;
}

//filterpassing test cases
console.log("filterPassing test case");
console.log(filterPassing(submissions));



//Declare a function named filter90AndAbove
//Parameter(s): array
function filter90AndAbove(array){
    const passing = array.filter(passing => passing.score >= 90);
    return passing;
}

//filter90andabove test cases
console.log("filter90AndAbove test case");
console.log(filter90AndAbove(submissions));