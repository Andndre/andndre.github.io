export function is404() {
	const url = window.location.href;
	console.log(url);
	const http = new XMLHttpRequest();
	http.open('HEAD', url, false);
	http.send();
	if (http.status != 404) return true;
	else return false;
}
