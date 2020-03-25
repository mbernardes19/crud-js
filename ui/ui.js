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

function createStudent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, key) => {
        body[key] = value;
    })

    fetch('http://localhost:3000/student', {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(body)
    })
        .then(r => location.reload());
}

function deleteStudent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, key) => {
        body[key] = value;
    })

    fetch(`http://localhost:3000/student/${body.name}`, {method: 'DELETE',})
        .then(r => location.reload());
}

function updateStudent(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const body = {};
    formData.forEach((value, key) => {
        body[key] = value;
    })

    fetch(`http://localhost:3000/student/${body.name}`, {
        headers: {'Content-Type': 'application/json'},
        method: 'PUT',
        body: JSON.stringify({name: body.newName})
    })
        .then(r => location.reload());
}
