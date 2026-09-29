import os

from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Ancizar",
        "lastname": "Torres",
        "socialMedia": {
            "facebookUser": "Ancizar",
            "instagramUser": "Ancizar",
            "xUser": "Ancizar",
            "linkedin": "Ancizar",
            "githubUser": "AncizarTorres19"
        },
        "blog": "https://github.com/AncizarTorres19",
        "author": "Ancizar Torres"
    }

    return jsonify(value)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))