import { Experience, ExperienceRes } from '../@types/types'
import { api } from '../services/axios'

export const useExperiences = async (): Promise<Experience[]> => {
  const experiences: Experience[] = []
  await api.get('/experiences', {}).then((res) => {
    res.data.data.forEach((res: ExperienceRes) => {
      experiences.push({
        activities: res.attributes.activities,
        company: res.attributes.company,
        finishedAt: res.attributes.finishedAt,
        startedAt: res.attributes.startedAt,
        title: res.attributes.title,
      })
    })
  })
  return experiences
}
