(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();




 
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems, {
        direction: 'up'
      });
    });
         
    
    
    $(document).ready(function(){
      $('.fixed-action-btn').floatingActionButton();
    });
    
    
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.tooltipped');
      var instances = M.Tooltip.init(elems, options);
    });
    
    // Or with jQuery
    
    $(document).ready(function(){
      $('.tooltipped').tooltip();
    });
          

  }); // end of document ready
})(jQuery); // end of jQuery name space
