import mongoose from "mongoose";

const formsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
});

const Forms = mongoose.models.Forms || mongoose.model('Forms', formsSchema);

export default Forms;