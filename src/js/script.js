const popup = document.querySelector(".popup"),
    cells = document.querySelectorAll(".js-cell"),
    // headerBackground = document.querySelector(".header-background"),
    // mainBackground = document.querySelector(".main-background"),
    leftArrow = document.querySelector(".left-arrow-block"),
    rightArrow = document.querySelector(".right-arrow-block"),
    slides = document.querySelectorAll(".man-figure"),
    dots = document.querySelectorAll(".dot"),
    girl = document.querySelector(".girl"),
    bird = document.querySelector(".bird"),
    notebook = document.querySelector(".notebook"),
    camera = document.querySelector(".camera"),
    bicycle = document.querySelector(".bicycle"),
    copybook = document.querySelector(".copybook"),
    work = document.querySelector(".work"),
    school = document.querySelector(".school"),
    calendar = document.querySelector(".calendar"),
    textPopup = document.querySelector(".text-popup"),
    textPopup2 = document.querySelector(".text-popup2"),
    cardsBlock = document.querySelector(".main-cards-block"),
    animItems = document.querySelectorAll(".anim-items"),
    moveSlide = index => {
        activeSlide(index)
        activeDot(index)
    }

function sendAjax (method,requestURL,params = null) {
    return new Promise ((reslove, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method,requestURL)
        xhr.responseType = "json"
        xhr.onerror = () => {
            reject(xhr.response)
        }
        xhr.onload = () => {
            if(ERROR) { reject(xhr.reject) }
            else { reslove(xhr.response) }
        }
        xhr.send(params)
    })
}

function all() {
    girl.style.
    bird.classList.add('visible')
    notebook.classList.add('visible')
    camera.classList.add('visible')
    bicycle.classList.add('visible')
    copybook.classList.add('visible')
    work.classList.add('visible')
    school.classList.add('visible')
    calendar.classList.add('visible')
}

function branding() {
    girl.classList.add('hidden')
    bird.classList.add('hidden')
    notebook.classList.add('hidden')
    camera.classList.add('visible')
    bicycle.classList.add('hidden')
    copybook.classList.add('hidden')
    work.classList.add('visible')
    school.classList.add('hidden')
    calendar.classList.add('visible')
}

function design() {
    girl.classList.add('hidden')
    bird.classList.add('visible')
    notebook.classList.add('hidden')
    camera.classList.add('visible')
    bicycle.classList.add('hidden')
    copybook.classList.add('visible')
    work.classList.add('hidden')
    school.classList.add('hidden')
    calendar.classList.add('hidden')
}

function dev() {
    girl.classList.add('hidden')
    bird.classList.add('hidden')
    notebook.classList.add('visible')
    camera.classList.add('hidden')
    bicycle.classList.add('hidden')
    copybook.classList.add('visible')
    work.classList.add('visible')
    school.classList.add('hidden')
    calendar.classList.add('hidden')
}

function strategy() {
    girl.classList.add('visible')
    bird.classList.add('hidden')
    notebook.classList.add('hidden')
    camera.classList.add('hidden')
    bicycle.classList.add('hidden')
    copybook.classList.add('visible')
    work.classList.add('visible')
    school.classList.add('hidden')
    calendar.classList.add('visible')
}

let index = 0

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots){
        dot.classList.remove('dot-active')
    }
    dots[n].classList.add('dot-active')
}

const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0
        moveSlide(index)
    }else{
        index++
        moveSlide(index)
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1
        moveSlide(index)
    }else{
        index--
        moveSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        moveSlide(index)
    })
})

rightArrow.addEventListener('click', nextSlide)
leftArrow.addEventListener('click', prevSlide)

setInterval(nextSlide, 5000)

const dragAndDrop = () => {
    let nowBlock
    const redBlock = document.querySelector(".red-block")
    const greenBlock = document.querySelector(".green-block")
    const blueBlock = document.querySelector(".blue-block")
    const yellowBlock = document.querySelector(".yellow-block")

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide')
        }, 0)
        nowBlock = this
    }
    const dragEnd = function () {
        this.classList.remove('hide')
    }

    const dragOver = function (event) {
        event.preventDefault()
    }

    const dragEnter = function (event) {
        event.preventDefault()
        this.classList.add('hovered')
    }
    
    const dragLeave = function () {
        this.classList.remove('hovered')
        
    }
    
    const dragDrop = function (event) {
        this.append(nowBlock)
        nowBlock.classList.add('end-styles')
        this.classList.remove('hovered')
    }

    cells.forEach((cell) => {
        cell.addEventListener('dragover', dragOver)
        cell.addEventListener('dragenter', dragEnter)
        cell.addEventListener('dragleave', dragLeave)
        cell.addEventListener('drop', dragDrop)
    })

    redBlock.addEventListener('dragstart', dragStart)
    redBlock.addEventListener('dragend', dragEnd)
    greenBlock.addEventListener('dragstart', dragStart)
    greenBlock.addEventListener('dragend', dragEnd)
    blueBlock.addEventListener('dragstart', dragStart)
    blueBlock.addEventListener('dragend', dragEnd)
    yellowBlock.addEventListener('dragstart', dragStart)
    yellowBlock.addEventListener('dragend', dragEnd)

}

function audit() {
    cells.forEach((cell) => {
        if(cell.getAttribute("data-color") != cell.children[0].getAttribute("data-color")){
            alert("Колір блоку не відповідає кольору рамки, спробуйте ще раз!")
        }else{
            alert("Вхід успішний")
            popupHidden()
        }
    }) 
}

function popupVisible() {
    popup.style.visibility = "visible"
}

function popupHidden() {
    popup.style.visibility = "hidden"
}

function visibleText() {
    textPopup.style.visibility = "visible"
}

function hiddenText() {
    textPopup.style.visibility = "hidden"
}

function visibleText2() {
    textPopup2.style.visibility = "visible"
}

function hiddenText2() {
    textPopup2.style.visibility = "hidden"
}

function tripleClick(event) {
    if(event.detail === 3){
        alert("u hack this cite")
    }
}

if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll)
    function animOnScroll(event) {
        for(let index; index < animItems.length; index++) {
            const animItem = animItem[index],
                animItemHeight = animItem.offsetHeight,
                animItemOffset = offset(animItem).top,
                animStart = 4
            let animItemPoint = window.innerHeight - animItemHeight / animStart
            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart
            }
            if((event.pageYOffset > animItemOffset - animItemPoint) && event.pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('animation')
            }else{
                animItem.classList.remove('animation')
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                scrollTop = window.pageYOffset || document.documentElement.scrollTop
            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
    }
    animOnScroll()
}

