import os
import os.path
import webbrowser
from pathlib import Path
import arrow
import requests
import urllib.request
from flask import Flask, request, render_template, jsonify
from flask_cors import CORS
from functions.PDFcompress import *


app = Flask(__name__)
CORS(app)
@app.route('/', methods= ['GET', 'POST'])

def get_message():
	# if request.method == "GET":
	return render_template("index.html")
@app.route('/upload_static_file', methods=['POST'])

def upload_static_file():
	f = request.files['static_file']
	
	f.save(f.filename)
	# out_path = path where compressed file will be stored
	out_path = os.path.join(os.getcwd(),'static','resource',str(f.filename))
	compress_file(str(f.filename), out_path)
	os.remove(f.filename)

	# auto delete files after 1 hour
	filesPath = out_path
	criticalTime = arrow.now().shift(hours=+1).shift(days=-0)
	for item in Path(filesPath).glob('*'):
	    if item.is_file():
	        print (str(item.absolute()))
	        itemTime = arrow.get(item.stat().st_mtime)
	        if itemTime < criticalTime:
	            #remove it
	            pass

	
	
	resp = {"filename": str(f.filename),
			"success": True,
			"response": "file saved!"}
	return jsonify(resp), 200
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
