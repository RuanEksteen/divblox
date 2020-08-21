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
	}
	component_classes['data_model_category_totals'] = data_model_category_totals;
}