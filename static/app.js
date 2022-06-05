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
	  var url = "https://filecompressor.samirpaul1.repl.co/" + fname;
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

/*
function downloadFile(filename) {
                  var element = document.createElement('a');
                 filename = response.filename; element.setAttribute("https://filecompressor.samirpaul1.repl.co/" + filename);
                  element.setAttribute('download', filename);
                  document.body.appendChild(element);
                  element.click();
                  //document.body.removeChild(element);
            }
            document.getElementById(static_file_response)
                  .addEventListener("click", function () {
                        var text = document.getElementById(static_file_response).value;
                        var filename = "output.txt";
                        downloadFile(filename);
                  }, false);
*/