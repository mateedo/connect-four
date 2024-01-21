from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

client_id = os.getenv("CLIENT_ID")
client_secret = os.getenv("SECRET_ID")

print(client_id, client_secret)



app = Flask(__name__)

#members api route
@app.route("/members")
def members():
    return {"members": ["Member1", "Member2", "Member3"]}


# david is a really cool guy!

if __name__ == "__main__":
    app.run(debug=True)