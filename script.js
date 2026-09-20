// Attendance Management System

let records = JSON.parse(localStorage.getItem("records")) || [];

function renderRecords() {
  const tbody = document.getElementById("attendanceTableBody");
  tbody.innerHTML = "";
  records.forEach(r => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${r.name}</td><td>${r.status}</td><td>${r.date}</td>`;
    tbody.appendChild(row);
  });
}

function markAttendance() {
  const name = document.getElementById("studentName").value.trim();
  const status = document.getElementById("status").value;

  if (!name) {
    alert("Please enter student name.");
    return;
  }

  const date = new Date().toLocaleDateString();
  records.push({ name, status, date });
  localStorage.setItem("records", JSON.stringify(records));
  document.getElementById("studentName").value = "";
  renderRecords();
}

renderRecords();

// Monthly attendance report feature
function generateReport() {
  const total = records.length;
  const present = records.filter(r => r.status === "Present").length;
  const absent = total - present;
  alert(`Total Records: ${total}\nPresent: ${present}\nAbsent: ${absent}`);
}