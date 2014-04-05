define([
	'backbone',
	"socketio"
	], function(Backbone, io) {
   
    var IndexRouter = Backbone.Router.extend({
    	routes : {
		},
		initialize: function(){
			//window.socket = io.connect('http://192.168.0.2:3000');

			Backbone.history.start();
		}
    });
   
    return IndexRouter; 
});