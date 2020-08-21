if (typeof component_classes['pages_accounts'] === "undefined") {
	class pages_accounts extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"navigation/top_navbar","parent_element":"TopNavAnchor","arguments":{"uid":"navigation_top_navbar_1"}},
            {"component_load_path":"data_model/account_administration","parent_element":"2rE5Q","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("accounts","Accounts");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_accounts'] = pages_accounts;
}