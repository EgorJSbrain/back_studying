import { CreateVideoDto } from "../dtos/createVideo.dto"
import { Video } from "../models/videoModel"


export const VideoService = {
  async getVideos () {
    const videos = await Video.find()
    
    return videos
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
    const video = await Video.create(data)

    return video
  }
}
