
var bubble_map = new Datamap(
	{
		element: document.getElementById('container'),
		scope: 'world',
	    fills: map_colors, // refer to data.js
	    data: fill_keys, // refer to data.js
        geographyConfig: {
             popupOnHover: false,
             highlightOnHover: false,
    }
});

bubble_map.bubbles(story_data,
    {
        data: fill_keys,
        fills: map_colors,
        popupTemplate: function(geo, data) {
        return '<div class="hoverinfo"><strong>Story: '+data.title+'</strong><br>'+'Country: '
        +data.country_name+'<br>'+data.professor+'</div>' 
        }
    })

$("#title-text").flicker();

// via http://stackoverflow.com/questions/8579643/simple-jquery-scroll-to-anchor-up-or-down-the-page

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}


$(document).ready(function(){
	for (var i = 0; i < story_data.length; i++) { // story_data defined in data.js
		$("#stories").append(
			 '<div class="col-sm-6 col-md-4">'+'<div class="thumbnail">'
             +'<a name="' + story_data[i].country_code + '" />' 
             +'<img class="story-img" src="'+story_data[i].image_link+'" alt="...">'
     		 +'<div class="caption">'+'<h3>'+ story_data[i].title+ '</h3>'
     		 +'<p>Country: '+story_data[i].country_name+'<br>'+story_data[i].professor+'</p>'
        	 +'<p>'+story_data[i].description+'</p>'
        	 +'<audio controls preload="none">'+'<source src="'+story_data[i].audio_link+'" type="audio/mpeg">'+'</audio>' 
        	 +'<div class="toplink">'
        	 +'<button class="btn btn-default btn-md">Back to Map</button>' 
        	 +'</div>' 
        	 +'</div>'+'</div>' + '</div>'
        	 
		)}
		$(".toplink").on('click', function() {
			scrollToAnchor('map');
		})
	}
);

$(".datamaps-bubble").on('click', function(){
    var data_info = $(this).attr("data-info");
    var data_info_json = JSON.parse(data_info);
    var country_code = data_info_json["country_code"];
    scrollToAnchor(country_code); 
})

$(".datamaps-subunit").on('click', function(){
	var country_code = $(this).attr("class").split(' ')[1]; 
    console.log($(this));
	scrollToAnchor(country_code); 
})
