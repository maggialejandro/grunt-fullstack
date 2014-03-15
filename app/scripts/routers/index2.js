define(['backbone'], function(Backbone) {
   
    var IndexRouter = Backbone.Router.extend({
    	routes : {
			'usuarios' : 'usuarios'
		},
		initialize: function(){
			//window.view = new AppView();
			console.log('bien 2');
			Backbone.history.start();
		},
		usuarios: function(){
			console.log('usuarios');
		}
    });
   
    return IndexRouter; 
});