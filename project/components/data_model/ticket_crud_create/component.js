if (typeof component_classes['data_model_ticket_crud_create'] === "undefined") {
	class data_model_ticket_crud_create extends DivbloxDomEntityInstanceComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
			this.sub_component_definitions = [];
			// Sub component config end
			this.included_attribute_array = ['TicketName','TicketDescription','TicketDueDate','TicketUniqueId','TicketStatus',];
			this.included_relationship_array = ['Category',];
			this.constrain_by_array = [];
			this.data_validation_array = [];
			this.custom_validation_array = [];
			this.required_validation_array = ['TicketName','TicketDescription','TicketDueDate','TicketStatus','Category',];
			this.initCrudVariables("Ticket");
		}
	    initCustomFunctions() {
            
            // oRfGG_button Related functionality
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            getComponentElementById(this,"oRfGG_btn").on("click", function() {
                // Example code that executes when the button is clicked
            	// Add the trigger element to the loading element array. This shows a loading animation on the trigger
                // element while it waits for a response or function return
                let element_id = addTriggerElementToLoadingElementArray(getComponentElementById(this,"oRfGG_btn"),"Nice Loading text");
                // Example: once your function has executed, call removeTriggerElementFromLoadingElementArray to remove
                // loading animation
                setTimeout(function() {
                    removeTriggerElementFromLoadingElementArray(element_id);
                },3000);
            }.bind(this));
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
        }
   	}
	component_classes['data_model_ticket_crud_create'] = data_model_ticket_crud_create;
}