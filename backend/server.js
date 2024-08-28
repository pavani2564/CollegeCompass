const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: "./config.env" });

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");
    })
    .catch(err => {
        console.error("MongoDB Connection Error:", err.message);
        process.exit(1);
    });

// Start server
const port = process.env.PORT || 5000;
app.listen(port, "127.0.0.1", () => {
    console.log(`Server is running on port ${port}`);
});
