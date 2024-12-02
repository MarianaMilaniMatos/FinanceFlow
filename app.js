
function login() {
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
    .then((userCredential) => {
        // Login bem-sucedido: Redirecionar para a página home.html
        window.location.href = "home.html";
      })
      .catch((error) => {
        // Tratamento de erros
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Erro ao fazer login: ${errorMessage}`);
        console.error('Código de erro:', errorCode);
      });
  }

  function recoverPassword() {
    const email = document.getElementById('email').value; // Obtém o valor do campo de email

    if (!email) {
        alert('Por favor, insira um email válido.');
        return;
    }

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert('E-mail de recuperação enviado com sucesso!');
        })
        .catch((error) => {
            // Tratamento de erros ao enviar o e-mail de recuperação
            if (error.code === 'auth/user-not-found') {
                alert('Usuário não encontrado.');
            } else if (error.code === 'auth/invalid-email') {
                alert('Email inválido. Por favor, insira um endereço de email válido.');
            } else {
                alert('Erro ao enviar o e-mail: ' + error.message);
            }
        });
}


