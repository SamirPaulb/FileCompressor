import os
import os.path
import webbrowser
from pathlib import Path
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
	# Trying to save file inside the resource directory
	save_path = 'https://filecompressor.samirpaul1.repl.co/static/resource/'
	f.save(f.filename)
	out_path=os.path.join(os.getcwd(),'static','resource',str(f.filename))
	#os.rename(f.filename, save_path + f.filename)
	compress_file(str(f.filename), out_path)
	os.remove(f.filename)
	
	resp = {"filename": str(f.filename),
			"success": True,
			"response": "file saved!"}
	return jsonify(resp), 200
	
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)
