
const allStudents = fetch('http://localhost:3000/student')
    .then(res => res.json())
    .then(data => {
        data.forEach((student) => {
            const newNode = document.createElement('p');
            newNode.textContent += student.name + "\n";
            content.appendChild(newNode);
        })
    });

const header = document.querySelector('#title');
header.textContent = 'Students';
const content = document.querySelector('#content');
