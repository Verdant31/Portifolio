import { Project, SkillsRes } from '../@types/types'
import { api } from '../services/axios'

export const useProjects = async (): Promise<Project[]> => {
  const projects: Project[] = []

  await api.get('/projects?populate=*', {}).then((res) => {
    res.data.data.forEach((res: any) => {
      projects.push({
        description: res.attributes.description,
        mockup:
          'http://localhost:1337/' + res.attributes.mockup.data.attributes.url,
        techs: res.attributes.techs.data.map((tech: SkillsRes) => ({
          name: tech.attributes.name,
          proficiency: tech.attributes.proficiency,
        })),
        title: res.attributes.title,
      })
    })
  })
  return projects
}
