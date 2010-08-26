/*global jQuery:false */

function Starfield(options) {

	var starfield = {};

	//Merge default settings with settings that have been passed in
	var settings = jQuery.extend({
		context: null,  //Canvas context
		height : 800,   //Height of the context
		width  : 800,   //Width of the context
		focal_length : 50,
		max_z : 600,
		star_count : 100,
		speed : 5,
		star_width : 8
	},
	options);
	
	var origin = {};
	origin.x = Math.floor(settings.width / 2);
	origin.y = Math.floor(settings.height / 2);

	var stars = [];

	for (var i = 0; i < settings.star_count; i++) {
		stars[i] = {};
		stars[i].x = -origin.x + Math.floor(Math.random() * settings.width);
		stars[i].y = -origin.y + Math.floor(Math.random() * settings.height);
		stars[i].z = Math.floor(Math.random() * settings.max_z);
	}

	var context =  settings.context;

	starfield.draw = function()
	{
		context.fillStyle = '#FFF';
		for (var i = 0; i < settings.star_count; i++) {
			var star = stars[i];
			var scale_ratio = settings.focal_length / (settings.focal_length + star.z);
			var x = origin.x + star.x * scale_ratio;
			var y = origin.y + star.y * scale_ratio;
			var w  = settings.star_width * scale_ratio;
			var h = w;			
			context.fillRect(x, y, w, h);
		}
	};

	starfield.update = function()
	{
		starfield.clear();
		for (var i = 0; i < settings.star_count; i++) {
			stars[i].z += settings.speed;
			if (stars[i].z >= settings.max_z) {
				stars[i].z = 0;
			}
		}
		starfield.draw();
	};

	starfield.clear = function() {
		context.fillStyle = '#000';
		context.fillRect(0,0, settings.width, settings.height);
	};
	return starfield;
}

function Star() {

	var star = {};
	
	return star;
}