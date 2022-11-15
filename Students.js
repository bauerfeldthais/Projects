export default class Student{
	//nome, idade, gênero, ano,
	/**
	 * Student's name
	 * 
	 * @type {string}
	 */
	name;
	
	/**
	 * Student's age
	 * 
	 * @type {number}
	 */
	age;

	/**
	 * Student's gender
	 * 
	 * @type {string}
	 */
	gender;

	/**
	 * Student's grade
	 * 
	 * @type {number}
	 */
	grade;


    schoolSubjects = [];

	/**
	 * Subjects that the student are enrol with.
	 * 
	 * @returns {string[]}
	 */
	getSchoolSubjects(){
		//logic to get subjects enrolled with.
		// const subjects = ['Math', 'History', 'English', 'Portuguese', 'Biology', 'Chemistry', 'Geography']
		return this.schoolSubjects 
	};
	// classroomEnrolled(){
	// 	//logic to get year enrolled with
	// 	return grade
	// };

}