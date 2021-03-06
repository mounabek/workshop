sap.ui.jsview("UI.view.odata", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf UI.view.odata
	 */
	getControllerName: function() {
		return "UI.controller.odata";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf UI.view.odata
	 */
		
	createContent : function(oController) {

		//Create table and its columns
		var oTable = new sap.m.Table("idPrdList", {   
				      inset : true, 
				      headerText : "{i18n>tableSalesByBPGroup}",
				      headerDesign : sap.m.ListHeaderDesign.Standard, 
				      mode : sap.m.ListMode.None,   
				      includeItemInSelection : false,   
				      growing : true,
				      growingThreshold :5
				    });
				    
	    var col1 = new sap.m.Column("col1",{
	    	header: new sap.m.Label({
	    		text:"{i18n>tableColumnHeaderGroupCode}"
	    	})
	    });
	    oTable.addColumn(col1); 
	    
	    var col2 = new sap.m.Column("col2",{
	    	header: new sap.m.Label({
	    		text:"{i18n>tableColumnHeaderGroupName}"
	    	})
	    });
	    oTable.addColumn(col2); 
	    
	    var col3 = new sap.m.Column("col3",{
	    	header: new sap.m.Label({
	    		text:"{i18n>tableColumnHeaderTotalAmount}"
	    	})
	    });
	    oTable.addColumn(col3);    
	    
	    var col4 = new sap.m.Column("col4",{
	    	header: new sap.m.Label({
	    		text:"{i18n>tableColumnHeaderGrossProfit}"
	    	})
	    });
	    oTable.addColumn(col4);    

	    var colItems = new sap.m.ColumnListItem("colItems",{
	    	type:"Active"
	    });
	    
	    var txtNAME = new sap.m.Text({
	    	text:"{GroupCode}"
	    });
	    colItems.addCell(txtNAME); 
	        
	    var txtNAME2 = new sap.m.Text({
	    	text:"{GroupName}"
	    });
	    colItems.addCell(txtNAME2); 
	       
	    var txtNAME3 = new sap.m.Text({
	    	text:"{DocTotal}"
	    });
	    colItems.addCell(txtNAME3);
	    
	    var txtNAME4 = new sap.m.Text({
	    	text:"{GrosProfit}"
	    });
	    colItems.addCell(txtNAME4);
	   
	    //Create button to load the data into the table
	    var buttonLoad = new sap.m.Button({
					text : "{i18n>buttonLoad}",
					width: "150px",
	    			press: [oController.onPressLoadOdata, oController]
				});
	    
		// create the second page with a back button
		var odataPage = new sap.m.Page({
			title : "{i18n>titleODATA}",
			showNavButton : true,
			navButtonPress:[oController.onPressGoBack, oController],
			content: [
				buttonLoad,
				oTable
			]
		});
		
	    return odataPage;
	}
});