/*  Galery DIX
19.04.2017 v 0.1
mail@itdix.net
*/


jQuery(document).ready(function(){
  //EVENT IMAGE
  jQuery("a.gd").gdix();

}) ;
//************************************************************

//
(function(jQuery){
  jQuery.fn.gdix = function (dixip_get){
    var _selector=this.selector;
    var _HTML='';
    //console.log(this); // jQuery
     //console.log(this.length); // число элементов
    jQuery(this).click(function(){
      //************************************************************
      _HTML='<div class="bgGDIX"><div class="winGD"><div class="close"></div><div class="image">';
      _HTML+='<img src="'+jQuery(this).attr('href')+'" >';
      _HTML+='</div></div></div>';
     jQuery('body').append(_HTML);
     jQuery('.bgGDIX .close').click(function(){
        jQuery('.bgGDIX').detach();
      }) ;

      return false;  //не переходить по ссылке

    });


//************************************************************
    };
})(jQuery);



