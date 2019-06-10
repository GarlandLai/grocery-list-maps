$(document).ready(function(){
  $("#formOne").submit(function(event) {
    var items = [];
    var list = ["list1", "list2", "list3", "list4", "list5"]
    var sorted = items.push()
    items.forEach(function(input){
      var userInput = $("#" + input).val();

      console.log(sorted);

      event.preventDefault();
    });

  });
});
