const Display_Sneakers_1 = document.getElementById("Sneakers-1")
const Air = document.getElementById("Air")
const Point = document.getElementById('Point')
const jump_1 = document.getElementById('jump')
const button = document.querySelector('button')

const Click_Aside_Display_Sneakers_1 = document.getElementById("Sneakers-Aside-1")

const Click_Aside_Sneakers_1 = () =>{
    Display_Sneakers_1.style.display = 'block'
    Display_Sneakers_2.style.display = 'contents'
    Display_Sneakers_3.style.display = 'contents'

    jump_1.style.color="#E10F15"
    Air.style.color="#C2C2C2"
    Point.style.color="#C2C2C2"

    button.style.background="#E10F15"
}

Click_Aside_Display_Sneakers_1.addEventListener('click', Click_Aside_Sneakers_1)


const Display_Sneakers_2 = document.getElementById("Sneakers-2")
const Air_2 = document.getElementById("Air")
const Point_2 = document.getElementById('Point')
const jump = document.getElementById('jump')
const button_2 = document.querySelector('button')

const Click_Aside_Display_Sneakers_2 = document.getElementById("Sneakers-Aside-2")

const Click_Aside_Sneakers_2 = () =>{
    Display_Sneakers_2.style.display = 'block'
    Display_Sneakers_1.style.display = 'contents'
    Display_Sneakers_3.style.display = 'contents'
    
    jump.style.color="#2C77B9"
    Point_2.style.color="#F24E3A"
    Air_2.style.color="#F24E3A"
    button_2.style.background="#2C77B9"
}

Click_Aside_Display_Sneakers_2.addEventListener('click', Click_Aside_Sneakers_2)


const Display_Sneakers_3 = document.getElementById("Sneakers-3")

const jump_3 = document.getElementById('jump')
const Air_3 = document.getElementById("Air")
const Point_3 = document.getElementById('Point')
const button_3 = document.querySelector('button')


const Click_Aside_Display_Sneakers_3 = document.getElementById("Sneakers-Aside-3")

const Click_Aside_Sneakers_3 = () =>{
    Display_Sneakers_3.style.display = 'block'
    Display_Sneakers_1.style.display = 'contents'
    Display_Sneakers_2.style.display = 'contents'

    jump_3.style.color="#FB5014"
    Air_3.style.color="#17B4CC"
    Point.style.color="#17B4CC"

    button_3.style.background="#FB5014"
}

Click_Aside_Display_Sneakers_3.addEventListener('click', Click_Aside_Sneakers_3)