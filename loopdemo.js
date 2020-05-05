for (var i = 0; i < 10; i++) {
  console.log("Iteration #", i);
}

// Looping through an array
var students = ["Don", "Jacob", "Khyle", "Larry", "Steve"];

for (var i = 0; i < students.length; i++)
{
	console.log(students[i]);
}

// more students
var moreStudents = ["Mike", "Ralph", "Bobby", "Ronnie", "Ricky"];
// grades for those students
var grades = [90, 95, 75, 80, 88];

for(var i = 0; i < moreStudents.length; i++)
{
	console.log("-------------");
	if(grades[i] >= 90)
		var grade = "A";
	else if(grades[i] >= 80)
		var grade = "B";
	else if(grades[i] >= 70)
		var grade = "C";
	else if(grades[i] >= 60)
		var grade = "D";
	else
		var grade = "F";
	
	console.log(`Name: ${moreStudents[i]} \t\t Letter Grade: ${grade}`);
	console.log("-------------");
}	
