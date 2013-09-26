$(document).ready (function(){
  function addItem(){
  	if($("#input").val() != ''){
      $('#todos').append("<li>" + $("#input").val() + "</li>");
      $('#input').val('');
    }
  };
  $('#addTodo').click (addItem);
  $('#input').keyup(function(e){
  	//enable the ability to hit enter instead of button
    if(e.keyCode == 13){
      addItem();
    }
  });
  $('#todos').on('click', 'li', function(){
    $(this).hide("slow");
  });
});