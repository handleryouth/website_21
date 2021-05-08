const leftArrow = document.querySelector(".left-selection")
const rightArrow = document.querySelector(".right-selection")

var first = document.querySelector(".slide1")
var second = document.querySelector(".slide2")
var third = document.querySelector(".slide3")


var tracker = 1


rightArrow.addEventListener("click", function(){
  tracker += 1
  if (tracker < 1){
    first.classList.remove("notshowed")
    first.classList.add("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")
    tracker = 3
  }

  if (tracker === 1){
    first.classList.remove("notshowed")
    first.classList.add("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")
  }

  if (tracker === 2){
    first.classList.add("notshowed")
    first.classList.remove("flex-display")

    second.classList.remove("notshowed")
    second.classList.add("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")

  }

  if (tracker === 3){
    first.classList.add("notshowed")
    first.classList.remove("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.remove("notshowed")
    third.classList.add("flex-display")
    tracker = 0
  }

  if (tracker > 3){
    first.classList.remove("notshowed")
    first.classList.add("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")
    tracker = 1
  }
})

leftArrow.addEventListener("click", function(){
  tracker -= 1
  if (tracker < 0){
    first.classList.add("notshowed")
    first.classList.remove("flex-display")

    second.classList.remove("notshowed")
    second.classList.add("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")
    tracker = 2
  }


  if (tracker === 0){
    first.classList.add("notshowed")
    first.classList.remove("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.remove("notshowed")
    third.classList.add("flex-display")
    tracker = 3
  }

  if (tracker === 1){
    first.classList.remove("notshowed")
    first.classList.add("flex-display")

    second.classList.add("notshowed")
    second.classList.remove("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")

  }

  if (tracker === 2){
    first.classList.add("notshowed")
    first.classList.remove("flex-display")

    second.classList.remove("notshowed")
    second.classList.add("flex-display")

    third.classList.add("notshowed")
    third.classList.remove("flex-display")
  }

})
