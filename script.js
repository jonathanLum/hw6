document.addEventListener('DOMContentLoaded', bindButtons);

// FORM
function bindButtons()
{
	document.getElementById('submit').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {httpBin:document.getElementById('tosend').value};
		req.open("POST", " http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php", true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load',function()
		{
			if(req.status >= 200 && req.status < 400)
			{
				/*var response = JSON.parse(req.responseText);
				console.log(response);
				var response = JSON.parse(response.data);
				document.getElementById('response').textContent = response.httpBin;*/
			}
		});
		req.send(JSON.stringify(payload));
		document.getElementById('response').textContent = "Submitted to " + document.getElementById('tosend').value + "!";
		event.preventDefault();
	});
}
