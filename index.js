    //for search portion

    let Top_search = document.getElementById("Top_search")

    let search = document.getElementById("Top_search")
    
    let text = search.querySelectorAll("a")
    
    let search_input = document.getElementById("search_input")
    
    search_input.addEventListener("click",show)
    
    Top_search.addEventListener("mouseleave",hide)
    
    function show(e) { 
    search_input.textContent = text.textContent
       search.style.display = "flex"
    }
    function hide() {
        search.style.display = "none"
    }
    //end of search portion
    
    // for cart icon portion
    
    let cart_pop = document.getElementById("cart")
    let cart_icon = document.getElementById("cart_icon")
    cart_icon.addEventListener("click", pop)
    cart_pop.addEventListener("mouseleave", hiden)
    
    function pop () {
        cart_pop.style.display = "block" 
    }
    function hiden() {
        cart_pop.style.display = "none"
    }
    // end of cart icon
    
    //for sport_sec pop 
    
    let sport_dis = document.getElementsByClassName("sport_sec")[0]
    
    let sportt_nav = document.getElementById("fitnes_goods")
    
    sportt_nav.addEventListener("mouseover" , disply)
    sportt_nav.addEventListener("click" , hidesport_sec)
    function disply(){
        sport_dis.style.display ="flex"
    }
    function hidesport_sec() {
        sport_dis.style.display="none"
    }
    
    // end of sport_sec
    
    // for skin pop 
    
    let skin = document.getElementsByClassName("sport_sec")[1]
    
    let for_skin = document.getElementById("for_skin")
    
    for_skin.addEventListener("mouseover" , disply2)
    for_skin.addEventListener("click" , hideskin)
    function disply2(){
        skin.style.display ="flex"
    }
    function hideskin() {
        skin.style.display="none"
    }
    //end skin pop
    
    
    
    
    
    let images = [
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PAANY-R.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Blade-V8-5.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/VCORE-PRO-2021-1.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/PARAFA.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/RADICAL-AND-SPEED-BLACK-BANNER.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Airshaft-BANNER-2.jpg",
        "https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/Nanoflare-800.jpg"
    ]
    
    
      
    
        let container = document.getElementById("slide")
    
        let img1 = document.createElement("img")
        img1.setAttribute("class", "image")
        img1.src = images[images.length-1]
        container.append(img1)
    
        let interval;
    
        function startslideshow() {
    
            let count = 0;
    
            interval = setInterval(function(){
    
                container.innerHTML = null;
    
                if(count == images.length) {
                    count = 0;
                } 
    
                let img = document.createElement("img") 
                img.setAttribute("class" , "image")
                img.src= images[count]
    
                container.append(img)
                count++
    
            },3000)
    
        }
    
        startslideshow()


          //login start

    let loginn = document.getElementById("loginn")
    let clicklog = document.getElementById("clicklog")
    let cut = document.getElementById("cut")

    clicklog.addEventListener("click" , showlogin)
   function showlogin () {
       loginn.style.display = "block"
   }

   cut.addEventListener("click" , hiddlogin)

   function hiddlogin() {
       loginn.style.display = "none"
   }


   let flag = false;

   function loggin(event) {
        event.preventDefault()



        let email = document.getElementById("email")
        let password = document.getElementById("password")

        let all_users = JSON.parse(localStorage.getItem("hok_users"))


        all_users.forEach(function(user){

            if(email.value == user.email && password.value == user.password) {

                email.value = ""
                    password.value = ""
                setTimeout(function(){
                   
                    window.location.href = "index.html"
                },2000)
                
            }else {
            flag = true
            return
            }

        })

      
      
    }

    if(flag == true) {
            alert("Invalid Credentials")
        }

    

    //login end

    //chat box start 

    let selectchatbtn = document.getElementById("chatshowbtn")
    selectchatbtn.addEventListener("click" , chat_dikhao)

    let dikhana = document.getElementById("chatwith_ankit")


    function chat_dikhao() {
        dikhana.style.display = "block"
    }

    function htta() {
        dikhana.style.display = "none"
    }


    function dikhaobar() {
        let sidebar = document.getElementById("side-bar")
        sidebar.style.display = "block"
    }

    function htaobar() {
        let sidebar = document.getElementById("side-bar")
        sidebar.style.display = "none"
    }