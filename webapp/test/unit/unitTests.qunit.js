/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"test_formatter1/demo_formatter1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});