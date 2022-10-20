import axios from "axios";
import { Data } from "../@types/types";

export const useData = async (): Promise<Data> => {
  const about = await axios.get("/api/about").then((res) => res.data);
  const projects = await axios.get("/api/projects").then((res) => res.data);
  const experiences = await axios
    .get("/api/experience")
    .then((res) => res.data);
  const skills = await axios.get("/api/skill").then((res) => res.data);
  return { projects, about, experiences, skills };
};
