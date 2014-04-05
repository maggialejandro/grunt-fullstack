define(['backbone'], function(Backbone) {
   
    var IndexRouter = Backbone.Router.extend({
    	routes : {
		},
		initialize: function(){
			Backbone.history.start();
		}
    });
   
    return IndexRouter; 
});