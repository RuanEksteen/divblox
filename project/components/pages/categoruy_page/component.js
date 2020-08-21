if (typeof component_classes['pages_categoruy_page'] === "undefined") {
	class pages_categoruy_page extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"data_model/category_crud","parent_element":"FNfps","arguments":{"uid":"data_model_category_crud_1"}},
            {"component_load_path":"navigation/user_top_nav","parent_element":"lBKor","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("categoruy_page","Categories");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_categoruy_page'] = pages_categoruy_page;
}