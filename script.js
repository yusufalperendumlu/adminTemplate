const title = document.title;
const newtitle = "Come Back!";

window.onblur = () => {
    document.title = newtitle;
}

window.onfocus = () => {
    document.title = title;
}

const leftMain = document.getElementById("lefttemp");
const midMain = document.getElementById("midtemp");
const rightMain = document.getElementById("righttemp");

leftMain.addEventListener('mouseover', () => {
    midMain.style.left = `${23}rem`;
    midMain.style.transition = "all 700ms";
})

leftMain.addEventListener('mouseleave', () => {
    midMain.style.left = `${18}rem`;
})

midMain.addEventListener('mouseover', () => {
    midMain.style.left = `${18}rem`;
    midMain.style.transition = "all 700ms";
})

rightMain.addEventListener('mouseover', () => {
    midMain.style.left = `${14}rem`;
    midMain.style.transition = "all 700ms";
})

rightMain.addEventListener('mouseleave', () => {
    midMain.style.left = `${18}rem`;
})

const temptitles = ['Paneli', 'Kontrol', 'Değiştir'];
let temptitle = document.getElementById("temp-title");
let i = 0;

setInterval(() => {
    if(i == temptitles.length)
    {
        i = 0;
    }
    temptitle.innerHTML = temptitles[i];
    i++;

}, 1000 )


const link = document.getElementById("linkSearch");
const textIn = document.getElementById("textIn");

textIn.addEventListener('keypress', (e) => {

    if(e.key == "Enter")
    {
        textIn.value = "";
    }  
})

link.addEventListener('mouseenter', (e) => {
    e.preventDefault();
    link.classList.add("link-active");
    
    const btnClick = document.getElementById("searchClick");
    btnClick.addEventListener('click', () => {
        textIn.value = "";
    })
})

link.addEventListener('mouseleave', () => {
    link.classList.remove("link-active");
})

const date = document.getElementById("date");
const date1 = document.getElementById("dateOne");
const date2 = document.getElementById("dateTwo");
const dateFile = document.getElementById("datefile");
const dateFile1 = document.getElementById("datefileOne");
const datefile2 = document.getElementById("datefileTwo");

function getMonthName(monthNumber) {
    const dat = new Date();
    dat.setMonth(monthNumber);
  
    return dat.toLocaleString('en-US', { month: 'short' });
}

const d = new Date();
const y = d.getFullYear();
const mm = d.getMonth();
const m = getMonthName(mm);
const day = d.getDate();

date.innerHTML = `${m} ${day}, ${y}`;
date1.innerHTML = `${m} ${day}, ${y + 1}`;
date2.innerHTML = `${m} ${day}, ${y + 2}`;
dateFile.innerHTML = `${m} ${day}, ${y}`;
dateFile1.innerHTML = `${m} ${day}, ${y + 1}`;
datefile2.innerHTML = `${m} ${day}, ${y + 2}`;


const rowCard = document.querySelectorAll(".rowCard");
const fileType = document.querySelectorAll(".fileType");

rowCard.forEach(rowCard => {
    rowCard.addEventListener('mouseenter', () => {
        rowCard.classList.add("rowCard-active");
    })
    rowCard.addEventListener('mouseleave', () => {
        rowCard.style.transition = "300ms" ;
        rowCard.classList.remove("rowCard-active");
    })
})


const sec = document.getElementById("sect");

sec.addEventListener('click', (e) => {
    e.preventDefault();

    const setting = document.getElementById("settt");

    setting.style.display = "block";

    if(setting.style.display == "block")
    {
        sec.addEventListener('mouseleave', (e) => {
            e.preventDefault();
            setting.style.display = "none";
        })
    }

})




