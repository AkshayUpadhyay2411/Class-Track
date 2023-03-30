from flask import *
app = Flask(__name__)

@app.route('/')
def home():
    print("request raised")
    return "hello moto"
if __name__== "__main__":
    app.run(debug=True,port=5001)

    

