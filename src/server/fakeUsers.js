import Ape, { name, age, date, arrayOf } from 'ape-mock';
import malePic from '../male.png';
import femalePic from '../female.png';

export function createFakeUsers(){
    let fakeUsers = [];

    const template_men = Ape({
        menUsers: arrayOf({
            firstName: name().male(),
            lastName: name().lastName(),
            age: age().adult(),
            gender: "Male",
            image: malePic,
            date: date().random().startYearsAgo(1)
        }).random(10, 10)
    });
    
    const template_woman = Ape({
        womanUsers: arrayOf({
            firstName: name().female(),
            lastName: name().lastName(),
            age: age().adult(),
            gender: "Female",
            image: femalePic,
            date: date().random().startYearsAgo(1)
        }).random(10, 10)
    });
    
    const {womanUsers} = template_woman.generate();
    const {menUsers} = template_men.generate();
    fakeUsers = womanUsers.concat(menUsers);

    fakeUsers.sort((person1, person2) => {
        return new Date(person2.date) - new Date(person1.date);
      });

    return fakeUsers;
}