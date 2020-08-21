if (typeof component_classes['pages_hello_world'] === "undefined") {
	class pages_hello_world extends DivbloxDomBaseComponent {
		constructor(inputs,supports_native,requires_native) {
			super(inputs,supports_native,requires_native);
			// Sub component config start
            this.sub_component_definitions =
                [{"component_load_path":"ungrouped/imageviewer","parent_element":"eXcD3","arguments":{}}];
            // Sub component config end
		}
	    initCustomFunctions() {
            
            // WxQ2L_button Related functionality
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            getComponentElementById(this,"WxQ2L_btn").on(
                "click",
                function () {
                    dxRequestInternal(
                        // Divblox's wrapper function for doing a POST request to the server
                        // Get's the path on the server where this component's .php file resides
                        getComponentControllerPath(this),
                        {
                            f: "checkEmailAddress", // Indicates the function that .php file should execute
                            email_address: getComponentElementById(
                                this,
                                "2DRVm_FormControlInput"
                            ).val(), // We are also
                            // sending the email address as input to the .php file.
                            // NB! CHECK YOUR ELEMENT ID. Divblox AUTO-GENERATES
                            // THIS ID, MEANING YOURS MIGHT NOT BE "baNsD_FormControlInput"
                        },
                        function (data_obj) {
                            // The function that is called when the server provides a "Success" response
                            showAlert(
                                "Success! The server responded with: " + data_obj.Message,
                                "success",
                                "OK",
                                false
                            );
                        }.bind(this),
                        function (data_obj) {
                            // The function that is called when the server
                            // does NOT provide a "Success" response
                            showAlert(
                                "Oh no! The server responded with: " + data_obj.Message,
                                "error",
                                "OK",
                                false
                            );
                        }.bind(this)
                    );
                }.bind(this)
            );
            ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            
        }
        subComponentLoadedCallBack(component) {
            super.subComponentLoadedCallBack(component);
            if (component.getComponentName() === 'ungrouped_imageviewer') {
                component.updateImage('https://divblox.github.io/_media/divblox-logo-1.png');
            }
        }
    }

	component_classes['pages_hello_world'] = pages_hello_world;
}
