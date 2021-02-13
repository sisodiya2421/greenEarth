from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS
import ice

app = Flask(__name__)

CORS(app)

@app.route('/', methods=['GET'])
def index():
    ice.dailyExtent()
    ice.annualAverage()
    ice.annualChange()
    return render_template('index.html')


if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)