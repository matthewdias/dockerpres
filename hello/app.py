from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def index():
    return "Hello World"

@app.route("/json")
def json():
    return "{ \"message\": \"Hello World\" }"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)
