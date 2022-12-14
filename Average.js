
// aqui iria inserir de maneira manual

/**
 * 
 * @param {number[]} grades 
 * @returns {number}
 */
export function average(grades){ 
	if(grades.length == 0)
        return 0;
    
    let result = 0
	for (let i = 0; i < grades.length; i++){
		result += grades[i]
	}
// retornaria já automaticamente a média
	return result / grades.length
}

export function hasPassed() {
    //faria a avaliação de o aluno foi aprovado ou não
    let calculateAverage = average(grades);
    if (calculateAverage < 7) {
        console.log(`Reprovado! Sua média foi de ` +  calculateAverage);
    } else {
        console.log(`Aprovado! Sua média foi de ` + calculateAverage);
    }
}

/**
 * Get grades from a student by materia
 * 
 * @param {Student} student
 * @param {string} name
 * 
 * @return {number} 
 */
export function extractGradesByMateria(student, name){}

