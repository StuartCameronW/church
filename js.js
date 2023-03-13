// Theme

const root = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';

root.className = currentTheme;

document.querySelector('.theme').addEventListener('click', toggleTheme);

function toggleTheme() {
    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    localStorage.setItem('theme', newTheme);
}

// Theme

// Signup Btn

const signup = document.querySelector('.signup');
const divsign = document.querySelector('.divsign');
const divflex = document.querySelector('.divflex');

signup.addEventListener('click', input);

function input() {
        
    divsign.innerHTML = '<input type="email" class="input" placeholder="Email">';
    divsign.innerHTML += '<input type="email" class="input2" placeholder="Confirm Email">';
    divsign.innerHTML += '<button class="enter">Enter</button>';

    const input = document.querySelector('.input');
    const input2 = document.querySelector('.input2');
    const enter = document.querySelector('.enter');
        

    console.log(input);
    setTimeout(function() {
        input.style.opacity = 1;
        input2.style.opacity = 1;
        enter.style.opacity = 1;
        }, 100);
}

// Signup Btn