if (typeof component_classes['data_model_expenses_data_grid_update'] === "undefined") {
	class data_model_expenses_data_grid_update extends DivbloxDomEntityInstanceComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
			this.sub_component_definitions = [];
			// Sub component config end
			this.included_attribute_array = ['ExpenceName','ExpenseValue',];
			this.included_relationship_array = ['Category',];
			this.constrain_by_array = [];
			this.data_validation_array = [];
			this.custom_validation_array = [];
			this.required_validation_array = ['ExpenceName','ExpenseValue','Category',];
			this.initCrudVariables("Expenses");
		}
		reset(inputs,propagate) {
			if (typeof inputs !== "undefined") {
				this.setEntityId(inputs);
			}
			super.reset(inputs,propagate);
		}
		eventTriggered(event_name,parameters_obj) {
			// Handle specific events here. This is useful if the component needs to update because one of its
			// sub-components did something
			switch(event_name) {
				case 'expenses_updated':
				case 'expenses_created':
				case 'expenses_deleted':
					this.reset();
					break;
				case 'expenses_selection_deleted':
					this.reset();
					break;
				default:
					dxLog("Event triggered: "+event_name+": "+JSON.stringify(parameters_obj));
			}
			// Let's pass the event to all sub components
			this.propagateEventTriggered(event_name,parameters_obj);
		}
	}
	component_classes['data_model_expenses_data_grid_update'] = data_model_expenses_data_grid_update;
}