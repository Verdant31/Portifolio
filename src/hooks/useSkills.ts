import { Skill, SkillsRes } from '../@types/types'
import { api } from '../services/axios'

export const useSkills = async (): Promise<Skill[]> => {
  const skills: Skill[] = []
  await api.get('/skills?populate=*', {}).then((res) => {
    res.data.data.forEach((res: SkillsRes) => {
      skills.push({
        name: res.attributes.name,
        proficiency: res.attributes.proficiency,
        logo:
          'http://localhost:1337/' + res.attributes.image.data.attributes.url,
      })
    })
  })
  return skills
}
