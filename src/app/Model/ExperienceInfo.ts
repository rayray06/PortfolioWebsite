import { SkillInfo } from "./SkillInfo";

export interface ExperienceInfo {
    title : string;
    description : string;
    company : string;
    startDate : string;
    endDate : string;
    gitLink:string;
    skills : SkillInfo[];
}