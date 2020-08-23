if (typeof component_classes['pages_expenses_page'] === "undefined") {
	class pages_expenses_page extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"data_model/category_totals","parent_element":"Xnh5m","arguments":{"uid":"data_model_category_totals_1"}},
            {"component_load_path":"data_model/expenses_data_grid","parent_element":"5VYrS","arguments":{"uid":"data_model_expenses_data_grid_1"}},
            {"component_load_path":"navigation/user_top_nav","parent_element":"za1Zj","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("expenses_page","Expenses");
			super.reset(inputs,propagate);
		}
	    initCustomFunctions() {
            //Custom javascript here
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
	component_classes['pages_expenses_page'] = pages_expenses_page;
}