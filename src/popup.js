// Copyright (c) 2012 gigatec GmbH. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

$(document).ready(function() {

	// load data from backend
	Handlebars = chrome.extension.getBackgroundPage().Handlebars;
	Ember = chrome.extension.getBackgroundPage().Ember;
	App = chrome.extension.getBackgroundPage().App;
	
	var $body = $('body');
	
	// OVERVIEW
	var $overview = $.createView('overview', App.zabbixManager.get('zabbixStatus'));
	
	// SETTINGS
	var $settings = $.createView('settings', $.getLocalConfig(), function($content) {
		
		$content.find('#saveButton').click(function() {
			var zabbixBase = $content.find('#zabbixBase').val();
			if (zabbixBase.length > 0 && !(/\/$/.test(zabbixBase))) {
				zabbixBase += '/';
			}
			var oldConfig = $.getLocalConfig();
			var zabbixPass = $content.find('#zabbixPass').val();
			if (zabbixPass == '***********') {
				zabbixPass = oldConfig['zabbixPass'];
			} else {
				zabbixPass = $.encrypt($content.find('#zabbixPass').val())
			}
			$.setLocalConfig({
				'zabbixBase': zabbixBase,
				'zabbixUser': $content.find('#zabbixUser').val(),
				'zabbixPass': zabbixPass,
				'playSound': $content.find('input[name="playSound"][value="true"]').attr('checked') ? true : false,
				'hideAck': $content.find('input[name="hideAck"][value="true"]').attr('checked') ? true : false,
				'interval': $content.find('#interval').val(),
			});
			App.zabbixManager.changeConfiguration(function() {
				App.zabbixManager.refreshZabbixStatus();
			});
			window.close();
		});
		
		$content.find('#cancelButton').click(function() {
			window.close();
		});
	});
	
	// FOOTER
	var $footer = $.createView('footer', null, function($content) {
		
		$content.find('#overviewButton').click(function() {
			$settings.hide();
			$overview.show();
			$body.show();
		});
		$content.find('#settingsButton').click(function() {
			$overview.hide();
			$settings.show();
			$body.show();
		});
		$content.find('#zabbixButton').click(function() {
			var zabbixUrl = App.zabbixManager.get('zabbixStatus').statusUrl;
			if (zabbixUrl) {
				window.open(zabbixUrl);
			}
		});
	});
	
});
