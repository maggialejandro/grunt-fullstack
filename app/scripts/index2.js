//Load common code that includes config, then load the app logic for this page.
require(['./common'], function (common) {
    require(['routers/index2'], function(Router){
    	new Router();
    });
});