const API_URL = "http://localhost:3000/api/users";


const showMessage = (message, isError = true) => {
  const messageDiv = document.getElementById("message");
  messageDiv.className = isError ? "error" : "success";
  messageDiv.textContent = message;
  messageDiv.style.display = "block";

  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 3000);
};


document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("registerUsername").value;
  const password = document.getElementById("registerPassword").value;

  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {

      showMessage(data.message, false);
    } else {
 
      showMessage(data.error || "Ocorreu um erro durante o registro.");
    }
  } catch (error) {
   
    showMessage("Ocorreu um erro durante o registro.");
  }
});


document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      
      alert(data.message); 
      showMessage(data.message, false);
    } else {
      
      showMessage(data.error || "Falha ao realizar o login.");
    }
  } catch (error) {
   
    showMessage("Ocorreu um erro durante o login.");
  }
});

document.getElementById('registerPassword').addEventListener('input', (e) => {
  const password = e.target.value;


  const minLength = document.getElementById('minLength');
  const uppercase = document.getElementById('uppercase');
  const number = document.getElementById('number');


  if (password.length >= 8) {
    minLength.classList.add('valid');
    minLength.classList.remove('invalid');
  } else {
    minLength.classList.add('invalid');
    minLength.classList.remove('valid');
  }

 
  if (/[A-Z]/.test(password)) {
    uppercase.classList.add('valid');
    uppercase.classList.remove('invalid');
  } else {
    uppercase.classList.add('invalid');
    uppercase.classList.remove('valid');
  }

  
  if (/\d/.test(password)) {
    number.classList.add('valid');
    number.classList.remove('invalid');
  } else {
    number.classList.add('invalid');
    number.classList.remove('valid');
  }
});

