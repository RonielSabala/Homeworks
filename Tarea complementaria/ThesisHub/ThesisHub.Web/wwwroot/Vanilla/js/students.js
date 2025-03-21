const studentAPI = "https://localhost:7149/Students";

document.addEventListener("DOMContentLoaded", () => {
    const studentForm = document.getElementById("studentForm");
    const studentTableBody = document.querySelector("#studentsTable tbody");
    loadStudents();

    studentForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const id = document.getElementById("studentId").value;
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const studentEmail = document.getElementById("studentEmail").value;
        const phone = document.getElementById("phone").value;
        const departmentId = parseInt(document.getElementById("departmentId").value);

        const studentData = {
            id: id ? parseInt(id) : 0,
            firstName,
            lastName,
            email: studentEmail,
            phone,
            departmentId
        };

        if (!id) {
            await fetch(`${studentAPI}/Add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(studentData),
            });
        } else {
            await fetch(`${studentAPI}/Update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(studentData),
            });
        }

        studentForm.reset();
        document.getElementById("studentId").value = "";
        loadStudents();
    });

    async function loadStudents() {
        studentTableBody.innerHTML = "";
        const response = await fetch(`${studentAPI}/GetAll`);
        const students = await response.json();

        students.forEach((stu) => {
            const row = document.createElement("tr");
            row.innerHTML = `
              <td>${stu.id}</td>
              <td>${stu.firstName}</td>
              <td>${stu.lastName}</td>
              <td>${stu.email}</td>
              <td>${stu.phone}</td>
              <td>${stu.departmentId}</td>
              <td>
                <button class="btn btn-sm btn-warning"
                        onclick="editStudent(${stu.id}, '${stu.firstName}', '${stu.lastName}', '${stu.email}', '${stu.phone}', ${stu.departmentId})">
                  Edit
                </button>
                <button class="btn btn-sm btn-danger"
                        onclick="deleteStudent(${stu.id})">
                  Delete
                </button>
              </td>
            `;

            studentTableBody.appendChild(row);
        });
    }

    window.editStudent = (id, firstName, lastName, email, phone, departmentId) => {
        document.getElementById("studentId").value = id;
        document.getElementById("firstName").value = firstName;
        document.getElementById("lastName").value = lastName;
        document.getElementById("studentEmail").value = email;
        document.getElementById("phone").value = phone;
        document.getElementById("departmentId").value = departmentId;
    };

    window.deleteStudent = async (id) => {
        if (!confirm("Are you sure you want to delete this?")) return;

        await fetch(`${studentAPI}/Delete/${id}`, {
            method: "DELETE",
        });

        loadStudents();
    };
});
