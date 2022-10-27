let grades = [    
    [
        'João',
        [
            [
                'historia',
                [10]
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

// - receber as notas

    
// - calcular as médias
average()


// - verificar quem passou
// //function hasPassed()
    
// - imprimir as notas


// - imprimir quem passou
