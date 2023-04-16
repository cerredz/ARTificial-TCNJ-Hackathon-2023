from flask import Flask
from flask_cors import CORS
from threading import Thread
from ai import custom_img
app = Flask(__name__)
CORS(app)

@app.route("/members")
def home():
    return {"members": ["Member1", "Member2", "Member3"]}

@app.route("/calculate/<string:a>/<string:b>")
def create(a, b):
    url1 = "../frontend/public/images/" + a
    url2 = "../frontend/public/images/" + b
    custom_img(url1, url2)
    #thread = Thread(target=custom_img(url1=url1, url2=url2))
    #thread.start()




    #custom_img(url1, url2)
    #result = testfunction(a, b)
    #return {"result": result}
    return {"img1": a, "img2": b}

if __name__ == '__main__':
    app.run(debug=True)

