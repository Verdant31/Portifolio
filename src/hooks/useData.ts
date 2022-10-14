import { Data } from '../@types/types'
import { useAbout } from './useAbout'
import { useExperiences } from './useExperiences'
import { useProjects } from './useProjects'
import { useSkills } from './useSkills'

export const useData = async (): Promise<Data> => {
  const projects = await useProjects()
  const about = await useAbout()
  const experiences = await useExperiences()
  const skills = await useSkills()
  return { projects, about, experiences, skills }
}
