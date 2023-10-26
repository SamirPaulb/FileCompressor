let response = null; 
function uploadFile(form)
{
 const formData = new FormData(form);
 var oOutput = document.getElementById("static_file_response")
 var oReq = new XMLHttpRequest();
     oReq.open("POST", "upload_static_file", true);
 oReq.onload = function(oEvent) {
     if (oReq.status == 200) {
       oOutput.innerHTML = "Uploaded!";
		 response = JSON.parse(oReq.response);
       console.log(response)
		//var url = oReq.response;
		//download(, "file.txt")
     } else {
       oOutput.innerHTML = "Error occurred when trying to upload your file.<br \/>";
     }
     };
 oOutput.innerHTML = "Sending file!";
 console.log("Sending file!")
 oReq.send(formData);
}

function downloadFile(filename) {
	if(response !== null) {
	console.log("response is not empty");
		fname = response.filename;
	  var url = "https://filecompressor.samirpaul.repl.co/static/resource/" + fname.toString(2);
	  console.log(url);
	
	    fetch(url)
	    .then(response => response.blob())
	    .then(blob => {
	      const link = document.createElement("a");
	      link.href = URL.createObjectURL(blob);
	      link.download = fname;
	      link.click();
	  })
	  .catch(console.error);
	}
	console.log("exit download");
}
