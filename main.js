const leftArrowElement = document.querySelector(".arrow-left"),
    rightArrowElement = document.querySelector(".arrow-right"),
    sectionElemnts = document.querySelectorAll("section"),
    coverElement = document.querySelector(".cover")

let page = 0,
    isMoving = false

for (let i = 0; i < sectionElemnts.length; i++) {
    sectionElemnts[i].style.zIndex = sectionElemnts.length - i - 1
}

window.addEventListener("scroll", function () {
    let windowHeight = window.screen.availHeight
})

window.addEventListener("resize", function () {
    changeArrowsPosition()
})

changeArrowsPosition()

function changeArrowsPosition() {
    if (document.body.offsetWidth < 950) {
        leftArrowElement.style.visibility = "hidden"
        rightArrowElement.style.visibility = "hidden"
    } else {
        leftArrowElement.style.left = coverElement.getBoundingClientRect().left - 50 - leftArrowElement.getBoundingClientRect().width / 2
        rightArrowElement.style.left = coverElement.getBoundingClientRect().right + 50 - rightArrowElement.getBoundingClientRect().width / 2
        leftArrowElement.style.visibility = "visible"
        rightArrowElement.style.visibility = "visible"
    }
}

rightArrowElement.addEventListener("click", function () {
    if (!isMoving) {
        if (page == sectionElemnts.length - 1) {
            sectionElemnts[page].style.opacity = "0"
            let oldPage =  sectionElemnts.length - 1
            isMoving = true
            setTimeout(() => {
                sectionElemnts[oldPage].style.opacity = "1"
                page = 0
                let tab = []
                for (let i = 0; i < sectionElemnts.length; i++) {
                    tab.push(i)
                }
                tab.reverse()
                for (let i = sectionElemnts.length - 1; i >= 0; i--) {
                    sectionElemnts[i].style.zIndex = tab[i]
                }
                isMoving = false
            },1000)
           
        } else {
            sectionElemnts[page].style.opacity = "0"
            let oldPage = page
            isMoving = true
            setTimeout(() => {
                console.log(page)
                sectionElemnts[oldPage].style.opacity = "1"
                page++
                let number = page - 1,
                    tab = []
                for (let i = page - 1; i >= 0; i--) {
                    tab.push(number)
                    number--
                }
                for (let i = page - 1; i >= 0; i--) {
                    sectionElemnts[i].style.zIndex = tab[i]
                    number--
                }
                sectionElemnts[page].style.zIndex = sectionElemnts.length - 1
                let tab2 = []
                for (let i = sectionElemnts.length - 1; i >= page; i--) {
                    tab2.push(i)
                }
                for (let i = page + 1; i < sectionElemnts.length; i++) {
                    sectionElemnts[i].style.zIndex = tab2[i - page]
                }
                isMoving = false
            }, 1000)
        }


    }
})

leftArrowElement.addEventListener("click", function () {
    if(!isMoving) {
        if (page - 1 < 0) {
            sectionElemnts[sectionElemnts.length - 1].style.zIndex = sectionElemnts.length - 2
            sectionElemnts[0].style.opacity = "0"
            isMoving = true
            setTimeout(() => {
                sectionElemnts[0].style.opacity = "1"
                page = sectionElemnts.length - 1
                sectionElemnts[page].style.zIndex = sectionElemnts.length - 1
                let tab = []
                for (let i = sectionElemnts.length - 2; i >= 0; i--) {
                    tab.push(i)
                }
                for (let i = 0; i < sectionElemnts.length - 1; i++) {
                    sectionElemnts[i].style.zIndex = tab[i]
                }
                isMoving = false
            },1000)
        } else {
            sectionElemnts[page].style.opacity = "0"
            let oldPage = page
            isMoving = true
            setTimeout(() => {
                page--
                sectionElemnts[oldPage].style.opacity = "1"
                let number = page - 1,
                    tab = []
                for (let i = page - 1; i >= 0; i--) {
                    tab.push(number)
                    number--
                }
                for (let i = page - 1; i >= 0; i--) {
                    sectionElemnts[i].style.zIndex = tab[i]
                    number--
                }
                sectionElemnts[page].style.zIndex = sectionElemnts.length - 1
                let tab2 = []
                for (let i = sectionElemnts.length - 1; i >= page; i--) {
                    tab2.push(i)
                }
                for (let i = page + 1; i < sectionElemnts.length; i++) {
                    sectionElemnts[i].style.zIndex = tab2[i - page]
                }
                isMoving = false
            },1000)
           
        }
    }
   
})