if (typeof component_classes['pages_my_profile'] === "undefined") {
	class pages_my_profile extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"data_model/current_user_profile_manager","parent_element":"crXWF","arguments":{"uid":"data_model_current_user_profile_manager_1","account_id":1}},
            {"component_load_path":"navigation/user_top_nav","parent_element":"7ZfSN","arguments":{}}];
            // Sub component config end
		}
		reset(inputs,propagate) {
			setActivePage("profile","My Profile");
			super.reset(inputs,propagate);
		}
	}
	component_classes['pages_my_profile'] = pages_my_profile;
}