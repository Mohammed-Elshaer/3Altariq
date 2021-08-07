$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#panelPrecios [data-toggle="tooltip"]').tooltip({
  animated: 'fade',
  placement: 'bottom',
  html: true
});
// prevent executing script when #demo being clicked
$('ul li ul li a').click(function(e){
  // prevent default behaviour of a
  e.preventDefault();
  // reset any .active-demo to .inactive class
  $('.active-demo').addClass('inactive').removeClass('active-demo');
  // get the value of the href attribute that clicked
  var str = $(this).attr('href');
  // remove the hash from that value
  var target = str.substring(1, str.length);
  // change the target id's class from .inactive to .active-demo
  $('#'+target).addClass('active-demo').removeClass('inactive');
  });
 
// 

function myFunction() {
  document.getElementById("hidden").style.display = "none";

}
function myFunction1() {
  document.getElementById("hidden").style.display = "block";
}

var selector = 'li a';

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
});



//input serch
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("filter");
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("my-candidates");
    
    li = document.getElementsByClassName("candidates-titel");
  // console.log (li)
    for (i = 0; i < li.length; i++) {
      
      p = li[i].getElementsByTagName("p")[0];
        txtValue = p.textContent || p.innerText;
        
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {

           ul[i].style.display = "none";
        }
    }
  }