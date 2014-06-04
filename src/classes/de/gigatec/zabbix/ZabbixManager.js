// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

App.de_gigatec_zabbix_ZabbixManager = Ember.Object.extend({
	
	/*** PROPERTIES ***/
	
	zabbixUrl: null,
	zabbixService: null,
	zabbixStatus: null,
	timeoutObject: null,

	/*** PUBLIC METHODS ***/

	/**
	 * constructor
	 */
	init: function() { var me = this;
	
		me.set('zabbixStatus', new App.de_gigatec_zabbix_ZabbixStatus());
		me.changeConfiguration();
	},
	
	changeConfiguration: function() { var me = this;
	
		$.log('changeConfiguration');
	
		var config = $.getLocalConfig();
		if (config['zabbixBase']) {
			me.set('zabbixService', new App.de_gigatec_zabbix_ZabbixService(config['zabbixBase'], config['zabbixUser'], config['zabbixPass']));
			me.zabbixStatus.set('statusUrl', config['zabbixBase'] + 'tr_status.php?form_refresh=0&groupid=0&hostid=0&fullscreen=0')
		}
	},

	/**
	 * refresh zabbix status
	 */
	refreshZabbixStatus: function() { var me = this;
	
		var config = $.getLocalConfig();
		
		me.zabbixService.getTriggerList(config, function(triggerList) {

			$.log('refresh zabbix status');
			me.zabbixStatus.updateTriggerList(triggerList);
			me.updateIconAndPlaySound(triggerList.length);

		});
		
		// schedule next update
		clearTimeout(me.timeoutObject);
		me.set('timeoutObject', setTimeout(function() { me.refreshZabbixStatus(); }, config['interval'] * 1000));
	},
	
	/**
	 * update icon and play sound
	 */
	updateIconAndPlaySound: function(triggerCount) { var me = this;

		var config = $.getLocalConfig();

		var notifyUser = me.zabbixStatus.get('notifyUser');
		var state = me.zabbixStatus.get('state');
		var stateName = 'error';
		if (state != -1) {
			stateName = me.zabbixStatus.PRIORITIES[state];
		}
		var stateColor = {
			'average': 			'#ffe479',
			'disaster': 		'#ff2424',
			'high': 			'#ff6969',
			'information': 		'#a3e6a3',
			'normal': 			'#7ddb7d',
			'notclassified': 	'#cccccc',
			'warning': 			'#ffe26f'
		};
		chrome.browserAction.setIcon({path: 'images/icon_' + stateName + '.png'})
		if (stateName != 'error' && triggerCount > 0) {
			chrome.browserAction.setBadgeBackgroundColor({ color: '#888888' });
			chrome.browserAction.setBadgeText({ text: '' + triggerCount });
		} else {
			chrome.browserAction.setBadgeText({text: ''});
		}
		
		if (notifyUser.length > 0 && state > -1) {
			$.log('notifyUser');
			if (config['playSound']) {
				var bing = new Audio('sounds/bing.mp3');
				bing.play();
			}
			me.notifyUser();
		}
	},

	/**
	 * notify user
	 */
	notifyUser: function() { var me = this;

		if (webkitNotifications.createHTMLNotification !== undefined) {
			var notification = webkitNotifications.createHTMLNotification('notification.html');
			notification.show();
			setTimeout(function() { notification.cancel();}, 5000);
		}
	}
	
});
