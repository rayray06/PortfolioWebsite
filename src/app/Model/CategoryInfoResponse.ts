import { CategoryInfo } from "./CategoryInfo";

export interface CategoryInfoResponse {
    content : CategoryInfo[];
    message : string;
    status : number;
    code : number
}