const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const XLSX = require('xlsx');
const College = require('./models/College');

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, './config.env') });

const cleanData = (data) => {
    return data.map(record => {
        // Process each key in the record
        Object.keys(record).forEach(key => {
            if (typeof record[key] === 'string') {
                record[key] = record[key].replace(/\r\n/g, ' ').trim();
            }
        });
        return record;
    });
};

const importData = async () => {
    try {
        // Check if MONGO_URI is loaded correctly
        if (!process.env.MONGO_URI) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        // Connect to MongoDB
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Read and parse the XLSX file
        const filePath = path.join(__dirname, 'data', 'data.xlsx');
        const workbook = XLSX.readFile(filePath);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        let data = XLSX.utils.sheet_to_json(sheet);

        // Clean data
        data = cleanData(data);

        // Insert data into MongoDB
        await College.deleteMany(); // Clear the collection before importing
        await College.insertMany(data);

        console.log('Data successfully imported');
    } catch (error) {
        console.error('Error importing data:', error);
    } finally {
        mongoose.connection.close();
        console.log('MongoDB connection closed');
    }
};

importData();
