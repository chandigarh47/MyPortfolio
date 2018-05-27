console.log("connected");
let state = {
  styleCounter: 0
};

(function($) {
    $.fn.goTo = function() {
        $('html, body').animate({
            scrollTop: $(this).offset().top + 'px'
        }, 'slow');
        return this; // for chaining...
    }
})(jQuery);
// from https://stackoverflow.com/questions/4801655/how-to-go-to-a-specific-element-on-page

$(document).on('ready', function () {
  console.log("ready");




  $('.divButtContact').on('click', function () {
    $('#contact').goTo();
    $('.menuContent').removeClass( "show" );
  })
  $('.divButtPortfolio').on('click', function () {
    $('#portfolio').goTo();
    $('.menuContent').removeClass( "show" );
  })
  $('.divButtSummary').on('click', function () {
    $('#summary').goTo();
    $('.menuContent').removeClass( "show" );
  })
  $('.divButtWelcome').on('click', function () {
    $('#welcome').goTo();
    $('.menuContent').removeClass( "show" );
  })
  $('.divButtStyle').on('click', function () {
    // let styles = ["css/style.css", "css/freshStyle.css", "css/darkStyle.css"]


    state.styleCounter = state.styleCounter + 1;
    if (state.styleCounter >= styles.length) {
      state.styleCounter = 0
    }

    $('.menuContent').removeClass( "show" );

  })

    $('#divButtMenu').on('click', function () {
      console.log("menu click");
      $('.menuContent').toggleClass( "show" );
    })


  });
