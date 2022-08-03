var unnamed;

function delay() {
	unnamed = setTimeout(PageContent, 250);
}

function PageContent() {
    document.getElementById('header').style.display = 'flex';
	document.getElementById('loader').style.display = 'none'; // hide na yung loader, di pwedeng umiikot pa yan kahit nagload na yung page HAHA parang gago lang
	
	var pageContent = document.getElementsByClassName('page_content');
	
	for (let x = 0; x < pageContent.length; x++) {
		pageContent[x].style.display = 'block';
	}
	
	document.getElementsByTagName('footer')[0].style.display = 'block';
	
	// para sa card elements doon sa main page
    const cards = document.querySelector('#cards');
    cards.classList.remove('card-transition');

    const observer = new IntersectionObserver(entries => {
	    entries.forEach(entry => {
	        if(entry.isIntersecting) {
		        cards.classList.add('card-transition');
		        return;
		    }
	    });
    });
	
	observer.observe(document.querySelector('#cards'));
}
