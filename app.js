

var email = document.getElementById('email');
var password = document.getElementById('password');
var login_container = document.getElementById("login_container");
var home_container = document.getElementById("home_container");
var user_email = document.getElementById("user_email");
var note = document.getElementById("note");

function loginUser() {
    if (!email.value || !password.value)
        return alert("Please enter your email or password");
    localStorage.setItem("email", email.value);
    checkIsUserLoggedin();
}

function checkIsUserLoggedin() {
    var email = localStorage.getItem("email");
    if (email) {
        login_container.style.display = "none";
        home_container.style.display = "block";
        user_email.innerText = email;
        displayUserNotes();
    } else {
        login_container.style.display = "block";
        home_container.style.display = "none";
    }
}

checkIsUserLoggedin();

function logout() {
    localStorage.removeItem("email");
    checkIsUserLoggedin();
}

function submitNote() {
    var email = localStorage.getItem("email");
    var obj = {
        email: email,
        note: note.value,
    };
    saveValueToLocalStorage(obj);
    note.value = "";
}

function saveValueToLocalStorage(obj) {
    var notes = localStorage.getItem("notes");
    if (notes) {
        notes = JSON.parse(notes);
        notes.push(obj);
        localStorage.setItem("notes", JSON.stringify(notes));
    } else {
        notes = [obj];
        localStorage.setItem("notes", JSON.stringify(notes));
    }
    displayUserNotes();
}

function displayUserNotes() {
    var notes = localStorage.getItem("notes");
    var list = document.getElementById("list");
    var currentUserEmail = localStorage.getItem("email");
    list.innerHTML = "";
    if (notes) {
        notes = JSON.parse(notes);
        notes.forEach(function (data, ind) {
            if (data.email === currentUserEmail) {
                var liElement = `
                    <li class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-4">
                        <p class="font-medium text-gray-900 dark:text-gray-100">${data.note}</p>
                        <p class="text-gray-600 dark:text-gray-400">${data.email}</p>
                    </li>`;
                list.innerHTML += liElement;
            }
        });
    }
}

displayUserNotes();
