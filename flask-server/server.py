from flask import Flask, request, jsonify
from dotenv import load_dotenv
from flask_cors import CORS
from requests import post, get
import json

import os

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("SECRET_ID")

print(client_id, client_secret)

access_token="BQAI14o9RasRbnQSoLkHpJ93rNxUOh0ASqnj6r0qBR5X4Xd7L2x9060derH5uWN979E5yKZU13J077jIUlrYRFL9z7tn2GP_Y6MunuZJ4bCLVo9tN_cM4-0eQjscSRU1Ol6gwOC7f5LckoLKf76pnYi95PNcNH0uv6f_35M4DR5cfc51lEIbfsax_v2j7gReL_vX1cEVjl0"



app = Flask(__name__)
CORS(app)


def get_auth_header(token):
    return {"Authorization": "Bearer " + token}

#members api route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}



@app.route("/testing")
def test():
    token = request.args.get('token')
    artist_name = request.args.get('artist_name')

    if not token or not artist_name:
        return jsonify({"error": "Missing token or artist_name parameters"}), 400

    url = "https://api.spotify.com/v1/search"
    headers = get_auth_header(token)
    query = f"?q={artist_name}&type=artist&limit=1"
    query_url = url + query
    result = get(query_url, headers=headers)

    if result.status_code == 200:
        json_result = result.json()
        print(json_result)
        return jsonify(json_result)
    else:
        return jsonify({"error": f"Error: {result.status_code}", "message": result.text}), 500




# david is a really cool guy!

if __name__ == "__main__":
    app.run(debug=True)