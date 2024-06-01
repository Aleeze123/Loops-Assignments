/*                 Creating a Lesson Plan(Using for loop )

1. Create a blank array: Start by setting up an empty array named myWork that will hold 
objects.
2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. In each iteration:
o Create an object representing a lesson.
o Each lesson should have a name property, which is a string like "Lesson 1", 
"Lesson 2", etc.
o Each lesson should also have a status property, which alternates between true
and false. This means "Lesson 1" will have status: true, "Lesson 2" will have 
status: false, and so on.
3. Add the lesson to the array: Push each lesson object into the myWork array.
4. Print the result: Finally, log the myWork array to the console to see the list of lessons.

Hints:
• Use a ternary operator to set the status property based on whether the lesson number is 
odd or even.
• The modulo operator % can help determine if a number is even or odd*/


let myWork:{
    name:string;
    status:boolean
}[]=[]

    for(let i=1;i<=10;i++){
        let lesson={
            name:`Lesson ${i}`,
            status: i % 2 ===1
        };   
        myWork.push(lesson);
    }
    console.log(myWork);
    
   
