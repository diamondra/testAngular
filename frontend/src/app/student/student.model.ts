export class Student {
    title: string;
    last_name: string;
    first_name: string;
    promotion: string;
    gender: string;
    birth: string;
    email: string;
    street_name: string;
    city: string;
    country: string;
    company: string;
    prefered_color: string;
    street_address: string;
    planned_career: string;
    university: string;
    linkedin: string;


    constructor(title: string, last_name: string, first_name: string, promotion: string, gender: string, birth: string, email: string, street_name: string, city: string, country: string, company: string, prefered_color: string, street_address: string, planned_career: string, university: string, linkedin: string) {
        this.title = title;
        this.last_name = last_name;
        this.first_name = first_name;
        this.promotion = promotion;
        this.gender = gender;
        this.birth = birth;
        this.email = email;
        this.street_name = street_name;
        this.city = city;
        this.country = country;
        this.company = company;
        this.prefered_color = prefered_color;
        this.street_address = street_address;
        this.planned_career = planned_career;
        this.university = university;
        this.linkedin = linkedin;
    }
}
