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
	  sortByTitle();
	  document.getElementById('sortbutton').innerHTML = 'Title';
	  break;
  }
}

var mapDataToHtmlTable = function() {
	var tableElement = '<table cellspacing="0" id="mytable"><thead class="header"><th style="width:36vh">Title</th><th style="width:32vh">Artist(s)</th><th>Notes</th><th>Collaborators</th><th>Video links</th></thead><tbody>';
	var table = document.getElementById('mytable');
	
	var midis = [{
		"name": "The Piano",
		"artist": "unknown composer",
		"note_count": "23000",
		"collab": "",
		"video_url": "<a href='https://www.youtube.com/watch?v=JtZbgBHNRpA'>Click here</a>"
	},
	{
		"name": "Uchiage Hanabi",
		"artist": "DAOKO x Kenshi Yonezu",
		"note_count": "200000",
		"collab": "29FroilanJR",
		"video_url": "<a href='https://www.youtube.com/watch?v=G7lPWdfbodk'>Click here</a>"
	},
	{
		"name": "Brand New World <br><i style='font-size:10pt;'>('D4DJ First Mix' Ep. 10 Insert Song)</i>",
		"artist": "Happy Around!",
		"note_count": "50000",
		"collab": "",
		"video_url": "<a href='https://www.youtube.com/watch?v=JYqCcJxh8Dg'>Click here</a>"
	},
	{
		"name": "FIRE BIRD",
		"artist": "Roselia",
		"note_count": "166000",
		"collab": "",
		"video_url": "<a href='https://www.youtube.com/watch?v=eIB41bIcUhY'>Click here</a>"
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
		"video_url": "<a href='https://www.youtube.com/watch?v=z96D_XvRA1o'>Click here</a>"
	},
	{
		"name": "Susume→Tomorrow",
		"artist": "Nitta Emi, Uchida Aya, Mimori Suzuko",
		"note_count": "41000",
		"collab": "",
		"video_url": "<a href='https://www.youtube.com/watch?v=D9g3R1swA6I'>Click here</a>"
	},
	{
		"name": "ROZEN HORIZON",
		"artist": "Roselia",
		"note_count": "159000",
		"collab": "",
		"video_url": "<a href='https://www.youtube.com/watch?v=lPkdKY1TPo4'>Click here</a>"
	}];
	
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