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
