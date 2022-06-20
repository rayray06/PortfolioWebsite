import { EducationInfo } from "./EducationInfo";

export interface EducationInfoResponse {
    content : EducationInfo[];
    message : string;
    status : number;
    code : number
}