import Ape, { name, age, date, arrayOf, fromValues } from 'ape-mock';

const menImages = ["http://aboullaite.me/content/images/2016/11/myAvatar.svg", 
    "https://www.bareket-astro.com/images/stories/misc/man_avatar.JPG",
    "https://st2.depositphotos.com/1007566/12304/v/950/depositphotos_123041468-stock-illustration-avatar-man-cartoon.jpg",
    "https://cdn.dribbble.com/users/2364329/screenshots/4809566/dribbble-21.jpg",
    "https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912719/62358443-avatar-man-smiling-cartoon-male-person-user-vector-illustration.jpg"];

const womanImages = ["https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX20918298.jpg",
    "https://images.assetsdelivery.com/compings_v2/yupiramos/yupiramos1609/yupiramos160912725.jpg",
    "https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400170/76274715-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg",
    "https://i.pinimg.com/originals/4b/5d/19/4b5d1954fbb5b6bad18f0ac25c4ab3c3.png",
    "https://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png"];

export function createFakeUsers(){
    let fakeUsers = [];

    const template_men = Ape({
        menUsers: arrayOf({
            firstName: name().male(),
            lastName: name().lastName(),
            age: age().adult(),
            gender: "Male",
            images: menImages,
            profileImage: fromValues(menImages),
            date: date().random().startYearsAgo(1)
        }).random(30, 30)
    });
    
    const template_woman = Ape({
        womanUsers: arrayOf({
            firstName: name().female(),
            lastName: name().lastName(),
            age: age().adult(),
            gender: "Female",
            profileImage: fromValues(womanImages),
            images: womanImages,
            date: date().random().startYearsAgo(1)
        }).random(30, 30)
    });
    
    const {womanUsers} = template_woman.generate();
    const {menUsers} = template_men.generate();
    fakeUsers = womanUsers.concat(menUsers);

    fakeUsers.sort((person1, person2) => {
        return new Date(person2.date) - new Date(person1.date);
      });

    return fakeUsers;
}