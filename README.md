zabbixnotifier
==============

Zabbix Notifier for Google Chrome

![
](https://raw.github.com/gigatec/zabbixnotifier/master/screenshot.png)

Funktionen: 
Mit dieser Erweiterung werden aktuelle Statusmeldungen des Zabbix Monitoring-Systems direkt im Browser angezeigt. Störungen und Probleme werden so schnell und zuverlässig erkannt. 
Auch eine Soundbenachrichtigung ist konfigurierbar. 
Durch die sich ändernde Farbe des Icons in der Stautsleiste des Browsers ist auf einen Blick ein Überblick über die überwachten Systeme und Dienste möglich. 

Details:
- Getestet mit Zabbix 2.0.x
- Nutzt die Zabbix-API
- User-Name, Passwort, URL, Port und Updateintervall sind konfigurierbar

ChangeLog:
- 1.1.3 - Behebt Login-Probleme in Verbindung mit Zabbix 2.0.4
- 1.2   - Bugfixes (Update-Problems), Number of Problems is displayed in the icon
- 1.3   - Bugfix (Wrong icon when there are no notifications)
- 1.4   - Dependency Checking (skipDependent: '1')
- 1.5   - Hide Acknowledged Events (config.hideAck: 'true') & Reactivate Simple Notification Popup

Chrome Web Store: https://chrome.google.com/webstore/detail/zabbix-notifier/ikeijbmpddnkaeejokgifioccbcijjfo
