/**Exercise #4 (sugerencia filter() e includes())
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

// Function to check for common courses
function findCommonCourses(course1, course2) {
  return course1.includes(course2); // Efficiently check if course2 exists in course1
}

// Loop through courses from each student and check for common ones
for (let course1 of student1Courses) {
  for (let course2 of student2Courses) {
    if (findCommonCourses(course1, course2)) {
      console.log(`Common course: ${course1}`);
      break; // Avoid duplicate printing of the same common course
    }
  }
}
