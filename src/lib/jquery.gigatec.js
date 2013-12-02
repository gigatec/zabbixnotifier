/**
 * @author Stefan Kreuter <kreuter@gigatec.de
 * Copyright (c) 2012 gigatec GmbH - released under MIT License
*/

(function($) {
	
	/**
	 * createView function
	 */
	$.createView = function(name, data, ready) {
    	
		var $container = $('#' + name);
		
		Ember.View.create({
			template: Ember.TEMPLATES[name],
			data: data
		}).replaceIn($container);
		
		if (ready) {
			Ember.run.schedule('render', function() {
				ready($container);
			});
		}
		
		return $container;
	};
	
	/**
	 * get local config
	 */
	$.getLocalConfig = function() {
		if (localStorage['config'] === undefined) {
			return undefined;
		} else {
			return JSON.parse(localStorage['config'])
		}
	};
	
	/**
	 * set local config
	 */
	$.setLocalConfig = function(config) {
		localStorage['config'] = JSON.stringify(config);
	};
	
	/**
	 * log message
	 */
	$.log = function(message) {
		console.log(new Date() + ': ' + message);
	};
	
	/**
	 * simple text encryption (base64, rot13)
	 */
	$.encrypt = function(text) {
		return $.base64Encode($.rot13(text));
	};
	
	/**
	 * simple text decryption (base64, rot13)
	 */
	$.decrypt = function(encrypted) {
		return $.rot13($.base64Decode(encrypted));
	};
	
	/**
	 * calculate diff between 2 timestamps (d, h, m)
	 */
	$.timeDiff = function(timestamp1, timestamp2) {
		
		var diff = timestamp2 - timestamp1;
		var seconds = parseInt(diff / 1000);
		var minutes = parseInt(seconds / 60);
		var hours = parseInt(minutes / 60);
		var days = parseInt(hours / 24);
		
		var result = '';
		if (days > 0) {
			result += days + 'd, ';
		}
		if (hours > 0) {
			result += (hours % 24) + 'h, ';
		}
		result += (minutes % 60) + 'm';
		
		return result;	
	};
	
})(jQuery);
