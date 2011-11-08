/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
 * @TODO:
 *			- create a before / after hook so we can fix some things euhm... before and 
 *				after I suppose
**/(function(a){"use strict";var b={init:function(b){var c=a.extend({autoHide:!0,defaultOption:"Go to...",deviceWidth:480},b);if(screen.width<c.deviceWidth){var d=a(this),e=d.parent(),f=a("<select />");f.appendTo(e);a("<option />",{selected:a(".current",d).length?"":"selected",value:"",text:c.defaultOption}).appendTo(f);a("a",d).each(function(){var b=a(this),c=b.parent("li").hasClass("current")?"selected":"";a("<option />",{selected:c,value:b.attr("href"),text:b.text()}).appendTo(f)});c.autoHide&&a(d).hide();f.change(function(){window.location=a(this).find("option:selected").val()})}}};a.fn.mobileSelect=function(c){if(b[c])return b[c].apply(this,Array.prototype.slice.call(arguments,1));if(typeof c=="object"||!c)return b.init.apply(this,arguments);a.error("Method "+c+" does not exist on jQuery.mobileselect")}})(this.jQuery);