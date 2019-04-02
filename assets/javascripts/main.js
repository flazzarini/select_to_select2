/*
 Select To Select2 Plugin Main.
 */

(function($){
  // After ajax call replace select
  $(window).ajaxComplete(function() {
    replaceAllSelect2();
  });

  // For final load of the page replace select
  $(window).load(function() {
    replaceAllSelect2();
  });
}(jQuery));

function replaceAllSelect2(){
  var elements = document.getElementsByTagName("select");

  for (i = 0; i < elements.length; i++) {
    console.log("Element: ", elements[i]);

    // For not woroking 「width:resolve」
    if(elements[i].id == 'year'
      || elements[i].id == 'month'
      || elements[i].id == 'columns'
      || elements[i].id == 'settings_issuequery_query_id'
      || elements[i].id == 'block-select'){

      $("#" + elements[i].id).select2({
        width:"175px",
        placeholder: "",
        allowClear: true
      });
    }
    else {
      // For All Pages
      $("#" + elements[i].id).select2({
        width:"resolve",
        placeholder: "",
        allowClear: true
      });
    }

  }
}
