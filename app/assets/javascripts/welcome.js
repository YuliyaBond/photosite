document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    var slides = document.querySelectorAll('.slider__content .item-slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 5000); 
    
    function nextSlide() {
    slides[currentSlide].className = 'item-slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'item-slide showing';
    }
  }
};