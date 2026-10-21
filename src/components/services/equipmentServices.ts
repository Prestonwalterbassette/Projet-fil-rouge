import { request } from "./http";
import { Equipment } from "./src/types";

export const equipmentService = {
    getAll: () => request<Equipment[]>("/equipment"),
};