const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const studentContainer = document.querySelector("#container")

// function createStudentComponentPass(foo) {
//     return `
//         <div class="student">
//             <h1 class="xx-large passing">${foo.name}</h1>
//             <section class="bordered dashed section--padded">${foo.subject}</section>
//             <aside class="pushRight">${foo.info}</aside>
//             <p>${foo.score}
//         </div>
//     `
// }
// function createStudentComponentFail(foo) {
//     return `
//         <div class="student">
//             <h1 class="xx-large failing">${foo.name}</h1>
//             <section class="bordered dashed section--padded">${foo.subject}</section>
//             <aside class="pushRight">${foo.info}</aside>
//             <p>${foo.score}
//         </div>
//     `
// }


// for (const student of students) {
//     if(student.score >=60) {
//         studentContainer.innerHTML += createStudentComponentPass(student)
//     } else {
//         studentContainer.innerHTML += createStudentComponentFail(student)
//     }
// }

const createStudentComponent1 = (studentObj) => {
    return `
        <div class="student">
            <h1 class = "xx-large ${studentObj.className}">${studentObj.name}</h1>
            <section class="bordered dashed section--padded">${studentObj.subject}</section>
            <aside class="pushRight">${studentObj.info}</aside>
        </div>
    `
}
for (const student of students) {
    studentComponent = ""
    if(student.score >=60) {
        student.className = "passing"
        studentComponent = createStudentComponent1(student)
    } else {
        student.className = "failing"
        studentComponent = createStudentComponent1(student)
    }
    studentContainer.innerHTML += studentComponent
}

