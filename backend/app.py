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
            "facebook": "https://www.facebook.com/share/19dm25eUx6/",
            "instagram": "https://www.instagram.com/ancizar_torres19",
            "linkedin": "https://www.linkedin.com/in/ancizar-torres-lopez-673a591a1",
            "github": "https://github.com/AncizarTorres19"
        },
        "portfolio": "https://ancizartorres19.github.io/portafolio-personal",
        "portfolioRepo": "https://github.com/AncizarTorres19/portafolio-personal",
        "author": "Ancizar Torres"
    }

    return jsonify(value)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))