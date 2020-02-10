sap.ui.define([
	"miningIOT/MiningIOT/controller/BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (BaseController, Filter, FilterOperator, MessageBox, MessageToast) {
	"use strict";

	return BaseController.extend("miningIOT.MiningIOT.controller.OverView", {
		
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miningIOT.MiningIOT.view.OverView
		 */
		onInit: function () {
			this._oGoogleMapMarkers = [];
			
			var oVibrationSensorModel = new sap.ui.model.json.JSONModel();
			
			var aSensors = [{
				"Sensor": "MySensor"
			},{
				"Sensor": "MySensorMQ"
			}];
			
			var aMachines = [{
				"Machine": "Air Compressor"
			},{
				"Machine": "Generator-CHP"
			},{
				"Machine": "Water Pumps"
			}];
			
			var aStatus = [{
				"Status": "Healthy"
			},{
				"Status": "Critical"
			}];
			
			var aSearchColumns = ["MachineName", "Location", "Status", "OrderId"]; 
			
			var aUIFixedSensorData = [{
				"SensorId": "772f3e44-0a8e-40df-9ad2-f4afd8152b7e", // Air Compressor Sensor
				"MachineId": "e5f42250-2e70-4a9d-ba7a-f859924805f3", // Air Compressor Device
				"EquipmentNumber": "",
				"SensorName": "",
				"MachineName": "",
				"Location": "Point Impossible Beach, Victoria, Australia",
				"VibrationSpeed": "",
				"TimeStamp": "",
				"Threshold": 0.55,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Healthy",
				"IsMaintainanceOrder": "",
				"OrderId": "",
				"InstallationTime": new Date(1523970000000),
				"Make": "HJR-493",
				"Model": "2007",           
				"Data": []
			},{
				"SensorId": "3a222766-f1f4-4be7-8861-058c2517cdb5", // Generator-CHP Sensor
				"MachineId": "c80b893d-c4e8-4028-9776-7434e909737a", // Generator-CHP Device
				"EquipmentNumber": "",
				"SensorName": "",
				"MachineName": "",
				"Location": "Anglesea Mine, Victoria, Australia",
				"VibrationSpeed": "",
				"TimeStamp": "",
				"Threshold": 0.55,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Healthy",
				"IsMaintainanceOrder": "",
				"OrderId": "",
				"InstallationTime": new Date(1533970000000),
				"Make": "TSR-123",
				"Model": "2005",
				"Data": []
			},{
				"SensorId": "9c42e58f-37ac-48f6-86b7-4ccf9f3443e3", // Water Pumps Sensor
				"MachineId": "4678836e-0c6f-4998-8fc5-fb2791339d52", // Water Pumps Device
				"EquipmentNumber": "",
				"SensorName": "",
				"MachineName": "",
				"Location": "Torquay VIC 3228, Australia",
				"VibrationSpeed": "",
				"TimeStamp": "",
				"Threshold": 0.55,
				"MaxSpeed": 2,
				"Delta": 10,
				"Status": "Healthy",
				"IsMaintainanceOrder": "",
				"OrderId": "",
				"InstallationTime": new Date(1543970000000),
				"Make": "ISD-968",
				"Model": "2009",
				"Data": []
			}];
			
			oVibrationSensorModel.setProperty("/Sensor", jQuery.extend(true, [], aSensors));
			oVibrationSensorModel.setProperty("/Machine", jQuery.extend(true, [], aMachines));
			oVibrationSensorModel.setProperty("/Status", jQuery.extend(true, [], aStatus));
			oVibrationSensorModel.setProperty("/SearchColumn", jQuery.extend(true, [], aSearchColumns));
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			oVibrationSensorModel.setProperty("/SelectedVibrationSensor", {});
			
			this.getOwnerComponent().setModel(oVibrationSensorModel, "VibrationSensorModel");
			
			this.getSCPData();
		},
		
		onExit:function() {
		    if (this.intervalHandle) {
				clearInterval(this.intervalHandle);
		    }
		}, 
		
		onAfterRendering: function() {
			var oMyOptions = {zoom:12,
			                 center: new google.maps.LatLng(-38.3,144.3),
			                 mapTypeId: google.maps.MapTypeId.ROADMAP
			                 };
			var oMap = new google.maps.Map(this.getView().byId("idGoogleMapTrial").getDomRef(), oMyOptions);
			
			var oMarker1 = new google.maps.Marker({map: oMap,
											 position: new google.maps.LatLng(-38.3860094, 144.1810526),
											 title: "Generator-CHP",
											 label: "Generator-CHP"
			});
			
			var oMarker2 = new google.maps.Marker({map: oMap,
				                             position: new google.maps.LatLng(-38.3122321,144.3629695),
				                             title: "Air Compressor",
				                             label: "Air Compressor"
			});
			
			var oMarker3 = new google.maps.Marker({map: oMap,
				                             position: new google.maps.LatLng(-38.3192143,144.3210314),
				                             title: "Water Pumps",
				                             label: "Water Pumps"
				                             
			});
			
			// var oInfowindow1 = new google.maps.InfoWindow({content:"<strong></strong><br>Generator-CHP<br>"});
	  //      oInfowindow1.open(oMap, oMarker1);
	        
	  //      var oInfowindow2 = new google.maps.InfoWindow({content:"<strong></strong><br>Air Compressor<br>"});
	  //      oInfowindow2.open(oMap, oMarker2);
	        
	  //      var oInfowindow3 = new google.maps.InfoWindow({content:"<strong></strong><br>Water Pumps<br>"});
	  //      oInfowindow3.open(oMap, oMarker3);
	        
	        this._oGoogleMapMarkers.push(oMarker1);
	        this._oGoogleMapMarkers.push(oMarker2);
	        this._oGoogleMapMarkers.push(oMarker3);
		},
		
		getSCPData: function() {
			jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                crossDomain: true,
                url: "/mining/13f7eaa3-315c-4746-9a8f-397d5c284d73/iot/cockpit/core/tenant/1022420440/devices",
                xhrFields: {
                    withCredentials: true
                },
                username: "root",
                password: "T8vKeD9HuoT6PGr",
                dataType: "json",
                async: false,
                success: function (data, textStatus, jqXHR) {
                	this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/ServerIOTDevices", jQuery.extend(true, [], data));
                	
                    jQuery.ajax({
		                type: "GET",
		                contentType: "application/json",
		                crossDomain: true,
		                url:  "/mining/iot/processing/api/v1/tenant/1022420440/measures/capabilities/71fb0199-3b98-49b5-9a4e-b4f76357122e?top=200&orderby=timestamp%20desc",
		                 //url: "https://ibso-iot-services-poc.leonardo-iot.cfapps.eu10.hana.ondemand.com/comsapleonardoiot.iotuithingmodelerodata/appiot-mds/Things('4F88162A2BC542E78EA7EE6695F59B9D')/ibso.iotservicespoc.mining.demo:VibrationType/VibrationThingDemo?timerange=3M",
		                xhrFields: {
		                    withCredentials: true
		                },
		                username: "root",
		                password: "T8vKeD9HuoT6PGr",
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
						} else {
							aUIFixedSensorData[intK].VibrationSpeed = "";
						    aUIFixedSensorData[intK].TimeStamp = "";
						}
						aUIFixedSensorData[intK].Data = aSensors[intL].Data;
					}
				}
			}
			
			for (var intS = 0; intS < aUIFixedSensorData.length; intS++) {
				aNotificationData.filter(function(oNotificationData) {
					if(oNotificationData.Eqktx === aUIFixedSensorData[intS].MachineName) {
						if(oNotificationData.Qmnum !== "") {
							aUIFixedSensorData[intS].OrderId = oNotificationData.Qmnum;
							aUIFixedSensorData[intS].Status = "Critical";
							aUIFixedSensorData[intS].IsMaintainanceOrder = "false";
						}
						aUIFixedSensorData[intS].EquipmentNumber = oNotificationData.Equnr;
					}
				});
			}
			
			for (var intR = 0; intR < aUIFixedSensorData.length; intR++) {
                if(aUIFixedSensorData[intJ].VibrationSpeed !== "" && 
                                                (aUIFixedSensorData[intR].VibrationSpeed < 2 || aUIFixedSensorData[intR].VibrationSpeed > 7)) {
                                aUIFixedSensorData[intR].Status = "Critical";
                } else {
                                aUIFixedSensorData[intR].Status = "Healthy";
                }
		    }
			
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			
			for (var intR = 0; intR < aUIFixedSensorData.length; intR++) {
				if(aUIFixedSensorData[intR].OrderId === "" && 
						(aUIFixedSensorData[intJ].VibrationSpeed !== "" && 
						(aUIFixedSensorData[intR].VibrationSpeed < 2 || aUIFixedSensorData[intR].VibrationSpeed > 7))) {
							
					this.maintainanceOrWorkOrder(aUIFixedSensorData[intR].EquipmentNumber);
				}
			}
			
		    oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			
			this.updateModelData();
		},
		
		updateModelData: function() {
			var self = this;
				this.intervalHandle = setInterval(function() { 
				  self.refreshModelData();
			},  30000);
		},
		
		refreshModelData: function() {
			jQuery.ajax({
                type: "GET",
                contentType: "application/json",
                crossDomain: true,
                url: "/mining/iot/processing/api/v1/tenant/1022420440/measures/capabilities/71fb0199-3b98-49b5-9a4e-b4f76357122e?top=100&orderby=timestamp%20desc",
                xhrFields: {
                    withCredentials: true
                },
                username: "root",
                password: "T8vKeD9HuoT6PGr",
                dataType: "json",
                async: false,
                success: function (data, textStatus, jqXHR) {
                    this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/ServerIOTData", jQuery.extend(true, [], data));
                    this.getOwnerComponent().getModel().read("/EquipNotifSet", {success: function(oData) {
                    	this.getOwnerComponent().getModel("VibrationSensorModel").setProperty("/NotificationData", oData.results);
		            	this.modifyDynamicallyRefreshedData();
		            }.bind(this)});
                }.bind(this),
                error: function (oError) {
                    console.log(oError);
                }.bind(this)
			});
		},
		
		modifyDynamicallyRefreshedData: function() {
			var oVibrationSensorModel = this.getOwnerComponent().getModel("VibrationSensorModel");
			var aIOTData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/ServerIOTData")); 
			var aUIFixedSensorData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/UIFixedSensorData"));
			var aParticularDeviceData = [];
			var aNotificationData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/NotificationData"));
			
			for (var intK = 0; intK < aIOTData.length; intK++) {
		    	aIOTData[intK].timestamp = new Date(aIOTData[intK].timestamp);
		    }
			
			for (var intI = 0; intI < aUIFixedSensorData.length; intI++) {
				aParticularDeviceData = [];
				aParticularDeviceData = aIOTData.filter(function(oIOTData) {
					return oIOTData.sensorId === aUIFixedSensorData[intI].SensorId;
				});
				
				aNotificationData.filter(function(oNotificationData) {
					if(oNotificationData.Eqktx === aUIFixedSensorData[intI].MachineName) {
						aUIFixedSensorData[intI].OrderId = oNotificationData.Qmnum;
						aUIFixedSensorData[intI].IsMaintainanceOrder = "false";
					}
				});
				
				aUIFixedSensorData[intI].Status = (aUIFixedSensorData[intI].OrderId !== "") ? "Critical" : "Healthy";
				aUIFixedSensorData[intI].Data = aParticularDeviceData;
				
				if(aParticularDeviceData.length > 0) {
					aUIFixedSensorData[intI].TimeStamp = new Date(aParticularDeviceData[0].timestamp);
					aUIFixedSensorData[intI].VibrationSpeed = aParticularDeviceData[0].measure.maxvib;
				} else {
					aUIFixedSensorData[intI].TimeStamp = "";
					aUIFixedSensorData[intI].VibrationSpeed = "";
				}
			}
			
			for (var intJ = 0; intJ < aUIFixedSensorData.length; intJ++) {
                if(aUIFixedSensorData[intJ].VibrationSpeed !== "" && 
                        (aUIFixedSensorData[intJ].VibrationSpeed < 2 || aUIFixedSensorData[intJ].VibrationSpeed > 7)) {
                    aUIFixedSensorData[intJ].Status = "Critical";
                } else {
                    aUIFixedSensorData[intJ].Status = "Healthy";
                }
            }
			
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			
			if(!jQuery.isEmptyObject(oVibrationSensorModel.getProperty("/SelectedVibrationSensor"))) {
				var oSensorId = oVibrationSensorModel.getProperty("/SelectedVibrationSensor/SensorId");
				var iMatchIndex = this.findWithAttr(aUIFixedSensorData, "SensorId", oSensorId);
				var oUpdatedData = jQuery.extend(true, {}, aUIFixedSensorData[iMatchIndex]);
				
				oVibrationSensorModel.setProperty("/SelectedVibrationSensor", oUpdatedData);
			}
			
			// oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
			
			for (var intJ = 0; intJ < aUIFixedSensorData.length; intJ++) {
				if(aUIFixedSensorData[intJ].OrderId === "" && 
						(aUIFixedSensorData[intJ].VibrationSpeed !== "" && 
						(aUIFixedSensorData[intJ].VibrationSpeed < 2 || aUIFixedSensorData[intJ].VibrationSpeed > 7))) {
							
					
					this.maintainanceOrWorkOrder(aUIFixedSensorData[intJ].EquipmentNumber);
				}
				
			}
			
			oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
		},
		
		maintainanceOrWorkOrder: function(sEquipmentNumber) {
			this.getOwnerComponent().getModel().read(this.getOwnerComponent().getModel().createKey("/Maintenance_PlanSet", 
				{Equnr: sEquipmentNumber}), 
				{success: function(oData) {
					var sMachineName = this.getMachineName(oData.Equnr);
					
                	if(oData.Nplda && oData.Nplda.getTime() > 0) {
       //         		if(!sap.ui.getCore().byId("id" + sMachineName + "MaintainanceMessageBox")) {
       //         			MessageBox.show("Information", {
	      //          			id: "id" + sMachineName + "MaintainanceMessageBox",
							// 	icon: MessageBox.Icon.INFORMATION,
							// 	title: "Information",
							// 	details: "Maintenance order " + oData.Warpl + " for machine " + sMachineName + " is scheduled on " + oData.Nplda,
							// 	actions: [MessageBox.Action.OK]
							// });
       //         		} else {
       //         			//Do nothing
       //         		}
                		
                		// MessageToast.show("Maintenance order " + oData.Warpl + " for machine " + sMachineName + " is scheduled on " + oData.Nplda, {width: "60rem"});
                		this.updateMaintainanceOrder(oData);	
                	} else {
                		this.getOwnerComponent().getModel().create("/EquipNotifSet",
							{Equnr: oData.Equnr, Eqktx: sMachineName}, 
							{success: function(oResultData) {
		                    	this.updateWorkOrderData(oResultData);
			            	}.bind(this)
						});
                	}
            	}.bind(this)
			});
		},
		
		updateMaintainanceOrder: function(oData) {
			var oVibrationSensorModel = this.getOwnerComponent().getModel("VibrationSensorModel");
			var aUIFixedSensorData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/UIFixedSensorData"));
			var iMatchIndex = this.findWithAttr(aUIFixedSensorData, "EquipmentNumber", oData.Equnr);
			
			aUIFixedSensorData[iMatchIndex].Status = "Critical";
		    aUIFixedSensorData[iMatchIndex].OrderId = oData.Warpl;
		    aUIFixedSensorData[iMatchIndex].IsMaintainanceOrder = "true";
		    
		    oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
		    
		    if(!jQuery.isEmptyObject(oVibrationSensorModel.getProperty("/SelectedVibrationSensor"))) {
				var oSensorId = oVibrationSensorModel.getProperty("/SelectedVibrationSensor/SensorId");
				var iSensorIndex = this.findWithAttr(aUIFixedSensorData, "SensorId", oSensorId);
				var oUpdatedData = jQuery.extend(true, {}, aUIFixedSensorData[iSensorIndex]);
				
				oVibrationSensorModel.setProperty("/SelectedVibrationSensor", oUpdatedData);
			}
		},
		
		getMachineName: function(sEquipmentNumber) {
			var aUIFixedSensorData = jQuery.extend(true, [], this.getOwnerComponent().getModel("VibrationSensorModel").getProperty(
				"/UIFixedSensorData"));
			var iMatchIndex = this.findWithAttr(aUIFixedSensorData, "EquipmentNumber", sEquipmentNumber);
			
			return aUIFixedSensorData[iMatchIndex].MachineName;
		},
		
		updateWorkOrderData: function(oData) {
			var oVibrationSensorModel = this.getOwnerComponent().getModel("VibrationSensorModel");
			var aUIFixedSensorData = jQuery.extend(true, [], oVibrationSensorModel.getProperty("/UIFixedSensorData"));
			var iMatchIndex = this.findWithAttr(aUIFixedSensorData, "EquipmentNumber", oData.Equnr);
			
			aUIFixedSensorData[iMatchIndex].Status = "Critical";
		    aUIFixedSensorData[iMatchIndex].OrderId = oData.Qmnum;
		    aUIFixedSensorData[iMatchIndex].IsMaintainanceOrder = "false";
		    
		    oVibrationSensorModel.setProperty("/UIFixedSensorData", jQuery.extend(true, [], aUIFixedSensorData));
		    
		    if(!jQuery.isEmptyObject(oVibrationSensorModel.getProperty("/SelectedVibrationSensor"))) {
				var oSensorId = oVibrationSensorModel.getProperty("/SelectedVibrationSensor/SensorId");
				var iSensorIndex = this.findWithAttr(aUIFixedSensorData, "SensorId", oSensorId);
				var oUpdatedData = jQuery.extend(true, {}, aUIFixedSensorData[iSensorIndex]);
				
				oVibrationSensorModel.setProperty("/SelectedVibrationSensor", oUpdatedData);
			}
		},
		
		findWithAttr: function(aColumnList, sAttr, sValue) {
			for (var intI = 0; intI < aColumnList.length; intI += 1) {
				if (aColumnList[intI] && aColumnList[intI][sAttr] === sValue) {
					return intI;
				}
			}
			return -1;
		},
		
		formatBulletMicroChartGood1: function(iThreshold, iDelta) {
			return (Math.round((iThreshold - ((iThreshold * iDelta) / 100)) * 100) / 100);
		},
		
		formatBulletMicroChartGood2: function(iThreshold, iDelta) {
			return (Math.round((iThreshold + ((iThreshold * iDelta) / 100)) * 100) / 100);
		},
		
		formatBulletMicroChart: function(iVibrationSpeed) {
			if(iVibrationSpeed >= 2 && iVibrationSpeed < 7) {
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
        
        onFilterChange: function() {
        	var sSearchQuery = this.getView().byId("idSearchField").getValue();
        	var aTableColumns = this.getOwnerComponent().getModel("VibrationSensorModel").getProperty("/SearchColumn");
        	var sMachine = this.getView().byId("idMachineField").getValue(); 
        	var sStatus = this.getView().byId("idStatusField").getValue();
        	var aFilters = [];
        	var aSearchFilter = [];
        	
        	this.getView().byId("idVibrationSensorTable").getBinding("items").filter();
        	
        	if(sSearchQuery) {
        		for(var intI = 0; intI < aTableColumns.length; intI++) {
        			aSearchFilter.push(new Filter(aTableColumns[intI], FilterOperator.Contains, sSearchQuery));
        		}
        		aFilters.push(new Filter(aSearchFilter, false));
    		 }
        	
        	if(sMachine) {
        		aFilters.push(new Filter("MachineName", FilterOperator.EQ, sMachine));
        	}
        	
        	if(sStatus) {
        		aFilters.push(new Filter("Status", FilterOperator.EQ, sStatus));
        	}
        	
        	if(aFilters.length > 0) {
        		this.getView().byId("idVibrationSensorTable").getBinding("items").filter(new Filter(aFilters, true)); 
        	} else {
        		this.getView().byId("idVibrationSensorTable").getBinding("items").filter();
        	}
        	
        	this.getMapRefreshed();
        },
        
        getMapRefreshed: function() {
        	var aFilteredMachines = [];
        	var aSelectedContexts = [];
        	
        	aSelectedContexts = this.getView().byId("idVibrationSensorTable").getBinding("items").getContexts();
        	for(var intI = 0; intI < aSelectedContexts.length; intI++) {
        		aFilteredMachines.push(aSelectedContexts[intI].getObject());
        	}
        	
        	for(var intJ = 0; intJ < this._oGoogleMapMarkers.length; intJ++) {
        		if(this.findWithAttr(aFilteredMachines, "MachineName", this._oGoogleMapMarkers[intJ].getTitle()) >= 0) {
        			this._oGoogleMapMarkers[intJ].setVisible(true);
        		} else {
        			this._oGoogleMapMarkers[intJ].setVisible(false);
        		}
        	}
        }
	});
});