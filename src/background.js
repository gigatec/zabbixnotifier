// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

App = Ember.Application.create({
	
	/**
	 * ready handler
	 */
    ready: function() { var me = this;
    
		// global default config
		if ($.getLocalConfig() === undefined) {
			$.setLocalConfig({
				'zabbixBase': '',
				'zabbixUser': '',
				'zabbixPass': '',
				'playSound': 'true',
				'hideAck': false,
				'interval': '60'
			});
		}
	
		// global beans
		App.set('zabbixManager', new App.de_gigatec_zabbix_ZabbixManager());
		
		// refresh zabbix status
		App.zabbixManager.refreshZabbixStatus();

    }
    
});