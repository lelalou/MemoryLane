from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo, GridFS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app)

# MongoDB Configuration
mongo_uri = "mongodb+srv://amaree:kebnyv-zIsfu9-qegwah@memories.hiqpitc.mongodb.net/memories?retryWrites=true&w=majority"
client = MongoClient(mongo_uri, server_api=ServerApi("1"))
db = client.memories  # Use the 'memories' database

# Initialize GridFS
fs = GridFS(db)


@app.route("/upload", methods=["POST"])
def upload():
    print(request.form)  # Debug print
    print(request.files)  # Debug print for files
    key_phrase = request.form["keyPhrase"]
    text = request.form["text"]
    image = request.files["image"]
    video = request.files.get("video")  # 'video' is optional

    image_id = fs.put(image.read(), content_type=image.content_type) if image else None
    video_id = fs.put(video.read(), content_type=video.content_type) if video else None

    # Create a document to insert in a 'memories' collection
    memory_document = {
        "key_phrase": key_phrase,
        "image_id": image_id,
        "video_id": video_id,
        "text": text,
    }

    # Insert the document into the collection
    result = mongo.db.memories.insert_one(memory_document)

    return (
        jsonify(
            {"message": "Memory uploaded successfully", "id": str(result.inserted_id)}
        ),
        201,
    )


if __name__ == "__main__":
    app.run(debug=True, port=8000)
