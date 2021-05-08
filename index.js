const navbar = document.querySelector('.navbar')
const hamburgerIcon = document.querySelector(".hamburgerIcon")
const closeIcon = document.querySelector(".closeIcon")
const roomLogo = document.querySelector(".middle-navigation-image")
const navigationLink1 = document.querySelectorAll(".middle-navigation-link")[0]
const navigationLink2 = document.querySelectorAll(".middle-navigation-link")[1]
const navigationLink3 = document.querySelectorAll(".middle-navigation-link")[2]
const navigationLink4 = document.querySelectorAll(".middle-navigation-link")[3]

hamburgerIcon.addEventListener("click", function() {
  navigationLink1.classList.remove("notshowed")
  navigationLink2.classList.remove("notshowed")
  navigationLink3.classList.remove("notshowed")
  navigationLink4.classList.remove("notshowed")
  roomLogo.classList.add("notshowed")
  hamburgerIcon.classList.add("notshowed")
  closeIcon.classList.remove("notshowed")
  navbar.classList.add("white-background")
})


closeIcon.addEventListener("click", function(){
  navigationLink1.classList.add("notshowed")
  navigationLink2.classList.add("notshowed")
  navigationLink3.classList.add("notshowed")
  navigationLink4.classList.add("notshowed")
  roomLogo.classList.remove("notshowed")
  hamburgerIcon.classList.remove("notshowed")
  closeIcon.classList.add("notshowed")
  navbar.classList.remove("white-background")
})




const leftArrow = document.querySelector(".left-selection")
const rightArrow = document.querySelector(".right-selection")

var first = document.querySelector(".image1-description")
var second = document.querySelector(".image2-description")
var third = document.querySelector(".image3-description")

var image1 = document.querySelector(".image1")
var image2 = document.querySelector(".image2")
var image3 = document.querySelector(".image3")

var tracker = 1


rightArrow.addEventListener("click", function(){
  tracker += 1
  if (tracker < 1){
    first.classList.remove("notshowed")
    image1.classList.remove("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")
    tracker = 3
  }

  if (tracker === 1){
    first.classList.remove("notshowed")
    image1.classList.remove("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")
  }

  if (tracker === 2){
    first.classList.add("notshowed")
    image1.classList.add("notshowed")

    second.classList.remove("notshowed")
    image2.classList.remove("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")

  }

  if (tracker === 3){
    first.classList.add("notshowed")
    image1.classList.add("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.remove("notshowed")
    image3.classList.remove("notshowed")
    tracker = 0
  }

  if (tracker > 3){
    first.classList.remove("notshowed")
    image1.classList.remove("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")
    tracker = 1
  }
})

leftArrow.addEventListener("click", function(){
  tracker -= 1
  if (tracker < 0){
    first.classList.add("notshowed")
    image1.classList.add("notshowed")

    second.classList.remove("notshowed")
    image2.classList.remove("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")
    tracker = 2
  }


  if (tracker === 0){
    first.classList.add("notshowed")
    image1.classList.add("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.remove("notshowed")
    image3.classList.remove("notshowed")
    tracker = 3
  }

  if (tracker === 1){
    first.classList.remove("notshowed")
    image1.classList.remove("notshowed")

    second.classList.add("notshowed")
    image2.classList.add("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")

  }

  if (tracker === 2){
    first.classList.add("notshowed")
    image1.classList.add("notshowed")

    second.classList.remove("notshowed")
    image2.classList.remove("notshowed")

    third.classList.add("notshowed")
    image3.classList.add("notshowed")
  }

})
