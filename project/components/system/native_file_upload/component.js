if (typeof(on_system_native_file_upload_ready) === "undefined") {
	function on_system_native_file_upload_ready(load_arguments) {
		// This is required for any component to be registered to the DOM as a divblox component
		this.dom_component_obj = new DivbloxDOMComponent(load_arguments);
		this.handleComponentError = function(ErrorMessage) {
			this.dom_component_obj.handleComponentError(this,ErrorMessage);
		}.bind(this);
		this.handleComponentSuccess = function() {
			this.dom_component_obj.handleComponentSuccess(this);
		}.bind(this);
		this.reset = function(inputs) {
			dxLog("Reset for default_file_upload not implemented");
		}.bind(this);
		this.on_component_loaded = function() {
			this.dom_component_obj.on_component_loaded(this);
			let this_component = this;
			let uid = this_component.getUid();
			dxGetScript(getRootPath()+"project/assets/js/jquery_fileuploader/jquery.fileuploader.min.js", function( data, textStatus, jqxhr ) {
				this_component.initFileUploader();
			});
		}.bind(this);
		this.subComponentLoadedCallBack = function(component) {
			// Implement additional required functionality for sub components after load here
			// dxLog("Sub component loaded: "+JSON.stringify(component));
		}.bind(this);
		this.getSubComponents = function() {
			return this.dom_component_obj.getSubComponents(this);
		}.bind(this);
		this.getUid = function() {
			return this.dom_component_obj.getUid();
		}.bind(this);
		// Component specific code below
		// Empty array means ANY user role has access. NB! This is merely for UX purposes.
		// Do not rely on this as a security measure. User role security MUST be managed on the server's side
		this.allowedAccessArray = [];
		this.eventTriggered = function(event_name,parameters_obj) {
			// Handle specific events here. This is useful if the component needs to update because one of its
			// sub-components did something
			switch(event_name) {
				case '[event_name]':
				default:
					dxLog("Event triggered: "+event_name+": "+JSON.stringify(parameters_obj));
			}
			// Let's pass the event to all sub components
			this.dom_component_obj.propagateEventTriggered(event_name,parameters_obj);
		}.bind(this);
		// Sub component config start
		this.sub_components = {};
		// Sub component config end
		// Custom functions and declarations to be added below
		this.file_upload_array = [];
		this.initFileUploader = function() {
			let uid = this.getUid();
			let this_component = this;
			$('#'+uid+'_file_uploader').fileuploader({
				changeInput: '<div class="fileuploader-input">' +
					'<div class="fileuploader-input-inner">' +
					'<div class="fileuploader-main-icon"></div>' +
					'<div class="fileuploader-input-button"><span>${captions.button}</span></div>' +
					'</div>' +
					'</div>',
				theme: 'dragdrop',
				onSelect: function(item) {
					if (!navigator.onLine) {
						if (!item.html.find('.fileuploader-action-start').length)
							item.html.find('.fileuploader-action-remove').before('<a class="fileuploader-action fileuploader-action-start" title="Upload"><i></i></a>');
					} else {
						item.upload.send();
					}
				},
				upload: {
					url: getComponentControllerPath(this_component),
					data: {f:"handleFilePost",AuthenticationToken:authentication_token,is_native:1},
					type: 'POST',
					enctype: 'multipart/form-data',
					start: false,
					synchron: true,
					beforeSend: function(item) {
						if (!navigator.onLine) {
							dx_has_uploads_waiting = true;
							return false;
						}
					},
					onSuccess: function(result, item) {
						var data = {};
						try {
							data = JSON.parse(result);
						} catch (e) {
							data.hasWarnings = true;
						}
						if (typeof data.Message !== "object") {
							if (data.Message == "ACCESS DENIED") {
								var progressBar = item.html.find('.progress-bar2');
								if(progressBar.length) {
									progressBar.find('span').html(0 + "%");
									progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
									item.html.find('.progress-bar2').fadeOut(400);
								}
								item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
									'<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
								) : null;
								showAlert("Error uploading file: "+data.ComponentFriendlyMessage,"error","OK",false);
								return;
							}
						}
						if (typeof data.AuthenticationToken !== "undefined") {
							authentication_token = data.AuthenticationToken;
							updateAppState('dxAuthenticationToken',authentication_token);
						}
						// if success
						if (data.isSuccess && data.files[0]) {
							item.name = data.files[0].name;
							item.html.find('.column-title > div:first-child').text(data.files[0].name).attr('title', data.files[0].name);
							pageEventTriggered("FileUploaded",item);
						}
						// if warnings
						if (data.hasWarnings) {
							for (var warning in data.warnings) {
								alert(data.warnings);
							}
							
							item.html.removeClass('upload-successful').addClass('upload-failed');
							// go out from success function by calling onError function
							// in this case we have a animation there
							// you can also response in PHP with 404
							return this.onError ? this.onError(item) : null;
						}
						item.html.find('.fileuploader-action-remove').addClass('fileuploader-action-success');
						setTimeout(function() {
							item.html.find('.progress-bar2').fadeOut(400);
						}, 400);
					},
					onError: function(item) {
						var progressBar = item.html.find('.progress-bar2');
						
						if(progressBar.length) {
							progressBar.find('span').html(0 + "%");
							progressBar.find('.fileuploader-progressbar .bar').width(0 + "%");
							item.html.find('.progress-bar2').fadeOut(400);
						}
						
						item.upload.status != 'cancelled' && item.html.find('.fileuploader-action-retry').length == 0 ? item.html.find('.column-actions').prepend(
							'<a class="fileuploader-action fileuploader-action-retry" title="Retry"><i></i></a>'
						) : null;
					},
					onProgress: function(data, item) {
						var progressBar = item.html.find('.progress-bar2');
						
						if(progressBar.length > 0) {
							progressBar.show();
							progressBar.find('span').html(data.percentage + "%");
							progressBar.find('.fileuploader-progressbar .bar').width(data.percentage + "%");
						}
					},
					onComplete: function() {
						dx_has_uploads_waiting = false;
					},
				},
				onRemove: function(item) {
					dxRequestInternal(getComponentControllerPath(this_component),{
						f:"handleRemoveFile",
						file: item.name
					},function(data_obj) {
					
					},function(data_obj) {
					
					});
				},
				captions: {
					feedback: 'Drag and drop files here',
					feedback2: 'Drag and drop files here',
					drop: 'Drag and drop files here',
					or: 'or',
					button: 'Browse files',
				},
				enableApi: true
			});
		}.bind(this);
	}
}