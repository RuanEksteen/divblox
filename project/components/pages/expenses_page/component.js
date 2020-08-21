if (typeof component_classes['pages_expenses_page'] === "undefined") {
	class pages_expenses_page extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"data_model/expenses_crud","parent_element":"W55d0","arguments":{"uid":"data_model_expenses_crud_1"}},
            {"component_load_path":"navigation/user_top_nav","parent_element":"yPNo2","arguments":{"uid":"navigation_user_top_nav_1"}},
            {"component_load_path":"data_model/category_totals","parent_element":"VT13b","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("expenses_page","Expenses");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_expenses_page'] = pages_expenses_page;
}