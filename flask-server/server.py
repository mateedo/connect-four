from flask import Flask, request, jsonify, url_for, redirect, session
from dotenv import load_dotenv
from flask_cors import CORS
from requests import post, get
import json
import spotipy
import time
from spotipy.oauth2 import SpotifyOAuth

import os

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("SECRET_ID")

app = Flask(__name__)
app.secret_key = "23898778923479283749"
app.config["SESSION_COOKE_NAME"] = "Mateos cookie"
CORS(app)


@app.route("/")
def login():
    sp_oauth = create_spotify_oauth()
    auth_url = sp_oauth.get_authorize_url()
    return redirect(auth_url)


TOKEN_INFO = "token_info"


@app.route('/authorize')
def authorize():
    sp_oauth = create_spotify_oauth()
    session.clear()
    code = request.args.get('code')
    token_info = sp_oauth.get_access_token(code)
    session["token_info"] = token_info
    return redirect("/getTracks")

@app.route('/callback')
def callback():
    return redirect("http://localhost:3000/weekly")

def create_spotify_oauth():
    return SpotifyOAuth(
        client_id="25d84b900cd64989b5078a55b26bcc6f",
        client_secret="4c2a200c5b814dbabd4825e9fda0e956",
        redirect_uri=url_for('callback', _external=True),
        scope="user-library-read user-top-read"
    )


@app.route("/getTracks")
def getTracks():
    try:
        token_info = get_token()
    except:
        print("user not logged in")
        return redirect("/")

    sp = spotipy.Spotify(auth=token_info['access_token'])
    # tracks = sp.current_user_top_tracks(limit=50, offset=0)
    # tracks = sp.current_user_top_tracks(time_range='short_term', limit=50, offset=0)
    #playlists = sp.current_user_playlists()
    test = []
    tracks = sp.current_user_saved_tracks(limit=20, offset=0, market=None)['items']
    for i in range(0,20):
        test+=[tracks[i]["track"]['name']]
    return test


def get_token():
    token_info = session.get(TOKEN_INFO, None)
    if not token_info:
        raise Exception("ifjadfajldf")
    now = int(time.time())
    is_expired = token_info["expires_at"] - now < 60
    if is_expired:
        sp_oauth = create_spotify_oauth()
        token_info = sp_oauth.refresh_access_token(token_info["refresh_token"])
    return token_info


@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


# david is a really cool guy!

if __name__ == "__main__":
    app.run(debug=True)

