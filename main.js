let $ = require('jquery');

var f_btn = document.getElementById('f')
var c_btn = document.getElementById('c')

f_btn.addEventListener("click", function() {

  $.getJSON('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/ee00595d4e6b02d361dc7cd67a8f4070/28.541303,-81.381219').
  then(function(response) {
    var temp = response.currently.temperature
    $('#temp').html(temp)
  })

  function color (tempy) {
    var tempy = (temp)
    if(tempy > 80) {
      return 'red'
    } else if(tempy < 60) {
      return 'blue'
    }
  }

$('#colorChange').css('background-color', color)

})

c_btn.addEventListener("click", function() {

  $.getJSON('http://tiy-orl-proxy.herokuapp.com/darksky/forecast/ee00595d4e6b02d361dc7cd67a8f4070/28.541303,-81.381219').
  then(function(response) {
    var temp = response.currently.temperature
    $('#temp').html(temp)
  })

  function color (tempy) {
    var tempy = (temp)
    if(tempy > 80) {
      return 'red'
    } else if(tempy < 60) {
      return 'blue'
    }
  }

$('#colorChange').css('background-color', color)

})
