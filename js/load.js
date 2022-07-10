var unnamed;

function delay() {
	unnamed = setTimeout(PageContent, 250);
}

function PageContent() {
	document.getElementById('header').style.display = 'flex';
	document.getElementById('main').style.display = 'block';
	document.getElementById('loader').style.display = 'none';
	document.getElementsByTagName('footer')[0].style.display = 'block';
	try {
		document.getElementById('introtext').style.display = 'inline-block';
		document.getElementById('intro').style.display = 'block';
		document.getElementById('color2').style.display = 'block';
	} catch {
		return;
	}
	
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
