        
        var sliderImages = document.querySelectorAll('.slide');
		var arrowLeft = document.getElementById('arrow-left');
		var arrowRight =  document.getElementById('arrow-right');
		let currentIndex = 0;

		//Clear all the images first
		function clearImages() {
			for (var i = 0; i < sliderImages.length; i++) {
				sliderImages[i].style.display = 'none';
			}
		}

		//Initialize slider
		function startSlider() {
			for (var i = 0; i < sliderImages.length; i++) {
				sliderImages[i].style.display = 'none';
				sliderImages[0].style.display = 'block';
			}
		}

		//Show previous image
		function slideLeft() {
			clearImages();
			sliderImages[currentIndex - 1].style.display = 'block';
			currentIndex--;
		}

		//Show next image
		function slideRight() {
			clearImages();
			sliderImages[currentIndex + 1].style.display = 'block';
			currentIndex++;
		}

		//Add a click event listener to left arrow
		arrowLeft.addEventListener('click', function () {
			if (currentIndex === 0) {
				currentIndex = sliderImages.length;
				//You can disable the left arrow at this point by giving it a disable attribute
				//arrowLeft.disabled = true;
			}
			slideLeft();
		})
          
         //Add a click event listener to right arrow
		arrowRight.addEventListener('click', function () {
			if (currentIndex === sliderImages.length - 1) {
				currentIndex = -1;
			}
			slideRight();
		})
         
         startSlider();
