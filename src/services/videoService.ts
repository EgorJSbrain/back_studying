import { CreateVideoDto } from "../dtos/createVideo.dto"
import { Video } from "../models/videoModel"


export const VideoService = {
  async getVideos () {
    try {
      const videos = await Video.find()

      return videos
    } catch {
      return []
    }
  },

  async getVideoById (id: string) {
    try {
      const video = await Video.findOne({ _id: id })

      return video
    } catch {
      return null
    }
  },

  async createVideo (data: CreateVideoDto) {
    try {
      const video = await Video.create(data)

      return video
    } catch {
      return null
    }
  },

  async updateVideo (id: string, data: CreateVideoDto) {
    try {
      const video = await Video.findByIdAndUpdate(id, data)

      return video
    } catch {
      return null
    }
  },

  async deleteVideo (id: string) {
    try {
      const video = await Video.findOneAndRemove({ _id: id })

      return video
    } catch {
      return null
    }
  },

  async deleteAll () {
    try {
      const deleted = await Video.deleteMany({})

      return deleted.deletedCount
    } catch {
      return null
    }
  }
}
