const menuItems=[
    {
        id:1,
        item: "Food Item1",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
        img: "img/f1.jpg",
        hotel:"Hotel name1",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
    },
    {
        id:2,
        item: "Food Item2",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
        img: "img/f2.jpg",
        hotel:"Hotel name2",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
    },
    {
        id:3,
        item: "Food Item3",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
        img: "img/f3.jpg",
        hotel:"Hotel name3",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
    },
    {
        id:4,
        item: "Food Item4",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
        img: "img/f4.jpg",
        hotel:"Hotel name4",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
    },
    {
        id:5,
        item: "Food Item5",
        oneLiner:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
        img: "img/f5.jpg",
        hotel:"Hotel name5",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium vel unde consequuntur eius odit dolor asperiores sunt, quos impedit hic saepe dicta ratione molestias modi optio doloribus nulla praesentium incidunt.",
    }
]

const item=document.getElementById('item');
const oneLiner=document.getElementById('oneLiner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const desc=document.getElementById('desc');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let currentMenu = 0;

window.addEventListener('DOMContentLoaded', ()=>{
    allMenu[currentMenu];
});

const allMenu=()=>{
    let menu=menuItems[currentMenu];
    item.textContent=menu.item;
    oneLiner.textContent=menu.oneLiner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    desc.textContent=menu.desc;
};

//random
random.addEventListener('click',()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length);
    allMenu(currentMenu);
});

//prev
prev.addEventListener('click', ()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
});

//next
next.addEventListener('click', ()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0;
    }
    allMenu(currentMenu);
})
