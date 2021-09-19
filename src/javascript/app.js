let theme;
let body = document.querySelector('body');

function changeTheme() {

    theme = document.querySelector('input').checked;

    if (theme) {
        body.classList.add("dark-theme")
    }
    else {
        body.classList.remove("dark-theme");
    }
}

changeTheme()