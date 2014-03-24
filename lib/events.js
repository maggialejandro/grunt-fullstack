'use strict';

/**
 * Application events
 */
module.exports = function(app, io) {

	app.set('terminal', {} );

	io.sockets.on('connection', function (socket) {
		socket.on('terminalConectado', function(data){
			app.set('terminal', {
				socket_id: socket.id
			});
		});

		socket.on('shoot', function(data){
			var socket_id = app.get('terminal').socket_id;
			var socket = io.sockets.socket(socket_id);
			socket.emit('shoot');
		});

		socket.on('move', function(coordenadas){
			var socket_id = app.get('terminal').socket_id;
			var socket = io.sockets.socket(socket_id);
			console.log(coordenadas);
			socket.emit('move', coordenadas);
		});
	});
};