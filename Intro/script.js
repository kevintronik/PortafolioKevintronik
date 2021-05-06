/*
PWA
*/
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
}
/*
PWA
*/


function redireccionar(){
  window.location.href="../perfil";
} 
function restart() {
  var store = document.getElementById('loading-overlay').innerHTML;
  document.getElementById('loading-overlay').innerHTML = '';
  document.getElementById('loading-overlay').innerHTML = store;
  document.getElementById('loading-overlay').className = 'loading-overlay'
}

function loaded() {
  document.getElementById('loading-overlay').className = 'loading-overlay loaded';
  

setTimeout ("redireccionar()", 2000);

}