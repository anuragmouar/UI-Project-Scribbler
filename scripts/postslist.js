function removeCard(card){
	document.getElementById(card).parentNode.removeChild(document.getElementById(card));
}

function openPost(user,heading,content){
	window.location.href = "../html/post.html?heading=" + encodeURIComponent(heading.innerText) + "&author=" +
	 encodeURIComponent(user.innerText) + "&content=" +encodeURIComponent(content.innerText);	
}