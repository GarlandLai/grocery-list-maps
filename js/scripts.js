$(document).ready(function(){
  $("#grocery").submit(function(event) {

    var items = ["list1", "list2", "list3"];

  items.forEach(function(item){
    // var sorted = items.sort();
    var userInput = $("#" + item).val();
    $("." + item).text(userInput.toUpperCase());
    });

    $(".output").show();
    event.preventDefault();
  });

});
