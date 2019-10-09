var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var nextButton = document.querySelector('.next__step-button');
var previousButton = document.querySelector('.previous__step-button');
var stepTwo = document.querySelector('.signup__step-2');

/*var slideIn = function() {
  nextButton.addEventListener('click', function(event) {
    stepTwo.classList.remove('slide-out');
    stepTwo.classList.add('slide-in');
  });
}

var slideOut = function() {
  previousButton.addEventListener('click', function(event) {
    stepTwo.classList.remove('slide-in');
    stepTwo.classList.add('slide-out');
  });
}

if (nextButton && previousButton) {
  slideIn();
  slideOut();
}
