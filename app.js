let grades = [    
    [
        'João',
        [
            [
                'historia',
                [10]
                //encontrar uma maneira de que quando o aluno não receba nenhuma nota, automaticamente receba um 0
            ],
            [
                'matemática',
                [0,2]
            ],
            [
                'geografia',
                [4, 5, 7, 8]
            ]
        ],
    ],
    [
        'Pedro',
        [
            [
                'historia',
                [8,9,8]
            ],
            [
                'matemática',
                [5,7,2]
            ],
            [
                'geografia',
                [10, 5, 3]
            ]
        ]
    ],
    [
        'Maria',
        [
            [
                'historia',
                [1,2,7]
            ],
            [
                'matemática',
                [10,7]
            ],
            [
                'geografia',
                [8, 5, 9]
            ]
        ]
    ]      
];

// grades[0][0] => 'nome do aluno1';
// grades[0][1][1][0] => 'matemática';
// grades[0][1][1][1] => [9,0,2];

// grades[0] => 
// [
//     'nome do aluno1',
//     [
//         [
//             'historia',
//             [10,9,8]
//         ],
//         [
//             'matemática',
//             [9,0,2]
//         ]
//     ],
// ]

// grades[0][1] =>
// [
//     [
//         'historia',
//         [10,9,8]
//     ],
//     [
//         'matemática',
//         [9,0,2]
//     ]
// ],

// grades[0][1][1] =>
// [
//     'matemática',
//     [9,0,2]
// ]


// grades[0][1][1][1] =>
// [9,0,2]

// grades[0][1][1][1][2] => 2

saveYourGrades(9);
saveYourGrades(8);
saveYourGrades(10);

import Student from './Students.js'
import {average, hasPassed} from './average.js'
import {transformStudents} from './transformStudents.js'
import SchoolSubject from './SchoolSubject.js';

// - receber as notas
    // ter uma variável principal
    // converer dadso para instancias de Student
    // dividir notas por alunos e classes
    const students = transformStudents(grades);
    
// - calcular as médias
    const countStudents = students.length

    // loop para cálculo de cada aluno
    for( let i = 0; i < countStudents; i++){
        const student = students[i];

        // loop para cada schoolSubject
        const schoolSubjects = student.getSchoolSubjects()
        const schoolSubjectLength = schoolSubjects.length
        
        for( let j = 0; j < schoolSubjectLength ; j++){
            const schoolSubject = schoolSubjects[j]
            average(schoolSubject.getGrades())
        }

    }




// **Parte do aluno como foco
// - verificar quem passou
    // dividir lista em duas

// //function hasPassed()
    
// - imprimir as notas


// - imprimir quem passou
