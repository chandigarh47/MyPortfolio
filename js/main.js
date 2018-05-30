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

  var letterDelay=25; // Delay between individual letter fade-ins.
var letterSpeed=250; // How quickly does each letter fade in?


$(document).ready(function() {

  // Store the html as a string.
  var text=$('.paragraph').html();

  // Break the characters up into an array.
  var letters=[];
  for (var i=0;i<text.length;i++) {
    letters.push(text[i]);
  }

  // Clear the current html
  $('.paragraph').html('');

  // Make sure the paragraph element is visible
  $('.paragraph').css({display:'block'})

  // Iterate through the just-created letters array
  for (var i=0;i<letters.length;i++) {

    // Create the element
    var el=$("<div class='letter'>"+letters[i]+"</div>");
    el.css({
      display:'inline',
      float:'left',
      position:'relative',
      opacity:0,
      top:'-5px'
    })

    // Trigger the fade-in animation
    enterLetter(el,i*letterDelay);

    // Place it in the paragraph element
    $('.paragraph').append(el);

    // Force spaces
    if (letters[i]===' ' && i!==0) {
      el.append("&nbsp;");
    }
  }
})

// Right now the animation just pulls the letter down and
// makes it fully visible. But this could be any animation
// you please.
function enterLetter(letter,delay) {
  setTimeout(function() {
    letter.animate({
      opacity:1,
      top:0
    }, {duration:letterSpeed, queue:false})
  },delay)
}
