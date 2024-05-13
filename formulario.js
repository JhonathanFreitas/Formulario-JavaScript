function enviar() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var isValid = true;

    if (name === '') {
      document.getElementById('name-erro').innerText = 'Campo Obrigatorio';
      document.getElementById('name').style.border = '2px solid red';
      isValid = false;
    } else {
      document.getElementById('name-erro').innerText = '';
      document.getElementById('name').style.border = '2px solid #ccc';
    }

    if (email === '') {
      document.getElementById('email-erro').innerText = 'Campo Obrigatorio';
      document.getElementById('email').style.border = '2px solid red';
      isValid = false;
    } else {
      document.getElementById('email-erro').innerText = '';
      document.getElementById('email').style.border = '2px solid #ccc';
    }

    if (message === '') {
      document.getElementById('message-erro').innerText = 'Campo Obrigatorio';
      document.getElementById('message').style.border = '2px solid red';
      isValid = false;
    } else {
      document.getElementById('message-erro').innerText = '';
      document.getElementById('message').style.border = '2px solid #ccc';
    }

    if (isValid) {
      alert('Mensagem enviada com sucesso!');
      document.getElementById('contact-form').reset();
    }
}