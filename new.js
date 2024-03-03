//  const paras = document.querySelectorAll(".paras")

// const observer = new IntersectionObserver(
//      entries => {
//      enteries.ForEach(entry => {
//        entry.target.classList.toggle("show",entry.isIntersecting)
//      } )
//  },{
//      threshold: 1 ,
//  })
//  paras.ForEach(paras => {
//  observer.observer(paras)
//  })

burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightnav = document.querySelector('.rightNav')

burger.addEventListener('click', () => {
    rightnav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})
