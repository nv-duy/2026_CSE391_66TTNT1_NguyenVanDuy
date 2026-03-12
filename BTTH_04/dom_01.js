let students = [];
let filteredStudents = [];

function xeploai(score) {
    if (score >= 8.5) return "Giỏi";
    else if (score >= 7) {return "Khá";}
    else if (score >= 5) {return "Trung Bình";}
    else {return "Yếu";}
}

function renderTable(){
    let tbody = document.getElementById('tbody');
    tbody.innerHTML = "";

    filteredStudents.forEach((sv, index) => {
        let tr = document.createElement("tr");
        let actualIndex = students.indexOf(sv);

        if (sv.score < 5) {
            tr.classList.add("Low-score");
        }
        tr.innerHTML = `
        <td>${index+1}</td>
        <td>${sv.name}</td>
        <td>${sv.score}</td>
        <td>${xeploai(sv.score)}</td>
        <td><button data-index="${actualIndex}">Xóa</button></td>
        `;

        tbody.appendChild(tr);
    });

    updateStat();
}

function updateStat(){
    let total = students.length;
    let avg = 0;
    if (total > 0) {
        avg = students.reduce((sum, sv) => sum + sv.score, 0) / total;
    }
    document.getElementById("total").innerText = "Số sinh viên: " + total;
    document.getElementById("avg").innerText = "Trung bình điểm: " + avg.toFixed(2);
}

function applyFilters(){
    let keyword = document.getElementById("search").value.trim().toLowerCase();

    filteredStudents = students.filter(sv => sv.name.toLowerCase().includes(keyword));
    renderTable();
}

function addStudents(){
    let name = document.getElementById("name").value.trim();
    let scoreVal = document.getElementById("score").value.trim();
    
    if (!name){
        alert("Họ tên không được để trống!");
        return;
    }

    if (scoreVal === ""){
        alert("Điểm không được để trống!");
        return;
    }
    
    let score = parseFloat(scoreVal);

    if (isNaN(score) || score < 0 || score > 10){
        alert("Điểm phải từ 0 đến 10!");
        return;
    }

    students.push({name:name, score:score});

    applyFilters();
    document.getElementById("name").value = "";
    document.getElementById("score").value = "";
    document.getElementById("name").focus();
}

document.getElementById("btn-search").addEventListener("click", function() {
    applyFilters();
});

document.getElementById("add").onclick = addStudents;

document.getElementById("score").addEventListener("keypress", (e) => {
    if (e.key === "Enter"){
        addStudents();
    }
});

document.getElementById("tbody").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        let index = e.target.dataset.index;
        students.splice(index, 1);
        applyFilters();
    }
});