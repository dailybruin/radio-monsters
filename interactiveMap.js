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
        	for (var i = 0; i < story_data.length; i++) 
        	{
        		if (geo.properties.name == story_data[i].country_name)
            	{
            		return ['<div class="hoverinfo">', story_data[i].title, '<br>',
            		'Country: ',story_data[i].country_name,
            		'<br>', 'Professor: ', story_data[i].professor, '</div>'].join('');
            	}
            }
         
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

$(document).ready(function(){
	for (var i = 0; i < story_data.length; i++) {
		$("#stories").append(
			'<a name="' + story_data[i].country_code + '" />' +
			'<div class="story_box">'+'<h2>'+story_data[i].title+'</h2>'+
			'<p>'+'Professor: '+story_data[i].professor+'</p>'+
			'<p>'+story_data[i].description+'</p>'+
			'<audio controls preload="none">'+'<source src="'+story_data[i].audio_link+'" type="audio/mpeg">'+'</audio>'+
			'<a class = "link_to_top">Back to Top</a>'
		)}
	}
);


$(".datamaps-subunit").on('click', function(){
	console.log($(this).attr("class"));
	var country_code = $(this).attr("class").split(' ')[1]; 
	scrollToAnchor(country_code); 
})

$(".link_to_top").on('click', function() {
	scrollToAnchor("top");
})