const express = require("express");
const multer = require('multer');
const app  = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const port = 8000; 
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.connect('mongodb+srv://amaree:kebnyv-zIsfu9-qegwah@memories.hiqpitc.mongodb.net/memories?retryWrites=true&w=majority')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Memory Schema
const memoriesSchema = new mongoose.Schema({
    keyPhrase: String, 
    image: Buffer,
    imageContentType: String,
    video: Buffer, // If you're storing the video in the database
    videoContentType: String,
    text: String
});

// Memory Model
const Memory = mongoose.model('Memory', memoriesSchema);

// Multer Configuration
const upload = multer({
    limits: {
        fileSize: 16000000 // Limit file size to 16MB, adjust as needed
    },
    storage: multer.memoryStorage() // Use memory storage
});

app.post('/upload', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), async (req, res) => {
    try {
        // Logs to help you see what is being received
        console.log(req.body); // To check the text fields
        console.log(req.files); // To check the files

        const memory = new Memory({
            keyPhrase: req.body.keyPhrase, // Assuming it's a string
            image: req.files['image'] ? req.files['image'][0].buffer : null,
            imageContentType: req.files['image'] ? req.files['image'][0].mimetype : null,
            video: req.files['video'] ? req.files['video'][0].buffer : null,
            videoContentType: req.files['video'] ? req.files['video'][0].mimetype : null,
            text: req.body.text // Make sure this matches the name attribute in your form
        });

        await memory.save();
        res.status(201).send('Memory uploaded successfully');
    } catch (error) {
        console.error('Error processing upload:', error);
        res.status(500).send('Internal Server Error');
    }
});




app.get('/images/:id', async (req, res) => {
    try {
        const memory = await Memory.findById(req.params.id);

        if (!memory || !memory.image) {
            throw new Error('Image not found');
        }

        res.set('Content-Type', memory.imageContentType);
        res.send(memory.image);
    } catch (error) {
        res.status(404).send('Image not found: ' + error.message);
    }
});


// Start Server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});