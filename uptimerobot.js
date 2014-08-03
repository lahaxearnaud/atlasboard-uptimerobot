widget = {
    //runs when we receive data from the job
    onData: function(el, data) {

    	for(var i in data.status) {

    		var site = data.status[i],
    			badgeClass = '',
    			element = $('#' + site.id, el);

	    	switch(parseInt(site.status)) {
	    		default:
	    		case 0:
	    		case 1:
	    		case 8:
	    			badgeClass = 'warning';
	    		break;

	    		case 2:
	    			badgeClass = 'good';
	    		break;

	    		case 9:
	    			badgeClass = 'down';
	    		break;
	    	}

	    	if(element.length !== 1) {
	    		$('.projects', el).append('<tr id="'+site.id+'"><td><a href="'+site.url+'">'+site.friendlyname+'</a></td><td><span class="badge badge-'+badgeClass+'">&nbsp;</span></td></tr>');
	    	} else {
	    		$('td:eq(1)', element[0]).html('<span class="badge badge-'+badgeClass+'">&nbsp;</span>');
	    	}
	    }
    }
};