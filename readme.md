jQuery mobile select
====================

What's it all about?
--------------------

It's simple as abc. If you have some kind of navigation that you want to replace with 
a dropdown for mobile devices (read: screenwidth less than 400 pixels) then you've 
found what you're looking for.

How to use?
-----------

Download the jquery.mobileselect.js. Removing comments and minifying it will get you bonus points!

To use it:

    $(document).ready(function(){
  
      // your navigation ul selector
      $('#nav-main ul').mobileSelect();
  
    })

You can optionally change these default parameters:

		$(document).ready(function(){

		  // your navigation ul selector
		  $('#nav-main ul').mobileSelect({
				deviceWidth: 480,
      	autoHide: true	
			});
			
		})

And that's it that's all.

However...
----------

There are still some things that need to be taken care of:

*  create a before / after hook so we can fix some things euhm... before and after I suppose