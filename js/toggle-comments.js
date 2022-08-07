var commentButton = document.getElementById("comment-button");
var commentSection  = document.getElementById("comment-section");
	commentButton.textContent = "Comments";
	commentSection.style.display = 'none';

commentButton.addEventListener('click', function () {
	if (commentButton.textContent == 'Comments') {
		commentSection.style.display = 'block';
		commentButton.textContent = "Minimize";
	} else {
		commentSection.style.display = 'none';
		commentButton.textContent = "Comments";
	}
})