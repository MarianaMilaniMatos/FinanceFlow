function register() {
    // Obtém os valores dos campos de entrada
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Validações adicionais, se necessário
    if (password.length < 6) {
      alert('A senha deve ter pelo menos 6 dígitos.');
      return;
    }
  
    // Chama o Firebase Authentication para registrar o usuário
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Cadastro bem-sucedido
        alert('Usuário cadastrado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página de login
      })
      .catch((error) => {
        // Tratamento de erros
        const errorCode = error.code;
        const errorMessage = error.message;
  
        // Personalizar mensagens de erro comuns
        if (errorCode === 'auth/email-already-in-use') {
          alert('Este e-mail já está em uso. Tente outro.');
        } else if (errorCode === 'auth/invalid-email') {
          alert('E-mail inválido. Verifique o endereço de e-mail.');
        } else {
          alert(`Erro ao cadastrar usuário: ${errorMessage}`);
        }
  
        console.error('Código de erro:', errorCode);
      });
  }
  