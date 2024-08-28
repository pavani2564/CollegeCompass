const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    inst_name: { type: String, required: true },
    DIST: { type: String, required: true },
    PLACE: { type: String, required: true },
    branch_code: { type: String, required: true },
    OC_BOYS: { type: Number, min: 0, default: 0 },
    OC_GIRLS: { type: Number, min: 0, default: 0 },
    SC_BOYS: { type: Number, min: 0, default: 0 },
    SC_GIRLS: { type: Number, min: 0, default: 0 },
    ST_BOYS: { type: Number, min: 0, default: 0 },
    ST_GIRLS: { type: Number, min: 0, default: 0 },
    BCA_BOYS: { type: Number, min: 0, default: 0 },
    BCA_GIRLS: { type: Number, min: 0, default: 0 },
    BCB_BOYS: { type: Number, min: 0, default: 0 },
    BCB_GIRLS: { type: Number, min: 0, default: 0 },
    BCC_BOYS: { type: Number, min: 0, default: 0 },
    BCC_GIRLS: { type: Number, min: 0, default: 0 },
    BCD_BOYS: { type: Number, min: 0, default: 0 },
    BCD_GIRLS: { type: Number, min: 0, default: 0 },
    BCE_BOYS: { type: Number, min: 0, default: 0 },
    BCE_GIRLS: { type: Number, min: 0, default: 0 },
    OC_EWS_BOYS: { type: Number, min: 0, default: 0 },
    OC_EWS_GIRLS: { type: Number, min: 0, default: 0 }
});

module.exports = mongoose.model('College', collegeSchema);
