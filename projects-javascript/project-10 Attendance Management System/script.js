function markAttendance() {
    const subjectName = document.getElementById('subject-name').value;
    const studentName = document.getElementById('student-name').value;
    const className = document.getElementById('class-name').value;
    const date = document.getElementById('date').value;

    if (subjectName && studentName && className && date) {
        const attendanceTable = document.getElementById('attendance-body');
        const newRow = attendanceTable.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.textContent = subjectName;
        cell2.textContent = studentName;
        cell3.textContent = className;
        cell4.textContent = date;

        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function clearForm() {
    document.getElementById('subject-name').value = '';
    document.getElementById('student-name').value = '';
    document.getElementById('class-name').value = '';
    document.getElementById('date').value = '';
}

function toggleMode() {
    const body = document.body;
    const modeIcon = document.getElementById('mode-icon');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.style.backgroundColor = '#fff'; // Set background color for light mode
        modeIcon.textContent = '🌙';
    } else {
        body.classList.add('dark-mode');
        body.style.backgroundColor = '#000'; // Set background color for dark mode
        modeIcon.textContent = '☀️';
    }
}
