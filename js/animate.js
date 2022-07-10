function animate() {
    const cards = document.querySelector('#cards');
    cards.classList.remove('card-transition');

    const observer = new IntersectionObserver(entries => {
	    entries.forEach(entry => {
		    if(entry.isIntersecting) {
			    cards.classList.add('card-transition');
			    return;
		    }
		
		    cards.classList.remove('card-transition');
	    });
    });

    observer.observe(document.querySelector('#cards'));
}