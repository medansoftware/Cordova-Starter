document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Cordova</div><div class="collapsible-body"><span>'+device.cordova+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Model</div><div class="collapsible-body"><span>'+device.model+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Platform</div><div class="collapsible-body"><span>'+device.platform+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device UUID</div><div class="collapsible-body"><span>'+device.uuid+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Version</div><div class="collapsible-body"><span>'+device.version+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Manufacturer</div><div class="collapsible-body"><span>'+device.manufacturer+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Virtual</div><div class="collapsible-body"><span>'+device.isVirtual+'</span></div></li></li>');
	$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Device Serial</div><div class="collapsible-body"><span>'+device.serial+'</span></div></li></li>');
	window.addEventListener('batterystatus', function(status) {
		$('#device_info').append('<li class="collection-item"><li><div class="collapsible-header">Battery</div><div class="collapsible-body"><span>Level : '+status.level+' Is Plugged : '+status.isPlugged+'</span></div></li></li>');
	}, false);
	document.addEventListener('offline', function() {
		console.log('offline');
	}, false);
}