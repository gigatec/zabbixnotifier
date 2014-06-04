<div id="header">
	<a target="_blank" href="http://www.gigatec.de/"><img id="logo" src="images/logo_gigatec.png" /></a> 
	<h1>Zabbix Notifier: Settings</h1>
</div>

<hr />

<div id="settings">
	<form>
		<div>
			<label for="zabbixBase">Zabbix Base: </label>
			<input id="zabbixBase" type="text" value="{{data.zabbixBase}}" />
		</div>
		<div>
			<label for="zabbixUser">Zabbix User: </label>
			<input id="zabbixUser" type="text" value="{{data.zabbixUser}}" />
		</div>
		<div>
			<label for="zabbixPass">Zabbix Pass: </label>
			<input id="zabbixPass" type="password" value="***********" />
		</div>
		<div>
			<label for="interval">Update Interval (s): </label>
			<input id="interval" type="text" value="{{data.interval}}" />
		</div>
		<div>
			<label for="playSound">Play Sound: </label>
			<input id="playSound" name="playSound" type="radio" value="true" {{#if data.playSound}}checked="checked"{{/if}}>Yes</input>
			<input id="playSound" name="playSound" type="radio" value="false" {{#unless data.playSound}}checked="checked"{{/unless}}>No</input>
		</div>
		<div>
			<label for="hideAck">Hide Ack Events: </label>
			<input id="hideAck" name="hideAck" type="radio" value="true" {{#if data.hideAck}}checked="checked"{{/if}}>Yes</input>
			<input id="hideAck" name="hideAck" type="radio" value="false" {{#unless data.hideAck}}checked="checked"{{/unless}}>No</input>
		</div>
		<div class="buttons">
			<input id="saveButton" type="submit" value="Save" />
			<input id="cancelButton" type="button" value="Cancel" />
		</div>
	</form>
</div>