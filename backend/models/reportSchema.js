// Sleep, Water, BP, Calories, Mood, Heart Rate
import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
    user: {
        // type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    sleep: number,
    Water: number,
    Bp: number,
    Calories: number,
    Mood: number,
    HeartRate: number,
});

export const Report = mongoose.model("Report", reportSchema);