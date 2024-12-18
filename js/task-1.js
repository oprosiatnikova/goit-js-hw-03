//Напиши функцію slugify(title), яка приймає заголовок статті,
//параметр title і повертає slug, створений із цього рядка.

//Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
//Усі символи slug повинні бути в нижньому регістрі.
//Усі слова slug повинні бути розділені тире.
 
function slugify(title) {
   return title
        .toLowerCase()                     
        .replace(/[^a-z0-9\s-]/g, '')       
        .replace(/\s+/g, '-')               
        .replace(/-+/g, '-')               
        .replace(/^[-]+|[-]+$/g, '');  
}
console.log(slugify("Arrays for beginners")); 
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 