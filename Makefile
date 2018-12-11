#!/usr/bin/env make 


APPNAME?="SysPec" 


Electron : 
	npm start 

On_osx : package.json
	npm run package-mac
On_win32: package.json
	npm run package-win 
On_linux : package.json
	npm run package-linux 

