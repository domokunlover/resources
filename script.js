function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



initTableOfContents();

function initTableOfContents() {
	const container = document.querySelector("#toc");
	if (!container) return;

	const allHeadings = document.querySelectorAll("h2");
	if (allHeadings.length < 2) return;
	let output = "<ol>";
	[...allHeadings].forEach((headingEl) => {
		const title = headingEl.innerHTML;
		const link =
			headingEl.getAttribute("id") ||
			encodeURI(
				title
					.replaceAll(" ", "-")
					.replaceAll("#", "")
					.replaceAll("&", "")
					.replaceAll(/<[^>]*>?/gm, "")
					.replaceAll("--", "-")
			).toLowerCase();
		headingEl.setAttribute("id", link);
		output += `<li><a onmouseover="mechanical.playclip()" onclick="flashlight.playclip()" href="#${link}" class="link">${title}</a></li>`;
	});
	container.innerHTML = output + "</ol>";
}


const tabTitle = document.title;
if (tabTitle !== "TITLE") {
  document.title = tabTitle + " — resources";
}

(function($){
$(document).ready(function(){
$("[title]").style_my_tooltips({
tip_follows_cursor: true,
tip_delay_time:0,
tip_fade_speed:0,
attribute:"title"
});
});
})(jQuery);







const footerHTML = `
&copy; 2026 | <a href="https://tristansgrave.neocities.org" target="_blank">Personal Site</a> | <a href="https://github.com/domokunlover/resources" target="_blank">Github Repo</a> | <a href="/resources/index.html">Go Home</a>
`


document.querySelector("footer").innerHTML = footerHTML;

initializeSearch?.();