
function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "dudu" && pass === "fer111984") {
    window.location.href = "painel.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}
