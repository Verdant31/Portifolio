import { Data } from "../@types/types";
import { api } from "../services/api";

export const useData = async (): Promise<Data> => {
  const about = await api.get("/api/about").then((res) => res.data);
  const projects = await api.get("/api/projects").then((res) => res.data);
  const experiences = await api.get("/api/experience").then((res) => res.data);
  const skills = await api.get("/api/skill").then((res) => res.data);
  return { projects, about, experiences, skills };
};
