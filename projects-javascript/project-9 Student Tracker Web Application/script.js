function addStudent() {
    const name = document.getElementById('name-input').value;
    const age = document.getElementById('age-input').value;
    const gender = document.getElementById('gender-input').value;

    if (name && age && gender) {
        const studentList = document.getElementById('student-list');
        const li = document.createElement('li');
        li.textContent = `${name} - ${age} years old (${gender})`;
        studentList.appendChild(li);
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function clearForm() {
    document.getElementById('name-input').value = '';
    document.getElementById('age-input').value = '';
    document.getElementById('gender-input').selectedIndex = 0;
}
