$(document).ready(function(){
  $("form").on('submit', function(event){
      window.alert("Your form has been submitted");
    }
      event.preventDefault();
});

