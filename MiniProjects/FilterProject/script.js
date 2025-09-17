let students = [
  { id: 1, name: "Lokesh Yegireddy", gender: "Male", branch: "CSE", email: "loki01@example.com", password: "loki@123" },
  { id: 2, name: "Anu Sharma", gender: "Female", branch: "IT", email: "anu02@example.com", password: "anu@321" },
  { id: 3, name: "Ravi Kumar", gender: "Male", branch: "ECE", email: "ravi03@example.com", password: "ravi#456" },
  { id: 4, name: "Sneha Reddy", gender: "Female", branch: "CSE", email: "sneha04@example.com", password: "sneha$789" },
  { id: 5, name: "Vikram Das", gender: "Male", branch: "ME", email: "vikram05@example.com", password: "vikram@555" },
  { id: 6, name: "Priya Singh", gender: "Female", branch: "EEE", email: "priya06@example.com", password: "priya#888" },
  { id: 7, name: "Kiran Patel", gender: "Male", branch: "CSE", email: "kiran07@example.com", password: "kiran@777" },
  { id: 8, name: "Nisha Gupta", gender: "Female", branch: "ECE", email: "nisha08@example.com", password: "nisha@999" },
  { id: 9, name: "Arjun Nair", gender: "Male", branch: "IT", email: "arjun09@example.com", password: "arjun#111" },
  { id: 10, name: "Divya Kapoor", gender: "Female", branch: "CSE", email: "divya10@example.com", password: "divya@222" }
];

function search() {
  const id = document.getElementById("value").value.trim();
  const container = document.getElementById("tableContainer");

  // Clear previous table
  container.innerHTML = "";

  if (id === "") {
    container.innerHTML = "<p>Please enter a student ID.</p>";
    return;
  }

  // Find student by id
  const student = students.find(s => s.id == id);

  if (student) {
    // Create table
    let table = document.createElement("table");
    table.border = "1";

    // Add header
    let thead = `<thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Branch</th>
                    <th>Email</th>
                    <th>Password</th>
                  </tr>
                </thead>`;
    
    // Add row for the student
    let tbody = `<tbody>
                  <tr>
                    <td>${student.id}</td>
                    <td>${student.name}</td>
                    <td>${student.gender}</td>
                    <td>${student.branch}</td>
                    <td>${student.email}</td>
                    <td>${student.password}</td>
                  </tr>
                </tbody>`;

    table.innerHTML = thead + tbody;

    // Append table to container
    container.appendChild(table);
  } else {
    container.innerHTML = "<p>No student found with that ID.</p>";
  }
}
