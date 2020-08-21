if (typeof component_classes['pages_admin'] === "undefined") {
	class pages_admin extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"navigation/side_navbar","parent_element":"SideNavAnchor","arguments":{"uid":"navigation_side_navbar_1"}},
            {"component_load_path":"data_model/category_data","parent_element":"RLiZB","arguments":{"uid":"data_model_category_data_1"}},
            {"component_load_path":"data_model/ticket_crud","parent_element":"Zcp5P","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("admin","admin");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_admin'] = pages_admin;
}