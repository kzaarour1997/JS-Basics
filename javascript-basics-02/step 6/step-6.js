function v(){

    const image1 = document.querySelector("#image1")
    const image2 = document.querySelector("#image2")
    const image3 = document.querySelector("#image3")
    const image4 = document.querySelector("#image4")
    const image5 = document.querySelector("#image5")
    image1.addEventListener('mouseover', function (){
    this.src = "images/image1_2.jpg"
    })
    image2.addEventListener('mouseover' , function (){
    this.src= "images/image2_2.jpg"
    })
    image3.addEventListener('mouseover', function (){
    this.src = "images/image3_2.jpg"
    })
    image4.addEventListener('mouseover', function (){
    this.src = "images/image4_2.jpg"
    })
    image5.addEventListener('mouseover', function (){
    this.src = "images/image5_2.jpg"
    })
    }
    function f(){

    const image1 = document.querySelector("#image1")
    const image2 = document.querySelector("#image2")
    const image3 = document.querySelector("#image3")
    const image4 = document.querySelector("#image4")
    const image5 = document.querySelector("#image5")
    image1.addEventListener('mouseout', function (){
    this.src = "images/image1.jpg"
    })
    image2.addEventListener('mouseout' , function (){
    this.src= "images/image2.jpg"
    })
    image3.addEventListener('mouseout', function (){
    this.src = "images/image3.jpg"
    })
    image4.addEventListener('mouseout', function (){
    this.src = "images/image4.jpg"
    })
    image5.addEventListener('mouseout', function (){
    this.src = "images/image5.jpg"
    })


    }