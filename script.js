window.addEventListener( 'load' , function () {
    new Glider(document.querySelector('.carousel-lista'), {
        
            slidesToShow: 4,
            slidesToScroll: 4,
            draggable: true,
            dots: '.carousel--indicadores',
            arrows: {
              prev: '.carousel-anterior',
              next: '.carousel-siguiente'
            }
    });
});