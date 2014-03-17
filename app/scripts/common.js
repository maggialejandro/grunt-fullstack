//The build will inline common dependencies into this file.

//For any third party dependencies, like jQuery, place them in the lib folder.

//Configure loading modules from the lib directory,
//except for 'app' ones, which are in a sibling
//directory.
requirejs.config({
    shim : {
		"underscore": {
			"exports": '_'
		},
		"backbone" : {
			"deps" : ["underscore", "jquery"],
			"exports" : "Backbone"
		},
		"bootstrap" : {
			"deps" : ["jquery"]
		}
	},
    paths: {
        "jquery" : "../bower_components/jquery/dist/jquery",
        "underscore" : "../bower_components/underscore/underscore",
		"backbone" : "../bower_components/backbone/backbone",
		"bootstrap" : "../bower_components/dist/js/bootstrap",
		"text": "libs/text" //require.js text
    }
});