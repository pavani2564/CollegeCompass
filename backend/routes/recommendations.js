const express = require('express');
const router = express.Router();
const College = require('../models/College');
require('dotenv').config({ path: './config.env' });

router.post('/recommend', async (req, res) => {
    const { rank, caste, locations, branches, gender } = req.body;

    console.log('Received input:', { rank, caste, locations, branches, gender });

    try {
        const casteField = `${caste.toUpperCase()}_${gender.toUpperCase()}`;

        if (!rank || isNaN(rank)) {
            return res.status(400).json({ error: 'Invalid rank provided.' });
        }

        if (!Array.isArray(branches) || branches.length === 0) {
            return res.status(400).json({ error: 'No branches selected.' });
        }

        if (!Array.isArray(locations) || locations.length === 0) {
            return res.status(400).json({ error: 'No District selected.' });
        }

        const colleges = await College.find({
            DIST: { $in: locations },
            branch_code: { $in: branches },
            [casteField]: { $gte: parseInt(rank, 10), $ne: 0 }
        });

        res.json(colleges);
    } catch (error) {
        console.error('Error fetching colleges:', error);
        res.status(500).json({ error: 'An error occurred while fetching recommendations.' });
    }
});

module.exports = router;
