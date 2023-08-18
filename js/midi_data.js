// my reaction to that js: :o :o :o		- Eblmaozn, 2022

function switchOptions() {
  var sort_option = document.getElementById('sortbutton').innerHTML;
  
  switch(sort_option) {
	case 'Title':
	  sortByArtistName();
	  document.getElementById('sortbutton').innerHTML = 'Artist';
	  break;
	case 'Artist':
	  sortByCount();
	  document.getElementById('sortbutton').innerHTML = 'Note count';
	  break;
	case 'Note count':
	  mapDataToHtmlTable();
	  document.getElementById('descending').checked = false;
	  document.getElementById('descending').style.display = 'none';
	  document.getElementsByTagName('label')[0].style.display = 'none';
	  document.getElementById('sortbutton').innerHTML = 'Release date';
	  break;
	case 'Release date':
	  sortByTitle();
	  document.getElementById('descending').style.display = '';
	  document.getElementsByTagName('label')[0].style.display = '';
	  document.getElementById('sortbutton').innerHTML = 'Title';
	  break;
  }
}

var mapDataToHtmlTable = function() {
	var tableElement = '<table cellspacing="0" id="mytable"><thead class="header"><th style="width:36vh">Title</th><th style="width:32vh">Artist(s)</th><th>Notes</th><th>Collaborators</th><th>Video links</th></thead><tbody>';
	var table = document.getElementById('mytable');
	
	var midis = [{
		"name": "The Piano<br><i style='font-size:10pt'>(\"Dancing Line\" OST)</i>",
		"artist": "unknown composer",
		"note_count": "23000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=JtZbgBHNRpA'>YouTube link</a>"
	},
	{
		"name": "Uchiage Hanabi",
		"artist": "DAOKO x Kenshi Yonezu",
		"note_count": "200000",
		"collab": "29FroilanJR",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=G7lPWdfbodk'>YouTube link</a>"
	},
	{
		"name": "Brand New World <br><i style='font-size:10pt;'>('D4DJ First Mix' Ep. 10 Insert Song)</i>",
		"artist": "Happy Around!",
		"note_count": "50000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=JYqCcJxh8Dg'>YouTube link</a>"
	},
	{
		"name": "FIRE BIRD",
		"artist": "Roselia",
		"note_count": "166000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=eIB41bIcUhY'>YouTube link</a>"
	},
	{
		"name": "The Rumbling",
		"artist": "SiM",
		"note_count": "90000",
		"collab": "OddPandemonium03",
		"video_url": "not yet available :("
	},
	{
		"name": "Sore wa Bokutachi no Kiseki <br><i style='font-size:10pt;'>(TV Size)</i>",
		"artist": "µ's",
		"note_count": "47000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=z96D_XvRA1o'>YouTube link</a>"
	},
	{
		"name": "Susume→Tomorrow",
		"artist": "Nitta Emi, Uchida Aya, Mimori Suzuko",
		"note_count": "41000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=D9g3R1swA6I'>YouTube link</a>"
	},
	{
		"name": "ROZEN HORIZON",
		"artist": "Roselia",
		"note_count": "159000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=lPkdKY1TPo4'>YouTube link</a>"
	},
	{
		"name": "Dekoboko<br><i style='font-size:10pt'>(TV Size)</i>",
		"artist": "Kiyoe Yoshioka",
		"note_count": "39000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=0AJLgs6IFpM'>YouTube link</a>"
	},
	{
		"name": "Realize<br><i style='font-size:10pt'>(Re:Zero kara Hajimeru Isekai Seikatsu S2 OP1)</i>",
		"artist": "Konomi Suzuki",
		"note_count": "363636",
		"collab": "Philippine Black MIDI Team",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=zfdr1NMB-iI'>YouTube link</a>"
	},
	{
		"name": "Futari Pinocchio<br><i style='font-size:10pt'>(\"Mamahaha no Tsurego ga Motokano datta\" ED)</i>",
		"artist": "harmoe",
		"note_count": "22900",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=vGcIt6a4hLo'>YouTube link</a>"
	},
	{
		"name": "Kagome<br><i style='font-size:10pt'>(aka \"caloocan boi theme\", \"eh paano kung\")</i>",
		"artist": "Lo Ki",
		"note_count": "87000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=A1XRK05qiPg'>YouTube link</a>"
	},
	{
		"name": "ALiCE<br><i style='font-size:10pt'>(\"DJMAX RESPECT\" OST)</i>",
		"artist": "장예나 / 장미",
		"note_count": "108000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=Grc47i9CIpw'>YouTube link</a>"
	},
	{
		"name": "Happy Nyan! Days",
		"artist": "A·ZU·NA",
		"note_count": "76000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=9TJNLfQb4Wg'>YouTube link</a>"
	},
	{
		"name": "Kuchizuke Diamond<br><i style='font-size:10pt'>(\"Yamada-kun to 7-nin no Majo\" OP)</i>",
		"artist": "WEAVER",
		"note_count": "98765",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=jxYrkUuAzio'>YouTube link</a>"
	},
	{
		"name": "Colorful Dreams! Colorful Smiles!<br><i style='font-size:10pt'>(TV Size)</i>",
		"artist": "Nijigasaki High School Idol Club",
		"note_count": "24000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=jxYrkUuAzio'>YouTube link</a>"
	},
	{
		"name": "IDOL<br><i style='font-size:10pt'>(TV Size) ('Oshi no Ko' OP)</i>",
		"artist": "YOASOBI",
		"note_count": "67890",
		"collab": "29FroilanJR, Emblazon",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=8SYEJ0PZPfI'>YouTube link</a>"
	},
	{
		"name": "Bokura wa Ima no Naka de<br><i style='font-size:10pt'>(TV Size) ('Love Live! School idol project Season 1' OP)</i>",
		"artist": "µ's",
		"note_count": "36500",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=v2DkvimztR0'>YouTube link</a>"
	},
	{
		"name": "NAME<br><i style='font-size:10pt'>(TV Size) ('Suki na Ko ga Megane wo Wasureta' OP)</i>",
		"artist": "tsuzuri",
		"note_count": "33333",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=2p4hkSYFuxc'>YouTube link</a>"
	},
	{
		"name": "Paraglider<br><i style='font-size:10pt'>(TV Size) ('Yumemiru Danshi wa Genjitsushugisha' OP)</i>",
		"artist": "Kaori Ishihara",
		"note_count": "40000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=OuCXGA4OcfY'>YouTube link</a>"
	},
	{
		"name": "START:DASH!!<br><i style='font-size:10pt'>('Love Live! School idol project' OST)</i>",
		"artist": "µ's",
		"note_count": "120000",
		"collab": "",
		"video_url": "<a class='yt_link' href='https://www.youtube.com/watch?v=281nj6UeiCY'>YouTube link</a>"
	},];
	
	midis.forEach((item, index) => {
		tableElement += '<tr>';
		tableElement += '<td><b>' + midis[index].name + '</b></td>';
		tableElement += '<td>' + midis[index].artist + '</td>';
		tableElement += '<td align="center">' + midis[index].note_count + '</td>';
		tableElement += '<td>' + midis[index].collab + '</td>';
		tableElement += '<td>' + midis[index].video_url + '</td>';
		tableElement += '</tr>'
	})
	
	tableElement += '</tbody></table>';
	document.getElementById('tableSection').innerHTML = tableElement;
}

var sortByCount = function() {
	var descending = document.getElementById('descending').checked;
	if (descending === false) {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(2)').text();
			var tdb = $(b).find('td:eq(2)').text();
		
			return +tda > +tdb ? 1
				: +tda < +tdb ? -1
				: 0;
		}).appendTo($tbody);	
	} else {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(2)').text();
			var tdb = $(b).find('td:eq(2)').text();
		
			return +tda < +tdb ? 1
				: +tda > +tdb ? -1
				: 0;
		}).appendTo($tbody);	
	}
};

var sortByTitle = function() {
	var descending = document.getElementById('descending').checked;
	if (descending === false) {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(0)').text();
			var tdb = $(b).find('td:eq(0)').text();
		
			return tda > tdb ? 1
				: tda < tdb ? -1
				: 0;
		}).appendTo($tbody);	
	} else {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(0)').text();
			var tdb = $(b).find('td:eq(0)').text();
		
			return tda < tdb ? 1
				: tda > tdb ? -1
				: 0;
		}).appendTo($tbody);	
	}
};

var sortByArtistName = function() {
	var descending = document.getElementById('descending').checked;
	if (descending === false) {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(1)').text();
			var tdb = $(b).find('td:eq(1)').text();
		
			return tda > tdb ? 1
				: tda < tdb ? -1
				: 0;
		}).appendTo($tbody);	
	} else {
		var $tbody = $('table tbody');
		$tbody.find('tr').sort(function(a,b) {
			var tda = $(a).find('td:eq(1)').text();
			var tdb = $(b).find('td:eq(1)').text();
		
			return tda < tdb ? 1
				: tda > tdb ? -1
				: 0;
		}).appendTo($tbody);	
	}
};

var search = function() {
    var input, filter, table, tr, td, i, txtValue, searchValue, searchOptions, rowCount;

    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytable");
    tr = table.getElementsByTagName("tr");
    searchOptions = document.getElementById('searchoptions');
    searchValue = searchOptions.selectedIndex;

    if (searchValue == 0) {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    } else if (searchValue == 1) {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}

function showModal() {
	document.getElementById('whyPrivate').style.display = 'block';
}