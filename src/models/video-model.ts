import { Schema, model } from 'mongoose'

const VideoSchema = new Schema({
  title: { type: Schema.Types.String, required: true },
})

export const Video = model('Video', VideoSchema)