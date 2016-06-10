<div id="header">
	<a target="_blank" href="http://www.gigatec.de/"><img id="logo" src="images/logo_gigatec.png" /></a> 
	<h1>Zabbix Notifier: Overview</h1>
</div>

<hr />

<div id="menu">
	<label>Group : </label>
	<select id="groupid">
		<option value="">---</option>
		{{#each data.grouphostList}}
		<option value="{{this.groupid}}">{{this.name}}</option>
		{{/each}}
	</select>
	|
	<span class="link" id="settingsButton">Settings</span>
	|
	<span class="link" id="zabbixButton">Open Zabbix</span>
</div>

<hr />

<table class="overview details">
	<tr class="header">
		<th>System</th>
		<th>Description</th>
		<th>Priority</th>
		<th>Age</th>
	</tr>
	{{#each data.triggerList}}
	<tr class="{{this.priorityClass}}">
		<td class="system">{{this.system}}</td>
		<td class="name">{{this.name}}</td>
		<td class="priority">{{this.priority}}</td>
		<td class="age">{{this.age}}</td>
	</tr>
	{{/each}}
	<tr>
</table>