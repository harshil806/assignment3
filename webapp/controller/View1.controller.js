sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"test_formatter1/demo_formatter1/formatters/Reusables"
], function (Controller ,reusables) {
	"use strict";

	return Controller.extend("test_formatter1.demo_formatter1.controller.View1", {
		test : reusables,
		onInit: function () {
var oModel = new sap.ui.model.json.JSONModel("./model/data.json");
this.getView().byId("table1").setModel(oModel);
		}
	});
});