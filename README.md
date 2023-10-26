<!-- Author: Samir Paul -->

<div align="center">
  <h1>Online PDF Compression Tool </h1>
</div>

### 💡About The Project:

An online PDF file compression tool to reduce the size of a .pdf file. Python Flask is used to upload the file to a temporary location on the server. 
In the backend, using the ```PDFNetPython``` library that file gets reduced and saved to its final location. After download, the files are automatically deleted from the server after 1 hour. Technologies used in this project: ```Python3```, ```Flask```, ```C```, ```Shell```, ```Nix```, ```Replit```, ```Git```, ```HTML```, ```CSS```, ```JavaScript```.


- [Live Demo 🚀 ](https://filecompressor.samirpaul.repl.co)

## Video:
https://user-images.githubusercontent.com/77569653/172896703-9e4998c1-40da-46ae-810e-780e47a391f9.mp4




- Landing Page:
![screenshot](https://raw.githubusercontent.com/SamirPaulb/assets/main/filecompressor-samirpaul1-repl-co-landing-page.png)


### Flask File Uploading:
 In HTML form, the enctype property is set to ```"multipart/form-data"``` to publish the file to the URL.The URL handler extracts the file from the ```request.files []``` object and saves it to the required location. The path to the upload folder is defined as ```app.config['UPLOAD_FOLDER']``` and maximum size (in bytes) as 
```maximum size (in bytes)```.
The server-side flask script fetches the file from the request object using ```name = request.files['file'].filename```.
On successfully uploading the file, it is saved to the desired location on the server.
Here’s the Python code for the Flask application.
```python
from flask import Flask, render_template, request
from werkzeug import secure_filename
app = Flask(__name__)

@app.route('/upload')
def upload_file():
   return render_template('upload.html')
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename(f.filename))
      return 'file uploaded successfully'
		
if __name__ == '__main__':
   app.run(debug = True)
```


### How PDF is compressed in backend:
```python
import os
import sys
from PDFNetPython3.PDFNetPython import PDFDoc, Optimizer, SDFDoc, PDFNet

def compress_file(input_file: str, output_file: str):
    if not output_file:
        output_file = input_file
    try:
        PDFNet.Initialize()
        doc = PDFDoc(input_file)
        doc.InitSecurityHandler()
        Optimizer.Optimize(doc)
        doc.Save(output_file, SDFDoc.e_linearized)
        doc.Close()
    except Exception as e:
        doc.Close()
        return False
    return True

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_file = sys.argv[2]
    compress_file(input_file, output_file)
```

### File Download:
```js
function downloadFile(filename) {
	if(response !== null) {
		fname = response.filename;
	  var url = "static/resource/" + fname.toString(2);
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
}
```


## 🤔 How to contribute

- [x] Fork this repository;
- [x] Create a branch with your feature: `git checkout -b my-feature`;
- [x] Commit your changes: `git commit -m "feat: my new feature"`;
- [x] Push to your branch: `git push origin my-feature`.

Made with ❤️ by [@SamirPaulb](https://github.com/SamirPaulb) :wave: [Get in touch](https://www.linkedin.com/in/SamirPaul)
