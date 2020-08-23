if (typeof component_classes['data_model_expenses_data_grid_create'] === "undefined") {
	class data_model_expenses_data_grid_create extends DivbloxDomEntityInstanceComponent {
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
	}
	component_classes['data_model_expenses_data_grid_create'] = data_model_expenses_data_grid_create;
}