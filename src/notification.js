// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function() {

	// load data from backend
	Handlebars = chrome.extension.getBackgroundPage().Handlebars;
	Ember = chrome.extension.getBackgroundPage().Ember;
	App = chrome.extension.getBackgroundPage().App;

	$overview = $.createView('notification', App.zabbixManager.zabbixStatus.get('notifyUser'));
	App.zabbixManager.zabbixStatus.set('notifyUser', []);
});