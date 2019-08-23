sap.ui.define([
	"miningIOT/MiningIOT/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (BaseController, Filter, FilterOperator) {
	"use strict";

	return BaseController.extend("miningIOT.MiningIOT.controller.OverView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miningIOT.MiningIOT.view.OverView
		 */
		onInit: function () {
			var oVibrationSensorModel = new sap.ui.model.json.JSONModel();
			
			var aSensorId = [{
				"SensorId": "QW-156-TRW-4569"
			},{
				"SensorId": "ZX-142-KUR-7449"
			},{
				"SensorId": "FG-672-QTR-7359"
			},{
				"SensorId": "GT-991-YAX-5251"
			},{
				"SensorId": "TY-312-FTR-9859"
			},{
				"SensorId": "YU-902-AER-7590"
			},{
				"SensorId": "GD-862-UIK-1698"
			}];
			
			var aMachineId = [{
				"MachineId": "112-TRE-45-OP"
			},{
				"MachineId": "672-GKE-91-KL"
			},{
				"MachineId": "890-MNQ-69-MQ"
			},{
				"MachineId": "672-UIP-93-YU"
			},{
				"MachineId": "756-LQR-90-KL"
			},{
				"MachineId": "567-TRE-45-OP"
			},{
				"MachineId": "924-HLD-38-NM"
			}];
			
			var aStatus = [{
				"Status": "Active"
			},{
				"Status": "BreakDown"
			}];
			
			var aSearchColumns = ["SensorId", "MachineId", "Location", "Status", "OrderId"];
			
			var aUIFixedSensorData = [{
				"SensorId": "7512a84c-8c46-4c8d-9ea7-5886b2e8cdf4",
				"MachineId": "af6e1ca8-6b35-4398-8abb-fcf0b4e84613",
				"SensorName": "",
				"MachineName": "",
				"Location": "Beltana, Singleton, New South Wales, Australia",
				"VibrationSpeed": "",
				"TimeStamp": "",
				"Threshold": 0.55,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1523970000000),
				"Make": "HJR-493",
				"Model": "2007",
				"Data": []
			// },{
			// 	"SensorId": "7d23b5db-2cd0-4c1e-b6df-633fdc5bd420",
			// 	"MachineId": "3dbdb0d8-3b8a-482b-b299-2f18347a8d5d",
			// 	"SensorName": "",
			// 	"MachineName": "",
			// 	"Location": "Anglesea Mine, Victoria, Australia",
			// 	"VibrationSpeed": "",
			// 	"TimeStamp": "",
			// 	"Threshold": 0.55,
			// 	"MaxSpeed": 2,
			// 	"Delta": 10,
			// 	"Status": "Active",
			// 	"OrderId": "",
			// 	"InstallationTime": new Date(1533970000000),
			// 	"Make": "TSR-123",
			// 	"Model": "2005",
			// 	"Data": []
			}];
			
			var aSensorData = [{
				"SensorId": "QW-156-TRW-4569",
				"MachineId": "112-TRE-45-OP",
				"Location": "Anglesea Mine, Victoria, Australia",
				"VibrationSpeed": 0.50,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 0.55,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1533970000000),
				"Make": "TSR-123",
				"Model": "2005",
				"Data": [{
					"VibrartionSpeed": 0.55,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.47,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.56,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.54,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.57,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.48,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.54,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.49,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.53,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.54,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.63,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.55,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.57,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.52,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.50,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			},{
				"SensorId": "ZX-142-KUR-7449",
				"MachineId": "672-GKE-91-KL",
				"Location": "Beltana, Singleton, New South Wales, Australia",
				"VibrationSpeed": 0.90,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 1,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1523970000000),
				"Make": "IDR-563",
				"Model": "2007",
				"Data": [{
					"VibrartionSpeed": 0.98,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.95,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.99,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.20,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.18,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.98,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.70,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.05,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.98,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.94,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.13,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.15,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.97,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.92,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.90,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			},{
				"SensorId": "FG-672-QTR-7359",
				"MachineId": "890-MNQ-69-MQ",
				"Location": "Bengalla, Muswellbrook, New South Wales, Australia",
				"VibrationSpeed": 0.67,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 0.70,
				"MaxSpeed": 1.5,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1541970000000),
				"Make": "UTY-964",
				"Model": "2006",
				"Data": [{
					"VibrartionSpeed": 0.74,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.78,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.76,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.72,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.72,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.70,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.70,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.65,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.68,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.64,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.73,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.72,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.71,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.69,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.67,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			},{
				"SensorId": "GT-991-YAX-5251",
				"MachineId": "672-UIP-93-YU",
				"Location": "Callide, Banana, Quneesland, Australia",
				"VibrationSpeed": 1.40,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 1.05,
				"MaxSpeed": 3,
				"Delta": 10,
				"Status": "BreakDown",
				"OrderId": "1379356",
				"InstallationTime": new Date(1513970000000),
				"Make": "PDG-783",
				"Model": "2004",
				"Data": [{
					"VibrartionSpeed": 1.13,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.98,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.99,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.95,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.99,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.10,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.15,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.99,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.18,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.02,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.01,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.92,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.91,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.99,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.40,
					"TimeStamp": new Date(1563970000000),
					"Status": "BreakDown",
					"OrderId": "1379356"
				}]
			},{
				"SensorId": "TY-312-FTR-9859",
				"MachineId": "756-LQR-90-KL",
				"Location": "Capcoal, Middlemount, Queensland, Australia",
				"VibrationSpeed": 0.87,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 0.85,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1523970000000),
				"Make": "KGL-593",
				"Model": "2008",
				"Data": [{
					"VibrartionSpeed": 0.80,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.78,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.73,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.77,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.79,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.80,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.87,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.85,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.88,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.94,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.83,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.82,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.91,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.79,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 0.87,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			},{
				"SensorId": "YU-902-AER-7590",
				"MachineId": "567-TRE-45-OP",
				"Location": "Dawson, Moura, Queensland, Australia",
				"VibrationSpeed": 1.97,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 2.00,
				"MaxSpeed": 4,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1523970000000),
				"Make": "IYR-954",
				"Model": "2006",
				"Data": [{
					"VibrartionSpeed": 2.01,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.08,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.03,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.99,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.22,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.90,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.95,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.98,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.05,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.04,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.03,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 2.12,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.91,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.99,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.97,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			},{
				"SensorId": "GD-862-UIK-1698",
				"MachineId": "924-HLD-38-NM",
				"Location": "Drayton, Hunter Valley, New South Wales, Australia",
				"VibrationSpeed": 1.70,
				"TimeStamp": new Date(1563970000000),
				"Threshold": 1.20,
				"MaxSpeed": 3,
				"Delta": 10,
				"Status": "Active",
				"OrderId": "",
				"InstallationTime": new Date(1513970000000),
				"Make": "JHO-843",
				"Model": "2008",
				"Data": [{
					"VibrartionSpeed": 1.27,
					"TimeStamp": new Date(1562750000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.25,
					"TimeStamp": new Date(1562850000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.28,
					"TimeStamp": new Date(1562950000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.22,
					"TimeStamp": new Date(1563000000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.22,
					"TimeStamp": new Date(1563100000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.20,
					"TimeStamp": new Date(1563200000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.22,
					"TimeStamp": new Date(1563300000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.15,
					"TimeStamp": new Date(1563350000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.18,
					"TimeStamp": new Date(1563450000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.24,
					"TimeStamp": new Date(1563550000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.23,
					"TimeStamp": new Date(1563570000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.22,
					"TimeStamp": new Date(1563670000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.11,
					"TimeStamp": new Date(1563770000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.19,
					"TimeStamp": new Date(1563870000000),
					"Status": "Active",
					"OrderId": ""
				},{
					"VibrartionSpeed": 1.70,
					"TimeStamp": new Date(1563970000000),
					"Status": "Active",
					"OrderId": ""
				}]
			}];
			
			oVibrationSensorModel.setProperty("/SensorReading", jQuery.extend(true, [], aSensorData));
			oVibrationSensorModel.setProperty("/SensorId", jQuery.extend(true, [], aSensorId));
			oVibrationSensorModel.setProperty("/MachineId", jQuery.extend(true, [], aMachineId));
			oVibrationSensorModel.setProperty("/Status", jQuery.extend(true, [], aStatus));
			oVibrationSensorModel.setProperty("/SearchColumn", jQuery.extend(true, [], aSearchColumns));
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			
			this.getOwnerComponent().setModel(oVibrationSensorModel, "VibrationSensorModel");
			
			this.getSCPData();
		},
		
		getSCPData: function() {
			jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                crossDomain: true,
                url: "https://" + "4ec5ecac-dc28-4411-83d5-7f3377a7790c.eu10.cp.iot.sap/4ec5ecac-dc28-4411-83d5-7f3377a7790c/iot/cockpit/core/tenant/590260208/devices",
                xhrFields: {
                    withCredentials: true
                },
                // username: "root",
                // password: "wZDBqZjh6AL4GXB",
                dataType: "json",
                async: false,
                success: function (data, textStatus, jqXHR) {
                	this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/ServerIOTDevices", jQuery.extend(true, [], data));
                	
                    jQuery.ajax({
		                type: "GET",
		                contentType: "application/json",
		                crossDomain: true,
		                url: "https://" + "4ec5ecac-dc28-4411-83d5-7f3377a7790c.eu10.cp.iot.sap/iot/processing/api/v1/tenant/590260208/measures/capabilities/9de0d630-5d08-46d6-b97c-29a558de820a?top=200&orderby=timestamp%20desc",
		                xhrFields: {
		                    withCredentials: true
		                },
		                // username: "root",
		                // password: "wZDBqZjh6AL4GXB",
		                dataType: "json",
		                async: false,
		                success: function (data, textStatus, jqXHR) {
		                    this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/ServerIOTData", jQuery.extend(true, [], data));
		                    this.getOwnerComponent().getModel().read("/EquipNotifSet", {success: function(oData) {
		                    	this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/NotificationData", oData.results);
				            	this.modifyServerData();
				            }.bind(this)});
		                }.bind(this),
		                error: function (oError) {
		                    console.log(oError);
		                }.bind(this)
					});
                }.bind(this),
                error: function (oError) {
                    console.log(oError);
                }.bind(this)
			});
		},
		
		modifyServerData: function() {
			var oVibrationSensorModel = this.getOwnerComponent().getModel("VibrationSensorModel");
			var aIOTDevices = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/ServerIOTDevices")); 
			var aIOTData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/ServerIOTData")); 
			var aUIFixedSensorData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/UIFixedSensorData"));
			var aNotificationData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/NotificationData"));
			var aSensors = [];
			var oSensor = {};
			var aMatchedNotifications = [];
			
			for (var intI = 0; intI < aIOTDevices.length; intI++) {
				for (var intJ = 0; intJ < aIOTDevices[intI].sensors.length; intJ++) {
					oSensor = aIOTDevices[intI].sensors[intJ];
				}
				oSensor.deviceName = aIOTDevices[intI].name;
				aSensors.push(oSensor);
				oSensor = {};
			}
			
			for (var intM = 0; intM < aSensors.length; intM++) {
				aSensors[intM].Data = aIOTData.filter(function(oIOTData) {
					return oIOTData.sensorId === aSensors[intM].id;
				});
			}
			
			for (var intK = 0; intK < aUIFixedSensorData.length; intK++) {
				for (var intL = 0; intL < aSensors.length; intL++) {
					if(aSensors[intL].id === aUIFixedSensorData[intK].SensorId) {
						aUIFixedSensorData[intK].SensorName  = aSensors[intL].name;
						aUIFixedSensorData[intK].MachineName  = aSensors[intL].deviceName;
						if(aSensors[intL].Data.length > 0) {
							aUIFixedSensorData[intK].VibrationSpeed = aSensors[intL].Data[0].measure.maxvib;
						    aUIFixedSensorData[intK].TimeStamp = new Date(aSensors[intL].Data[0].timestamp);
						    for (var intN = 0; intN < aSensors[intL].Data.length; intN++) {
						    	aSensors[intL].Data[intN].timestamp = new Date(aSensors[intL].Data[intN].timestamp);
						    }
						}
						aUIFixedSensorData[intK].Data = aSensors[intL].Data;
					}
				}
			}
			
			for (var intN = 0; intN < aUIFixedSensorData.length; intN++) {
				aNotificationData.filter(function(oNotificationData) {
					if(oNotificationData.Eqktx === aUIFixedSensorData[intN].MachineName && oNotificationData.Qmnum !== "") {
						aUIFixedSensorData[intN].OrderId = oNotificationData.Qmnum;
						aUIFixedSensorData[intN].Status = "BreakDown";
					}
				});
			}
			
			// aUIFixedSensorData[0].OrderId = "10000151";
			// aUIFixedSensorData[0].Status = "BreakDown";
			
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
		},
		
		formatBulletMicroChartGood1: function(iThreshold, iDelta) {
			return (Math.round((iThreshold - ((iThreshold * iDelta) / 100)) * 100) / 100);
		},
		
		formatBulletMicroChartGood2: function(iThreshold, iDelta) {
			return (Math.round((iThreshold + ((iThreshold * iDelta) / 100)) * 100) / 100);
		},
		
		// formatBulletMicroChart: function(iVibrationSpeed, iThreshold, iDelta) {
		// 	var iThresholdLowerLimit = (Math.round((iThreshold - ((iThreshold * iDelta) / 100)) * 100) / 100);
		// 	var iThresholdUpperLimit = (Math.round((iThreshold + ((iThreshold * iDelta) / 100)) * 100) / 100);
			
		// 	if(iVibrationSpeed >= iThresholdLowerLimit && iThresholdUpperLimit >= iVibrationSpeed) {
		// 		return "Good";
		// 	} else {
		// 		return "Critical";
		// 	}
		// },
		
		formatBulletMicroChart: function(iVibrationSpeed) {
			if(iVibrationSpeed >= 2 && iVibrationSpeed < 5) {
				return "Good";
			} else {
				return "Critical";
			}
		},
		
		formatNotificationLink: function(sNotificationNumber) {
			if(sNotificationNumber !== "") {
				return "https://" + 
				       "ldcisd4.wdf.sap.corp:44302/sap/bc/ui2/flp?sap-client=001&sap-language=EN#MaintenanceNotification-displayFactSheet&//C_ObjPgMaintNotification('" + 
				       sNotificationNumber + "')";
			}
		},
		
		onVibrationDetailPress: function(oEvent){
	        var oSensorData = oEvent.getSource().getBindingContext("VibrationSensorModel").getObject();
	        
	        this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/SelectedVibrationSensor", oSensorData);
	        
	        this.getRouter().navTo("DetailVibration",{});
        },
        
        onPressSearch: function(oEvent) {
        	var sSearchQuery = this.getView().byId("idSearchField").getValue();
        	var aTableColumns = this.getOwnerComponent().getModel("VibrationSensorModel").getProperty("/SearchColumn");
        	var sSensorId = this.getView().byId("idSensorIdField").getValue();
        	var sMachineId = this.getView().byId("idMachineIdField").getValue(); 
        	var sStatus = this.getView().byId("idStatusField").getValue();
        	var aFilters = [];
        	
        	this.getView().byId("idVibrationTableSensorTable").getBinding("items").filter();
        	
        	if(sSearchQuery) {
        		for(var intI = 0; intI < aTableColumns.length; intI++) {
        			aFilters.push(new Filter(aTableColumns[intI], FilterOperator.Contains, sSearchQuery));
        		}
    		 }
        	
        	if(sSensorId) {
        		aFilters.push(new Filter("SensorId", FilterOperator.Contains, sSensorId));
        	}
        	
        	if(sMachineId) {
        		aFilters.push(new Filter("MachineId", FilterOperator.Contains, sMachineId));
        	}
        	
        	if(sStatus) {
        		aFilters.push(new Filter("Status", FilterOperator.Contains, sStatus));
        	}
        	
        	this.getView().byId("idVibrationTableSensorTable").getBinding("items").filter((new Filter(aFilters, false))); 
        }
	});

});