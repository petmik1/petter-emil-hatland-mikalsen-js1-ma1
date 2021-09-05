const cats = [{
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

// q1

const cat = {
    complain: "Meow!",
}

// q2

const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

// q3

heading.style.fontSize = "2em";

// q4

heading.className = "subheading";

// q5

const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}
// q6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;

// q7

function printList(list) {
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].name)

    }
}

printList(cats);

// q8

function createCats(cats) {
    let html = "";
    for (let i = 0; i < cats.length; i++) {
        let ageCheck = "Age unkown"


        if (cats[i].age) {
            ageCheck = cats[i].age;
        }

        html += `<div>
                <h5>${cats[i].name}</h5>
                <p>Age: ${ageCheck}</p>
            </div>
    `
    }

    return html;
}

const newHTML = createCats(cats);

const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHTML;