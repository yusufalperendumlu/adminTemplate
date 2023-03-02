const arr = [18, 'yusuf', 'alperen',  'dumlu'];
arr.foo = 'hello';

for(let i in arr)
{
    console.log(i);
}

for(let i of arr)
{
    console.log(i);
}