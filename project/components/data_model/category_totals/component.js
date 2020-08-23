if (typeof component_classes['data_model_category_totals'] === "undefined") {
	class data_model_category_totals extends DivbloxDomEntityDataListComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
			this.sub_component_definitions = [];
			// Sub component config end
			this.included_attributes_object =
				{"CategoryName":"Normal","TotalExpenses":"Normal"};
			this.included_relationships_object =
				[];
			this.constrain_by_array = [];
			this.initDataListVariables("Category");
		}
		eventTriggered(event_name,parameters_obj) {
			// Handle specific events here. This is useful if the component needs to update because one of its
			// sub-components did something
			switch(event_name) {
				case 'expenses_updated':
				case 'expenses_created':
				case 'expenses_deleted':
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
	component_classes['data_model_category_totals'] = data_model_category_totals;
}