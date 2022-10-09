export class Profile {
    name!: string;
    associateId!: string;
    mobile!: string;
    email!: string;
    skillExpertise: SkillExpertise[] = [];
 
}

export class SkillExpertise {
    skillName!: string;
    expertise!: string;

}
