from flask import Flask, render_template, request, jsonify

from chat import get_response

app = Flask(__name__)

@app.get("/")
def index_get():
    return render_template("base.html")
@app.get("/test")
def test():
    return render_template("test.html")
@app.post("/predict")
def predict():
    text = request.get_json().get("message")
    # TODO: check if text is valid
    response = get_response(text)
    message = {"answer": response}
    return jsonify(message)


@app.route("/get")
def get_bot_response():
    userText = request.args.get('msg')
    datas = str(get_response(userText))
    # message = [{'data': datas}]
    # return str(get_response(userText))
    # return jsonify({'response': message})
    return jsonify({'response': datas})


if __name__ == "__main__":
    app.run(debug=True)