const deptAPI = "https://localhost:7149/Departments";

document.addEventListener("DOMContentLoaded", () => {
    const deptForm = document.getElementById("departmentForm");
    const deptTableBody = document.querySelector("#departmentsTable tbody");
    loadDepartments();

    deptForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const id = document.getElementById("deptId").value;
        const deptName = document.getElementById("deptName").value;
        const facultyHead = document.getElementById("facultyHead").value;
        const deptEmail = document.getElementById("deptEmail").value;

        const departmentData = {
            id: id ? parseInt(id) : 0,
            deptName,
            facultyHead,
            email: deptEmail
        };

        if (!id) {
            await fetch(`${deptAPI}/Add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(departmentData),
            });
        } else {
            await fetch(`${deptAPI}/Update`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(departmentData),
            });
        }

        deptForm.reset();
        document.getElementById("deptId").value = "";
        loadDepartments();
    });

    async function loadDepartments() {
        deptTableBody.innerHTML = "";
        const response = await fetch(`${deptAPI}/GetAll`);
        const departments = await response.json();

        departments.forEach((dept) => {
            const row = document.createElement("tr");
            row.innerHTML = `
            <td>${dept.id}</td>
            <td>${dept.deptName}</td>
            <td>${dept.facultyHead}</td>
            <td>${dept.email}</td>
            <td>
                <button class="btn btn-sm btn-warning" 
                        onclick="editDepartment(${dept.id}, '${dept.deptName}', '${dept.facultyHead}', '${dept.email}')">
                Edit
                </button>
                <button class="btn btn-sm btn-danger" 
                        onclick="deleteDepartment(${dept.id})">
                Delete
                </button>
            </td>
            `;

            deptTableBody.appendChild(row);
        });
    }

    window.editDepartment = (id, deptName, facultyHead, email) => {
        document.getElementById("deptId").value = id;
        document.getElementById("deptName").value = deptName;
        document.getElementById("facultyHead").value = facultyHead;
        document.getElementById("deptEmail").value = email;
    };

    window.deleteDepartment = async (id) => {
        if (!confirm("Are you sure you want to delete this?")) return;
        await fetch(`${deptAPI}/Delete/${id}`, { method: "DELETE" });
        loadDepartments();
    };
});
