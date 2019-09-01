sap.ui.define([
	"miningIOT/MiningIOT/controller/BaseController",
	"sap/ui/core/routing/History"
], function (BaseController, History) {
	"use strict";

	return BaseController.extend("miningIOT.MiningIOT.controller.DetailVibrationView", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf miningIOT.MiningIOT.view.DetailVibrationView
		 */
		onInit: function () {
			  //Format.numericFormatter(ChartFormatter.getInstance());
     //       var formatPattern = ChartFormatter.DefaultPattern;
     //       // set explored app's demo model on this sample
     //       var oModel = new JSONModel(this.settingsModel);
     //       oModel.setDefaultBindingMode(BindingMode.OneWay);
     //       this.getView().setModel(oModel);

            var oVizFrame = this.oVizFrame = this.getView().byId("idVizFrame");
            // oVizFrame.setVizProperties({
            //     plotArea: {
            //         dataLabel: {
            //             formatString: formatPattern.SHORTFLOAT_MFD2,
            //             visible: true
            //         }
            //     },
            //     valueAxis: {
            //         label: {
            //             formatString: formatPattern.SHORTFLOAT
            //         },
            //         title: {
            //             visible: false
            //         }
            //     },
            //     categoryAxis: {
            //         title: {
            //             visible: false
            //         }
            //     },
            //     title: {
            //         visible: false,
            //         text: 'Revenue by City and Store Name'
            //     }
            // });
            // var dataModel = new JSONModel(this.dataPath + "/medium.json");
            oVizFrame.setModel(this.getOwnerComponent().getModel("VibrationSensorModel"), "VibrationSensorModel");

            var oPopOver = this.getView().byId("idPopOver");
            oPopOver.connect(oVizFrame.getVizUid());
            //oPopOver.setFormatString(formatPattern.STANDARDFLOAT);

            // InitPageUtil.initPageSettings(this.getView());
            // var that = this;
            // dataModel.attachRequestCompleted(function() {
            //     that.dataSort(this.getData());
            // });
		},
		
		formatNotificationLink: function(sNotificationNumber) {
			if(sNotificationNumber !== "") {
				return "https://" + 
				       "ldcisd4.wdf.sap.corp:44302/sap/bc/ui2/flp?sap-client=001&sap-language=EN#MaintenanceNotification-displayFactSheet&//C_ObjPgMaintNotification('" + 
				       sNotificationNumber + "')";
			}
		},
		
		/**
		 * Function to use back navigation to worklist page
		 * @public
		 */
		onNavBack: function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("OverView", true);
			}
		}
	});

});