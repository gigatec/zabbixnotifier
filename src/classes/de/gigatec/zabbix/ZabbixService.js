// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

App.de_gigatec_zabbix_ZabbixService = Ember.Object.extend({

	/*** PROPERTIES ***/
	
	jqzabbix: null,

	/*** PUBLIC METHODS ***/

	/**
	 * constructor
	 */
	init: function(baseUrl, username, password) { var me = this;
		
		var apiUrl = baseUrl + 'api_jsonrpc.php';
	
		me.jqzabbix = new $.jqzabbix({
		    url: apiUrl,         // URL of Zabbix API
		    username: username,  // Zabbix login user name
		    password: $.decrypt(password),  // Zabbix login password
		    basicauth: false,    // If you use basic authentication, set true for this option
		    busername: '',       // User name for basic authentication
		    bpassword: '',       // Password for basic authentication
		    timeout: 5000,       // Request timeout (milli second)
		    limit: 1000,         // Max data number for one request
		});
		
		me.jqzabbix.getApiVersion();
		me.jqzabbix.userLogin();
	},

	/**
	 * get trigger list
	 */
	getTriggerList: function(handler) { var me = this;

		var params = {
			output: 'extend',
			monitored: '1',
			active: '1',
			sortfield: 'priority',
			sortorder: 'DESC',
			expandDescription: '1',
			expandData: '1',
			filter: {
				value: '1'
			}
		};
		
		me.jqzabbix.sendAjaxRequest('trigger.get', params, function(data) {
			handler(data.result);
		}, function() {
			handler([]);
		});
	},
	
});
