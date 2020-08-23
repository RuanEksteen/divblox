if (typeof component_classes['pages_expenses_page'] === "undefined") {
	class pages_expenses_page extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"data_model/category_totals","parent_element":"Xnh5m","arguments":{"uid":"data_model_category_totals_1"}},
            {"component_load_path":"data_model/expenses_data_grid","parent_element":"5VYrS","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("expenses_page","Expenses");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_expenses_page'] = pages_expenses_page;
}