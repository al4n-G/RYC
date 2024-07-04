const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_h5zui0c';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar';
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Nos contactaremos pronto con usted",
        showConfirmButton: false,
        timer: 6500
      });
      window.location.href="index.html";   
    }, (err) => {
      btn.value = 'Enviar';
      alert(JSON.stringify(err));
      window.location.href="index.html";
    });
});