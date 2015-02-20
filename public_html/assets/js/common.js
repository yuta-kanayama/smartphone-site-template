;(function($, window, document, undefined){
"use strict";

$(function(){

// Android Fix: viewport" content="width=320px
if(navigator.userAgent.indexOf('Android') > 0){
  $('html').css('zoom', $(window).width()/320);
}





});
})(jQuery, this, this.document);