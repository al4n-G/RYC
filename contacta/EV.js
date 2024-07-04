const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_pw3gv6n';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      alert('Enviado!');
      window.location.href="Buscas-empleo.html";
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
      location.href ="Buscas-empleo.html";
    });
});