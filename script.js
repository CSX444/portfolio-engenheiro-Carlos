// Animação de fade-in ao rolar
const elements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

elements.forEach(element => {
  observer.observe(element);
});

// Validação do Formulário de Contato
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('message').value.trim();
    const msg = document.getElementById('form-message');

    if (nome === '' || email === '' || mensagem === '') {
        msg.style.color = 'red';
        msg.innerText = 'Por favor, preencha todos os campos.';
    } else if (!email.includes('@') || !email.includes('.')) {
        msg.style.color = 'red';
        msg.innerText = 'Por favor, insira um email válido.';
    } else {
        msg.style.color = 'green';
        msg.innerText = 'Mensagem enviada com sucesso!';
        // Aqui você pode futuramente integrar com APIs de envio, se quiser.
        document.getElementById('contact-form').reset();
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('light-mode');
}
