var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectorButtons = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNavigation = document.querySelector('.mobile-nav');

for (var i = 0 ; i < selectorButtons.length ; i++){
    selectorButtons[i].addEventListener('click', function(){
        // backdrop.style.display = "block";
        // modal.style.display = "block";
        backdrop.style.display = "block";
        modal.classList.add('open');
        setTimeout(() => {
          backdrop.classList.add('open');
        }, 10);
    })
}

backdrop.addEventListener("click", function(){
    mobileNavigation.classList.remove('open');
    // mobileNavigation.style.display = 'none';
    closeModal();
});

if(modalNoButton){
    modalNoButton.addEventListener("click", closeModal)
}

function closeModal(){
    if (modal) {
        modal.classList.remove('open');
        // modal.style.display = 'none';
      }
      backdrop.classList.remove('open');
      setTimeout(() => {
        backdrop.style.display = 'none';
      }, 200);
}

toggleButton.addEventListener("click", function(){
  mobileNavigation.classList.add('open');
  backdrop.style.display = "block";
  setTimeout(() => {
  backdrop.classList.add('open');
  }, 10);
  // mobileNavigation.style.display = "block";
})



