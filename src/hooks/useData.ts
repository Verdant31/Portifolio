import axios from "axios";
import { Data } from "../@types/types";

export const useData = async (): Promise<Data> => {
  const about = await axios
    .get("http://localhost:3000/api/about")
    .then((res) => res.data);
  const projects = await axios
    .get("http://localhost:3000/api/projects")
    .then((res) => res.data);
  const experiences = await axios
    .get("http://localhost:3000/api/experience")
    .then((res) => res.data);
  const skills = await axios
    .get("http://localhost:3000/api/skill")
    .then((res) => res.data);
  return { projects, about, experiences, skills };
};
