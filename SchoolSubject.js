export default class SchoolSubject {
    grades;

    name;

    setGrades(grades ){
        this.grades = grades
    }

    getGrades(){
        return this.grades
    }

    pushGrade(grade){
        this.grades.push(grade)
    }

}