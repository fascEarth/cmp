$(document).ready(function(){
  $('.tabs').tabs();
  $("select").formSelect();
  $('#cintanceFooter').show();
  $('#surfacecommonFooter').hide();

  
      var mainPage = "instance";
      var thisPage = "cinstance";
      //$('.collapsible-body').css("display","none"); 
  $('#'+mainPage+"bodyMain").css("display","block");
  $('#'+mainPage+"bodyMain").addClass("active");

      $('.csidenavtitles').removeClass("active");
      $('.csidenavtitles a').removeClass("active");
      $('#'+mainPage+"Main").addClass("active");
      $('#'+mainPage+thisPage+"Main").addClass("active");
      $('#'+mainPage+thisPage+"Main a").addClass("active");
  
  


});

$(".cloud-server-carousel").owlCarousel({
  loop: false, 
  margin: 10, 
  nav: true, 
  responsive: {
    0: {
      items: 1 
    },
    600: {
      items: 3 
    },
    1000: {
      items: 3 
    }
  }
});

$(".owl-carousel").owlCarousel({
  loop: false, 
  margin: 10, 
  nav: true, 
  responsive: {
    0: {
      items: 1 
    },
    600: {
      items: 3 
    },
    1000: {
      items: 5 
    }
  }
});


(function () {
  "use strict";
  var jQueryPlugin = (window.jQueryPlugin = function (ident, func) {
    return function (arg) {
      if (this.length > 1) {
        this.each(function () {
          var $this = $(this);

          if (!$this.data(ident)) {
            $this.data(ident, func($this, arg));
          }
        });

        return this;
      } else if (this.length === 1) {
        if (!this.data(ident)) {
          this.data(ident, func(this, arg));
        }

        return this.data(ident);
      }
    };
  });

  function Guantity($root) {
    const element = $root;
    const quantity = $root.first("data-quantity");
    const quantity_target = $root.find("[data-quantity-target]");
    const quantity_minus = $root.find("[data-quantity-minus]");
    const quantity_plus = $root.find("[data-quantity-plus]");
    var quantity_ = quantity_target.val();
    $(quantity_minus).click(function () {
      quantity_target.val(--quantity_);
    });
    $(quantity_plus).click(function () {
      quantity_target.val(++quantity_);
    });
  }
  $.fn.Guantity = jQueryPlugin("Guantity", Guantity);
  $("[data-quantity]").Guantity();
})();