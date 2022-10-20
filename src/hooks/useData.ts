import axios from "axios";
import { Data } from "../@types/types";

export const useData = async (): Promise<Data> => {
  const about = await axios
    .get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/about`)
    .then((res) => res.data);
  const projects = await axios
    .get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/projects`)
    .then((res) => res.data);
  const experiences = await axios
    .get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/experience`)
    .then((res) => res.data);
  const skills = await axios
    .get(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/skill`)
    .then((res) => res.data);
  return { projects, about, experiences, skills };
};
