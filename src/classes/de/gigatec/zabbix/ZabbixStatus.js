// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

App.de_gigatec_zabbix_ZabbixStatus = Ember.Object.extend({
	
	/*** CONSTANTS ***/
	
	PRIORITIES: {
		0: 'notclassified',
		1: 'information',
		2: 'warning',
		3: 'average',
		4: 'high',
		5: 'disaster',
		9: 'normal'
	},
	
	PRIORITY_NAMES: {
		0: 'Not Classified',
		1: 'Information',
		2: 'Warning',
		3: 'Average',
		4: 'High',
		5: 'Disaster',
		9: 'Normal'
	},
	
	/*** PROPERTIES ***/

	statusUrl: null,
	triggerStatisticsArray: null,
	triggerStatistics: null,
	triggerList: null,
	knownTriggers: null,
	state: null,
	notifyUser: null,

	/*** PUBLIC METHODS ***/

	/**
	 * constructor
	 */
	init: function() { var me = this;
		
		var config = $.getLocalConfig();
	
		me.set('triggerStatisticsArray', [0, 0, 0, 0, 0, 0]);
		me.set('triggerStatistics', {
			'notclassified': 0,
			'information': 0,
			'warning': 0,
			'average': 0,
			'high': 0,
			'disaster': 0,
		});
		me.set('triggerList', []);
		me.set('knownTriggers', []);
		me.set('state', -1);
		me.set('notifyUser', []);
	},
	
	/**
	 * update trigger list
	 */
	updateTriggerList: function(list) { var me = this;
	
		var notifyUser = [];
	
		// triggers info
		var triggerStatisticsArray = [0, 0, 0, 0, 0, 0];
		$(list).each(function(index, value) {
			triggerStatisticsArray[value.priority] += 1;
		});
		me.set('triggerStatisticsArray', triggerStatisticsArray);
		$(triggerStatisticsArray).each(function(index, value) {
			me.triggerStatistics[me.PRIORITIES[index]] = value;
		});
	
		// detail info
		var triggerList = [];
		$(list).each(function(index, value) {
			
			var item = {
				'priority':      me.PRIORITY_NAMES[value.priority],
				'priorityClass': me.PRIORITIES[value.priority],
				'status':        1,
				'lastchange':    value.lastchange,
				'age':           $.timeDiff(value.lastchange * 1000, new Date().getTime()),
				'confirmed':     0,
				'system':        value.hostname,
				'name':          value.description,
			};
			triggerList.push(item);
			
			if ($.inArray(value.triggerid, me.knownTriggers) == -1) {
				$.log('add known trigger: ' + value.triggerid);
				notifyUser.push(item);
				me.knownTriggers.push(value.triggerid);
			}
		});
		me.set('triggerList', triggerList);
		
		// state
		var state = list.length > 0 ? -1 : 9;
		state = me._getStateIfActive(0, state);
		state = me._getStateIfActive(1, state);
		state = me._getStateIfActive(2, state);
		state = me._getStateIfActive(3, state);
		state = me._getStateIfActive(4, state);
		state = me._getStateIfActive(5, state);
		me.set('state', state);
		me.set('notifyUser', notifyUser);
	},
	
	/*** PRIVATE METHODS ***/
	
	_getStateIfActive: function(state, oldState) { var me = this;
	
		if (me.triggerStatisticsArray[state] > 0) {
			return state;
		} else {
			return oldState;
		}
	},
	
});
