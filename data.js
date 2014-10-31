
var story_data = [
		{
			"country_name": "Haiti",
			"country_code": "HTI",
			"image_link": "http://flagpedia.net/data/flags/normal/ht.png",
			"professor": "Professor Robin Derby, Latin American and Caribbean History",
			"audio_link": "http://dailybruin.com/images/2014/10/baka.mp3",
			"title": "Bac&aacute;/Baka",
			"description": "Professor Robin Derby shares a few stories she has collected on shapeshifter demons from Haiti and the Dominican Republic."
		},
		{
			"country_name": "Hungary",
			"country_code": "HUN",
			"image_link": "http://flagpedia.net/data/flags/normal/hu.png",
			"professor": "Professor Berend, European History",
			"audio_link": "http://dailybruin.com/images/2014/10/profberendmp3.mp3",
			"title": "Candles in the Windows",
			"description": "Professor Ivan Berend shares a memory of Budapest on November 1, the Day of the Dead, a week after the onset of the Hungarian Revolution of 1956. <br> <br>"
		},
		{
			"country_name": "China",
			"country_code": "CHN",
			"image_link": "http://flagpedia.net/data/flags/normal/cn.png",
			"professor": "Professor Andrea Goldman, Chinese History",
			"audio_link": "http://dailybruin.com/images/2014/10/goldmanaudio1.mp3",
			"title": "Painted Skin",
			"description": "All is not what it seems to be in this piece of Chinese folklore, which features a monster using a sheet and paintbrush to conceal its true identity. <br> <br>"
		},
		{
			"country_name": "India",
			"country_code": "IND",
			"image_link": "http://flagpedia.net/data/flags/normal/in.png",
			"professor": "Professor Nile Green, Islamic History",
			"audio_link": "http://dailybruin.com/images/2014/10/churail.mp3",
			"title": "Churail",
			"description": "Professor Green describes the South Asian spirit possession of the Churail, a female ghost who comes back to take revenge on men after dying in childbirth."
		},
		{
			"country_name": "Morocco",
			"country_code": "MAR",
			"image_link": "http://flagpedia.net/data/flags/normal/ma.png",
			"professor": "Professor Nile Green, Islamic History",
			"audio_link": "http://dailybruin.com/images/2014/10/aishaqadisha.mp3",
			"title": "Aisha Qadisha",
			"description": "Islamic history professor Nile Green recounts the origins of the Aisha Qadisha, female jinns, or genies, that are created by fire and seduce men. <br> <br>"
		},
		{
			"country_name": "Japan",
			"country_code": "JPN",
			"image_link": "http://flagpedia.net/data/flags/normal/jp.png",
			"professor": "Professor Torquil Duthie, Japanese literature",
			"audio_link": "http://dailybruin.com/images/2014/10/aishaqadisha.mp3",
			"title": "The Voice in the Cave",
			"description": "Islamic history professor Nile Green recounts the origins of the Aisha Qadisha, female jinns, or genies, that are created by fire and seduce men. <br> <br>"
		},
		{
			"country_name": "Korea",
			"country_code": "KOR",
			"image_link": "http://flagpedia.net/data/flags/normal/kr.png",
			"professor": "Professor Timothy Tangherlini, Korean Folklore",
			"audio_link": "http://dailybruin.com/images/2014/10/koreastory.mp3",
			"title": "The Mysterious Taxi Passenger",
			"description": "Professor Tangherlini recounts a story told him by a cab driver in Seoul that features a strange passenger who isn’t who she initially appears to be."
		},
		{
			"country_name": "Denmark",
			"country_code": "DNK",
			"image_link": "http://flagpedia.net/data/flags/normal/dk.png",
			"professor": "Professor Tim Tangherlini, Scandanavian literature",
			"audio_link": "http://dailybruin.com/images/2014/10/aishaqadisha.mp3",
			"title": "The Knock at the Caretaker&#39s Door",
			"description": "Professor Tangherlini shares a secondhand account of a woman who knocks on the door in the middle of the night trying to escape her boyfriend."
		},
		{
			"country_name": "France",
			"country_code": "FRA",
			"image_link": "http://flagpedia.net/data/flags/normal/fr.png",
			"professor": "Professor Teofilo Ruiz, Medieval European History",
			"audio_link": "http://dailybruin.com/images/2014/10/france.mp3",
			"title": "The Loudun Possessions",
			"description": "Professor Ruiz separates fact from fiction in the story of real-life French Catholic priest Urbain Grandier, who was burned at the stake after being accused of witchcraft."
		},
		{
			"country_name": "Pakistan",
			"country_code": "PAK", 
			"image_link": "http://flagpedia.net/data/flags/normal/pk.png",
			"professor": "Professor Nile Green, Islamic History",
			"audio_link": "http://dailybruin.com/images/2014/10/churail.mp3",
			"title": "The Churail",
			"description": "Professor Green describes the South Asian spirit possession of the Churail, a female ghost who comes back to take revenge on men after dying in childbirth."
		}
]

var map_colors = {
    'HTI': '#9467bd',
    'HUN': '#00008B',
    'CHN': '#2ca02c',
    'IND': '#e377c2',
    'MAR': '#800080',
    'JPN': '#ff7f0e',
    'KOR': '#1f77b4',
    'DNK': '#663399',  
    'FRA': '#ff0000',
    'PAK': '#006400',
    defaultFill: 'gray'
}

var fill_keys = {
    'JPN': {fillKey: 'JPN'},
    'HTI': {fillKey: 'HTI'},
    'CHN': {fillKey: 'CHN'},
    'IND': {fillKey: 'IND'},
    'HUN': {fillKey: 'HUN'},
    'KOR': {fillKey: 'KOR'},
    'DNK': {fillKey: 'DNK'},
    'MAR': {fillKey: 'MAR'},
    'FRA': {fillKey: 'FRA'},
    'PAK': {fillKey: 'PAK'},
}