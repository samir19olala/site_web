function menu_block(event){
    
}


document.addEventListener('DOMContentLoaded',(event)=>{
    const burger = document.querySelector('.menu-burger')
    const menu = document.querySelector('.list-nav')
    const links = document.querySelectorAll('.item-nav')
    const body = document.querySelector('body')
    
    
    
    burger.addEventListener('click',(event)=>{
        menu.classList.toggle('active')
        burger.classList.toggle('clicked')
    })
    
    links.forEach(item=>{
        item.addEventListener('click',(event)=>{
            menu.classList.toggle('active')
            burger.classList.toggle('clicked')
        })
    })

    // document.addEventListener('scroll',(event)=>{
    //     console.log(event)
    // })
})