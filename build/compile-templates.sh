#!/bin/sh

TPL_PATH="../src/templates"

handlebars/bin/handlebars $TPL_PATH/*.tpl \
	| sed "s/templates\['\([^']*\).tpl'\]/templates['\1']/g" \
	| sed "s/templates = Handlebars.templates/templates = Ember.TEMPLATES/g" \
	> $TPL_PATH/templates.js
