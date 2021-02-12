from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS
import ice

app = Flask(__name__)

CORS(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/temperature', methods=['GET', 'POST'])
def temperature():
    return render_template('temperature.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)