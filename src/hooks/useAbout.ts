import { About } from '../@types/types'
import { api } from '../services/axios'

export const useAbout = async (): Promise<About> => {
  const about: About = await api.get('/abouts?populate=*', {}).then((res) => {
    return {
      about: res.data.data[0].attributes.resume,
      profilePic:
        'http://localhost:1337/' +
        res.data.data[0].attributes.profilePicture.data.attributes.url,
    }
  })
  return about
}
