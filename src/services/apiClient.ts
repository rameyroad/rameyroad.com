import { Project } from "../@types/project";

export const contentRoot =
    "https://rameyroadeus01.blob.core.windows.net/rameyroad-com/content";

export const getAllProjects = async () => {
    try {
        let response = await fetch(`${contentRoot}/json/projects.json`, {
            method: "get",
        });
        let jsonResp = await response.json();
        return jsonResp as Array<Project>;
    } catch (error) {
        console.error("getAllProjects", error);
        return Promise.reject(error);
    }
};
