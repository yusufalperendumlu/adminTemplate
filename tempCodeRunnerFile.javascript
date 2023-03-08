// const arr = [18, 'yusuf', 'alperen',  'dumlu'];
// arr.foo = 'hello';

// for(let i in arr)
// {
//     console.log(i);
// }

// for(let i of arr)
// {
//     console.log(i); // diziye eklenen doo değişkeninin içeriğini yazdırmaz!
// }



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const test = array.filter((dizi) => {
    if(dizi <5)
    {
        return dizi;
    }
})

console.log(test);