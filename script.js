
function showLogin() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('login-form').classList.remove('hidden');
    document.getElementById('signup-form').classList.add('hidden');
}

function showSignup() {
    document.getElementById('auth-section').classList.remove('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
    document.getElementById('login-form').classList.add('hidden');
}

function login() {
    alert('Login successful!');
    document.getElementById('auth-section').classList.add('hidden');
    document.getElementById('builder-section').classList.remove('hidden');
}

function signup() {
    alert('Signup successful! Please log in.');
    showLogin();
}

function addSection(sectionName) {
    const builderArea = document.getElementById('portfolio-builder');
    const newSection = document.createElement('div');
    newSection.classList.add('section');
    newSection.innerHTML = `<h3>${sectionName}</h3><p>Content for ${sectionName}...</p>`;
    builderArea.appendChild(newSection);
}

function previewPortfolio() {
    alert('Preview your portfolio!');
}
