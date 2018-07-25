// Post a user
function login(uname, pass) {
	console.log('pass', pass)
	console.log('uname', uname)
	var url = "http://localhost:5757/api/users/login";
	var data = {};
	data.credentials = uname;
	data.password = pass;
	var json = JSON.stringify(data);

	var xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	xhr.onreadystatechange = function () {
		var users = JSON.parse(this.responseText);
		if (this.readyState == 4 && this.status == "200") {
			console.log(users);
			document.getElementById("txtHint").innerHTML = users.msg;
		} else {
			console.log(users);
		}
	}
	xhr.send(json);

}

// Post a user
// var url = "https://theopallabs.com/api/users/login";

// var data = {};
// data.credentials = "mevaibhav";
// data.password = "123456";
// var json = JSON.stringify(data);

// var xhr = new XMLHttpRequest();
// xhr.open("POST", url, true);
// xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
// xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);

// function postAjax(url, data, success) {
//     console.log('url', url)
//     console.log('data', data)
//     var params = typeof data == 'string' ? data : Object.keys(data).map(
//             function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
//         ).join('&');

//     var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
//     xhr.open('POST', url);
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
//     };
//     // xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
//     xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
//     xhr.send(params);
//     return xhr;
// }