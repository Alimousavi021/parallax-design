
let frstbar = document.getElementById('frstbar')
let scndbar = document.getElementById('scndbar')
let thrdbar = document.getElementById('thrdbar')
let li = document.querySelectorAll('ul>li')
let main = document.getElementsByTagName('main')[0]
let h2move = document.getElementById('h2move')
let pmove = document.getElementById('pmove')
let pop = document.getElementById('pop')
let h3op = document.getElementById('h3op')
let mainsec = document.getElementById('mainsec')
let scalesec = document.getElementById('scalesec')
let scalesec2 = document.getElementById('scalesec2')
let long = document.querySelectorAll('#longwidth>figure')
let h2khotut = document.querySelectorAll('#khotut h2')
let spankhotut = document.querySelectorAll('#khotut span')
let khotut = document.getElementById('khotut')
let divkhotut = document.querySelectorAll('#khotut>div>div>div')
let bgop = document.getElementById('bgop')
let bg2op = document.getElementById('bg2op')
let header = document.getElementById('header')
let vasat = document.getElementById('vasat')
let bgop3 = document.getElementById('bgop3')
let takkhat = document.getElementById('takkhat')
let ab1 = document.getElementById('ab1')
let ab2 = document.getElementById('ab2')
let ab3 = document.getElementById('ab3')
let ab4 = document.getElementById('ab4')
let ab5 = document.getElementById('ab5')
let ab6 = document.getElementById('ab6')
let span = document.querySelectorAll('#bgop3 span')
let p = document.querySelectorAll('#bgop3 p')
let mousefig = document.querySelectorAll('#mouse figure')
let mouseimg = document.querySelectorAll('#mouse img')
let foot = document.querySelectorAll('#foot figure')

document.addEventListener("resize", () => {
    let allHeight = main.scrollHeight
    mainsec.style.height = allHeight + 'px'
})

let i = 1
document.getElementById('hamburgler').addEventListener('click', function (e) {
    this.classList.toggle('no-hamburgler');
    if (i % 2) {
        li.forEach((val) => {
            val.style.opacity = '1'

        })
    } else {
        li.forEach((val) => {
            val.style.opacity = '0'

        })

    }
    i++

});

main.addEventListener('scroll', (e) => {
    scrollscreen = (e.target.scrollTop)
    if ((scrollscreen - 700) > h2move.clientHeight) {
        h2move.style.transform = 'translateY(' + (scrollscreen / 10) + 'px)'
        pmove.style.transform = 'translateY(' + (scrollscreen / 10) + 'px)'
        pop.classList.add('op')
        h3op.classList.add('op')
    } else {
        h2move.style.transform = 'translateY(0)'
        pmove.style.transform = 'translateY(0)'
        pop.classList.remove('op')
        h3op.classList.remove('op')

    }


    if ((scrollscreen - 300) > scalesec.clientHeight) {
        scalesec.style.transform = 'scale(0)'

    } else {
        scalesec.style.transform = 'scale(1)'

    }

    if ((scrollscreen - 700) > scalesec2.clientHeight) {
        scalesec2.style.transform = 'scale(1)'

    } else {
        scalesec2.style.transform = 'scale(0)'

    }

    if ((scrollscreen - 2700) > long[0].clientHeight) {
        long[0].style.transform = 'translateX(-' + (scrollscreen - 2500) + 'px)'
        long[1].style.transform = 'translateX(-' + (scrollscreen - 2500) + 'px)'
        long[2].style.transform = 'translateX(-' + (scrollscreen - 2500) + 'px)'
    }
    else {
        long[0].style.transform = 'translateX(0)'
        long[1].style.transform = 'translateX(0)'
        long[2].style.transform = 'translateX(0)'
    }


    if ((scrollscreen - 5800) > khotut.clientHeight) {
        divkhotut.forEach((val) => {
            val.style.width = '100%'
        })



        h2khotut.forEach((val) => {
            val.style.transform = 'translateY(-' + (scrollscreen / 350) + 'px)'

        })
        spankhotut.forEach((val) => {
            val.style.transform = 'translateY(-' + (scrollscreen / 350) + 'px)'

        })
    }
    if ((scrollscreen - 2500) > bg2op.clientHeight) {
        bg2op.style.backgroundColor = 'white'
        bgop.style.backgroundColor = 'white'
        header.style.backgroundColor = 'black'

    } else {
        bg2op.style.backgroundColor = 'black'
        bgop.style.backgroundColor = 'black'
        header.style.backgroundColor = 'inherit'

    }
    if ((scrollscreen - 7700) > bgop3.clientHeight) {
        bgop3.style.backgroundColor = 'black'
        header.style.backgroundColor = 'inherit'
        takkhat.style.width = '85%'
        ab1.style.height = '0'
        ab2.style.height = '0'
        span[0].style.opacity = '1'
        p[0].style.opacity = '1'

    } else {
        bgop3.style.backgroundColor = 'white'

    }

    if ((scrollscreen - 3200) > bg2op.clientHeight) {
        vasat.style.width = '100%'
        vasat.style.left = '0'

    }
    if ((scrollscreen - 8400) > bgop3.clientHeight) {
        ab3.style.height = '0'
        ab4.style.width = '0'
        span[1].style.opacity = '1'
        p[1].style.opacity = '1'
    }
    if ((scrollscreen - 9000) > bgop3.clientHeight) {
        ab5.style.width = '0'
        ab6.style.height = '0'
        span[2].style.opacity = '1'
        p[2].style.opacity = '1'
    }
    if ((scrollscreen - 11600) > mouseimg[0].clientHeight) {
        mousefig[0].style.opacity = '1'
        mousefig[2].style.opacity = '1'
        mousefig[4].style.opacity = '1'

        mousefig[0].addEventListener('mousemove', (e) => {
            let x = ((e.offsetX) / 10) - 25
            let y = ((e.offsetY) / 10) - 20
            mousefig[0].style.transform = ' perspective(800px) rotateY(' + x + 'deg)  rotateX(' + y + 'deg)'

        })
        mousefig[2].addEventListener('mousemove', (e) => {
            let x = ((e.offsetX) / 10) - 25
            let y = ((e.offsetY) / 10) - 20
            mousefig[2].style.transform = ' perspective(800px) rotateY(' + x + 'deg)  rotateX(' + y + 'deg)'

        })
        mousefig[4].addEventListener('mousemove', (e) => {
            let x = ((e.offsetX) / 10) - 25
            let y = ((e.offsetY) / 10) - 20
            mousefig[4].style.transform = ' perspective(800px) rotateY(' + x + 'deg)  rotateX(' + y + 'deg)'

        })
    }
    if ((scrollscreen - 12600) > foot[0].clientHeight) {
        foot.forEach((val) => {
            val.style.opacity = '1'
            val.style.transform = 'translateY(0)'
        })
    }
})