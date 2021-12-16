$(document).ready(function (argument) {
	AOS.init();	
		$({ Counter: 0 }).animate({
		  Counter: $('.Single1').text()
		}, {
		  duration: 5000,
		  easing: 'swing',
		  step: function() {
		    $('.Single1').text(Math.ceil(this.Counter));
		  }
		});
		$({ Counter: 0 }).animate({
		  Counter: $('.Single2').text()
		}, {
		  duration: 5000,
		  easing: 'swing',
		  step: function() {
		    $('.Single2').text(Math.ceil(this.Counter));
		  }
		});
		$({ Counter: 0 }).animate({
		  Counter: $('.Single3').text()
		}, {
		  duration: 5000,
		  easing: 'swing',
		  step: function() {
		    $('.Single3').text(Math.ceil(this.Counter));
		  }
		});
		$({ Counter: 0 }).animate({
		  Counter: $('.Single4').text()
		}, {
		  duration: 5000,
		  easing: 'swing',
		  step: function() {
		    $('.Single4').text(Math.ceil(this.Counter));
		  }
		});
})
// javascript
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

// end script