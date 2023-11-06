import { Schema, model, models } from "mongoose";

const topicSchema = new Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    }
}, { timestamps: true }
)

const Topic = models.Topic || model("Topic", topicSchema)

export default Topic;
