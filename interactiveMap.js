var map = new Datamap(
	{
		element: document.getElementById('container'),
		scope: 'world',
	    fills: {
	        'USA': '#1f77b4',
	        'HTI': '#9467bd',
	        'JPN': '#ff7f0e',
	        'CHN': '#2ca02c',
	        'IND': '#e377c2',
	        'GBR': '#8c564b',
	        'FRA': '#d62728',
	        'PAK': '#7f7f7f',
	        defaultFill: 'gray'
	    },
	    data: {
	        'JPN': {fillKey: 'JPN'},
	        'HTI': {fillKey: 'HTI'},
	        'CHN': {fillKey: 'CHN'},
	        'IND': {fillKey: 'IND'},
	        'GBR': {fillKey: 'GBR'},
	        'FRA': {fillKey: 'FRA'},
	        'PAK': {fillKey: 'PAK'},
	        'USA': {fillKey: 'USA'}
	    },
	        done: function(datamap) {
            datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography, data) {
            	console.log(data.name);
            	console.log(geography.properties);
            });
        },

        geographyConfig: {
        popupTemplate: function(geo, data) {
        	if (geo.properties.name == "United States of America")
            {
            	return ['<div class="hoverinfo">','Country: '+
                geo.properties.name + '<br>'+ 'Professor: ','</div>'].join('');}
         
        }
    }

	});


(function() {
    $("h1").flicker();
}());

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$(".CAN").on('click', function(){
	scrollToAnchor('CAN')
})


