const API_URL = "http://localhost:3000/api/users";

// Função para mostrar mensagens ao usuário
const showMessage = (message, isError = true) => {
  const messageDiv = document.getElementById("message");
  messageDiv.className = isError ? "error" : "success";
  messageDiv.textContent = message;
  messageDiv.style.display = "block";

  setTimeout(() => {
    messageDiv.style.display = "none";
  }, 3000);
};

// Registro de usuário
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
      // Mensagem de sucesso
      showMessage(data.message, false);
    } else {
      // Mensagem de erro específica do backend
      showMessage(data.error || "Ocorreu um erro durante o registro.");
    }
  } catch (error) {
    // Mensagem de erro em caso de falha no fetch ou backend indisponível
    showMessage("Ocorreu um erro durante o registro.");
  }
});

// Login de usuário
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
      // Usar a mensagem da API no alert
      alert(data.message); // Exibe o sucesso no login
      showMessage(data.message, false);
    } else {
      // Mensagem de erro específica do backend
      showMessage(data.error || "Falha ao realizar o login.");
    }
  } catch (error) {
    // Mensagem de erro em caso de falha no fetch ou backend indisponível
    showMessage("Ocorreu um erro durante o login.");
  }
});
