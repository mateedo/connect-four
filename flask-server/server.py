from flask import Flask, request, jsonify, url_for, redirect, session
from dotenv import load_dotenv
from flask_cors import CORS
from requests import post, get
import base64
import json
import spotipy
from spotipy.oauth2 import SpotifyOAuth

import os

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("SECRET_ID")



def get_auth_header(token):
    return {"Authorization": "Bearer " + token}


# access_token = "BQAI14o9RasRbnQSoLkHpJ93rNxUOh0ASqnj6r0qBR5X4Xd7L2x9060derH5uWN979E5yKZU13J077jIUlrYRFL9z7tn2GP_Y6MunuZJ4bCLVo9tN_cM4-0eQjscSRU1Ol6gwOC7f5LckoLKf76pnYi95PNcNH0uv6f_35M4DR5cfc51lEIbfsax_v2j7gReL_vX1cEVjl0"

app = Flask(__name__)
app.secret_key = "23898778923479283749"
app.config["SESSION_COOKE_NAME"] = "Mateos cookie"
CORS(app)


@app.route("/")
def login():
    sp_oauth = create_spotify_oath()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)



TOKEN_INFO = "token_info"
@app.route("/redirect")
def redirectPage():
    sp_oauth = create_spotify_oath()
    session.clear()
    code = request.args.get("code")
    token_info = sp_oauth.get_access_token(code)
    session[TOKEN_INFO] = token_info
    return "redirect"


# members api route

def create_spotify_oath():
    return SpotifyOAuth(
        client_id="25d84b900cd64989b5078a55b26bcc6f",
        client_secret="4c2a200c5b814dbabd4825e9fda0e956",
        redirect_uri=url_for('redirectPage', _external=True),
        scope="user-library-read"
    )


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


# david is a really cool guy!

if __name__ == "__main__":
    app.run(debug=True)


