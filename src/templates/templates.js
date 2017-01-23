(function() {
  var template = Handlebars.template, templates = Ember.TEMPLATES = Handlebars.templates || {};
templates['notification'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<div class=\"item ";
  stack1 = depth0.priorityClass;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.system;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + ": ";
  stack1 = depth0.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</div>\n";
  return buffer;}

  buffer += "<div class=\"notifications\">\n\n";
  stack1 = depth0.data;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>";
  return buffer;});
templates['overview'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n		<option value=\"";
  stack1 = depth0.groupid;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">";
  stack1 = depth0.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</option>\n		";
  return buffer;}

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n	<tr class=\"";
  stack1 = depth0.priorityClass;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\">\n		<td class=\"system\">";
  stack1 = depth0.host;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n		<td class=\"name\">";
  stack1 = depth0.name;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n		<td class=\"priority\">";
  stack1 = depth0.priority;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n		<td class=\"age\">";
  stack1 = depth0.age;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "</td>\n	</tr>\n	";
  return buffer;}

  buffer += "<div id=\"header\">\n	<a target=\"_blank\" href=\"http://www.gigatec.de/\"><img id=\"logo\" src=\"images/logo_gigatec.png\" /></a> \n	<h1>Zabbix Notifier: Overview</h1>\n</div>\n\n<hr />\n\n<div id=\"menu\">\n	<label>Group : </label>\n	<select id=\"groupid\">\n		<option value=\"\">---</option>\n		";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.grouphostList;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	</select>\n	|\n	<span class=\"link\" id=\"settingsButton\">Settings</span>\n	|\n	<span class=\"link\" id=\"zabbixButton\">Open Zabbix</span>\n</div>\n\n<hr />\n\n<table class=\"overview details\">\n	<tr class=\"header\">\n		<th>System</th>\n		<th>Description</th>\n		<th>Priority</th>\n		<th>Age</th>\n	</tr>\n	";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.triggerList;
  stack1 = helpers.each.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n	<tr>\n</table>";
  return buffer;});
templates['settings'] = template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program3(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program5(depth0,data) {
  
  
  return "checked=\"checked\"";}

function program7(depth0,data) {
  
  
  return "checked=\"checked\"";}

  buffer += "<div id=\"header\">\n	<a target=\"_blank\" href=\"http://www.gigatec.de/\"><img id=\"logo\" src=\"images/logo_gigatec.png\" /></a> \n	<h1>Zabbix Notifier: Settings</h1>\n</div>\n\n<hr />\n\n<div id=\"settings\">\n	<form>\n		<div>\n			<label for=\"zabbixBase\">Zabbix Base: </label>\n			<input id=\"zabbixBase\" type=\"text\" value=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.zabbixBase;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" />\n		</div>\n		<div>\n			<label for=\"zabbixUser\">Zabbix User: </label>\n			<input id=\"zabbixUser\" type=\"text\" value=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.zabbixUser;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" />\n		</div>\n		<div>\n			<label for=\"zabbixPass\">Zabbix Pass: </label>\n			<input id=\"zabbixPass\" type=\"password\" value=\"***********\" />\n		</div>\n		<div>\n			<label for=\"interval\">Update Interval (s): </label>\n			<input id=\"interval\" type=\"text\" value=\"";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.interval;
  stack1 = typeof stack1 === functionType ? stack1() : stack1;
  buffer += escapeExpression(stack1) + "\" />\n		</div>\n		<div>\n			<label for=\"playSound\">Play Sound: </label>\n			<input id=\"playSound\" name=\"playSound\" type=\"radio\" value=\"true\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.playSound;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(1, program1, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Yes</input>\n			<input id=\"playSound\" name=\"playSound\" type=\"radio\" value=\"false\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.playSound;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(3, program3, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">No</input>\n		</div>\n		<div>\n			<label for=\"hideAck\">Hide Ack Events: </label>\n			<input id=\"hideAck\" name=\"hideAck\" type=\"radio\" value=\"true\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.hideAck;
  stack1 = helpers['if'].call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(5, program5, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">Yes</input>\n			<input id=\"hideAck\" name=\"hideAck\" type=\"radio\" value=\"false\" ";
  stack1 = depth0.data;
  stack1 = stack1 == null || stack1 === false ? stack1 : stack1.hideAck;
  stack1 = helpers.unless.call(depth0, stack1, {hash:{},inverse:self.noop,fn:self.program(7, program7, data)});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += ">No</input>\n		</div>\n\n		<div class=\"buttons\">\n			<input id=\"saveButton\" type=\"submit\" value=\"Save\" />\n			<input id=\"cancelButton\" type=\"button\" value=\"Cancel\" />\n		</div>\n	</form>\n</div>";
  return buffer;});
})();
