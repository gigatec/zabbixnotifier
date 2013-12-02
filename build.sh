#!/bin/sh

mkdir -p out
cd src/

VERSION=$(sed -n 's/^.*"version": *"\([0-9\.]*\)",$/\1/p' manifest.json)
zip -r ../out/zabbixnotifier_$VERSION.zip *
