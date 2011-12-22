/**
 * jQuery Mobile Select
 * @Author: Jochen Vandendriessche <jochen@builtbyrobot.com>
 * @Author URI: http://builtbyrobot.com
 *
 * @TODO:
 *			- create a before / after hook so we can fix some things euhm... before and
 *				after I suppose
**/

(function($){
	"use strict";

	var methods = {
		init : function(config) {
			var options = $.extend({
				autoHide: true,
				defaultOption: "Go to...",
				deviceWidth: 480,
				className: 'mobileselect'
			}, config);
			// we'll use the width of the device, because we stopped browsersniffing
			// a long time ago. Anyway, we want to target _every_ small display
			if (screen.width < options.deviceWidth){
				var _o = $(this), // store the jqyuery object once
						_p = _o.parent(), // get the parent node
						_s = $("<select class=\""+ options.className +"\" />"); // create a filthy select
					_s.appendTo(_p); // append it to the parent

					$("<option />", {
						 "selected": (!$('.current', _o).length) ? 'selected' : '',
						 "value": "",
						 "text": options.defaultOption
					}).appendTo(_s);

					// Populate the dropdown with menu items. If there is an li.current we'll
					// make this one selected
					$('a', _o).each(function() {
						var el = $(this),
						sl = el.parent('li').hasClass('current') ? 'selected' : '';
						$("<option />", {
							"selected": sl,
							"value": el.attr("href"),
							"text": el.text()
						}).appendTo(_s);
					});
					// hide the navigation ul
					if (options.autoHide){
						$(_o).hide();
					}
					// now make it work :-)
					_s.change(function() {
						window.location = $(this).find("option:selected").val();
					});
			}
		}
	};

	$.fn.mobileSelect = function(method){
		if ( methods[method] ) {
					return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
				} else if ( typeof method === 'object' || ! method ) {
					return methods.init.apply( this, arguments );
				} else {
					$.error( 'Method ' + method + ' does not exist on jQuery.mobileselect' );
		}
	};
})(this.jQuery);
