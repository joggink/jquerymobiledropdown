/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
 * @TODO:
 *			- create a before / after hook so we can fix some things euhm... before and
 *				after I suppose
**/
(function(b){var c={init:function(a){a=b.extend({autoHide:!0,defaultOption:"Go to...",deviceWidth:480,appendTo:"",className:"mobileselect",useWindowWidth:!1},a);if((a.useWindowWidth===!0?b(window).width():screen.width)<a.deviceWidth){var d=b(this),c=a.appendTo.length?b(a.appendTo):d.parent(),e=b('<select class="'+a.className+'" />');e.appendTo(c);b("<option />",{selected:!b(".current",d).length?"selected":!1,value:"",text:a.defaultOption}).appendTo(e);b("a",d).each(function(){var a=b(this),c=a.parent("li").hasClass("current")||
a.hasClass("current")?"selected":!1;b("<option />",{selected:c,value:a.attr("href"),text:a.text()}).appendTo(e)});a.autoHide&&b(d).hide();e.change(function(){window.location=b(this).find("option:selected").val()})}}};b.fn.mobileSelect=function(a){if(c[a])return c[a].apply(this,Array.prototype.slice.call(arguments,1));else if(typeof a==="object"||!a)return c.init.apply(this,arguments);else b.error("Method "+a+" does not exist on jQuery.mobileselect")}})(this.jQuery);
