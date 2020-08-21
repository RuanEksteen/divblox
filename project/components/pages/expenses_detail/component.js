if (typeof component_classes['pages_expenses_detail'] === "undefined") {
	class pages_expenses_detail extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"navigation/user_top_nav","parent_element":"TopNavAnchor","arguments":{"uid":"navigation_user_top_nav_1"}},
            {"component_load_path":"data_model/expenses_crud_create","parent_element":"opJiS","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("expenses_detail","Expenses Detail");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_expenses_detail'] = pages_expenses_detail;
}