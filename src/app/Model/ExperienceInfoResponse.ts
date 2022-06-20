import { ExperienceInfo } from "./ExperienceInfo";

export interface ExperienceInfoResponse {
    content : ExperienceInfo[];
    message : string;
    status : number;
    code : number
}