const firebaseConfig = {
    apiKey: "AIzaSyBouYO0HPu1t3QnbCLtBNGkBFHyrlkwUOI",
    authDomain: "shah-b64ed.firebaseapp.com",
    databaseURL: "https://shah-b64ed-default-rtdb.firebaseio.com",
    projectId: "shah-b64ed",
    storageBucket: "shah-b64ed.appspot.com",
    messagingSenderId: "302375491140",
    appId: "1:302375491140:web:76768e55e1f910b6e94e11"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const db =getDatabase(app);
var al;
var all;
document.getElementsByTagName("body")[0].innerHTML=`    <div class='akhiri3'>
<div class='akhiri'>
    <div class='akhiri1'>
        <input class='ak2' onchange=a(this.value)>
        <br/>
        <input class='ak2' type='password' onchange=b(this.value)>
        <br/>
        <button class='botm3a' onclick=almn(this.value)>sign in</button>
    </div>
</div>
</div>`;



function a(a){
    console.log(a);
    al=a;
}
function b(a){
    console.log(a);
    all=a;
}
function almn(a){
     if(al=="AIzaSyBouYO0HPu1t3QnbCLtBNGkBFHyrlkwUOI" && all=="AIzaSyBouYO0HPu1t3QnbCLtBNGkBFHyrlkwUOIAIzaSyBouYO0HPu1t3QnbCLtBNGkBFHyrlkwUOI")
     {
        document.getElementsByTagName("body")[0].innerHTML=`<div class="Website-container">
	
        <!--   *** Home Section Starts ***   -->
        <section class="home" id="home">
            
            <!--   === Navbar Starts ===   -->
            <nav class="navbar">
                <div class="logo">
                    <img src="images/logo.png">
                </div>
        
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#testimonials">Reviews</a></li>
                </ul>
        
                <a href="#contactForm" class="button-wrapper">
                    <button class="btn contact-btn">Contact</button>
                </a>
        
                <div class="menu-btn">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </div>
            </nav>
            <!--   === Navbar Ends ===   -->
        
            <!--   === Hero Starts ===   -->
            <div class="hero">
                <div class="hero-text">
                    <h3>Hey, There</h3>
                    <h1>I am Jonathan Antony</h1>
                    <h2>Freelance Web Designer & Developer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    <button class="btn hire-btn">Hire Me</button>
                </div>
        
                <div class="hero-image">
                    <img src="images/hero-img.png">
                </div>
            </div>
            <!--   === Hero Ends ===   -->
        
            <!--   === Career Bar Starts ===  -->
            <div class="career-container">
                <div class="career-item">
                    <span class="icon"><i class="fa-solid fa-briefcase"></i></span>
                    <span class="career-desc">
                        <h2><input class='i1' maxLength='2' onchange=handlei1(this.value) name='i1'/> Years of</h2>
                        <p>Experience</p>
                    </span>
                </div>
        
                <div class="career-item">
                    <span class="icon"><i class="fa-solid fa-file"></i></span>
                    <span class="career-desc">
                        <h2><input class='i2' maxLength='3' onchange=handlei2(this.value) name='i2'/>+ Projects</h2>
                        <p>Completed</p>
                    </span>
                </div>
        
                <div class="career-item">
                    <span class="icon"><i class="fa-solid fa-heart"></i></span>
                    <span class="career-desc">
                        <h2><input class='i3' maxLength='3' onchange=handlei3(this.value) name='i3'/>+ Happy</h2>
                        <p>Clients</p>
                    </span>
                </div>
            </div>
            <!--   === Career Bar Ends ===  -->
        
        </section>
        <!--   *** Home Section Ends ***   -->
        
        <!--   *** About Section Starts ***   -->
        <section class="about" id="about">
            
            <!--   === About Image Starts ===   -->
            <div class="about-image">
                <img src="images/about-img.jpg">
                <div class="social-media">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </div>
            </div>
            <!--   === About Image Ends ===   -->
        
            <!--   === About Description Starts ===   -->
            <div class="about-desc">
                <h3>About Me</h3>
                <h2><input class='i4' maxLength='110' onchange=handlei4(this.value) name='i4'/></h2>
                <p id="i5"><textarea class='i5'  onchange=handlei5(this.value) name='i5'></textarea></p>
                <div class="about-personal-info">
                    <div><span>Name:</span><span><input class='i6' maxLength='36' onchange=handlei6(this.value) name='i6'/></span></div>
                    <div><span>Age:</span><span><input class='i7' maxLength='2' onchange=handlei7(this.value) name='i7'/></span></div>
                    <div><span>Email:</span><span><input class='i8' maxLength='36' onchange=handlei8(this.value) name='i8'/></span></div>
                    <div><span>Hobby:</span><span><input class='i9' maxLength='36' onchange=handlei9(this.value) name='i9'/></span></div>
                </div>
                <button class="btn download-btn">Download CV</button><input class='i10'  onchange=handlei10(this.value) name='i10'/>
            </div>
            <!--   === About Description Ends ===   -->
        
        </section>
        <!--   *** About Section Ends ***   -->
        
        <!--   *** Portfolio Section Starts ***   -->
        <section class="portfolio reusable" id="portfolio">
            
            <!--   === Headings Text Starts ===   -->
            <header class="headings">
                <h3>Portfolio</h3>
                <h1>Some Of My Latest Works</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>
            <!--   === Headings Text Ends ===   -->
        
            <main class="mainContainer">
                
                <!--   === Buttons Group Starts ===   -->
                <div class="button-group">
                    <button  onclick=but() class="button active" >All</button>
                    <button  onclick=but() class="button" >Design</button>
                    <button  onclick=but() class="button" >Development</button>
                    <button  onclick=but() class="button" >Logo</button>
                </div>
                <!--   === Buttons Group Ends ===   -->
        
                <!--   === Gallery Starts ===   -->
                <div class="gallery1">
                    
                    <!--   === Item1 Starts ===   -->
                    <div class="item design">
                        <img src="images/design1.jpg">
                        <div class="overlay">
                            <a href="images/design1.jpg">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item1 Ends ===   -->
        
                    <!--   === Item2 Starts ===   -->
                    <div class="item design">
                        <img src="images/design2.jpg">
                        <div class="overlay">
                            <a href="images/design2.jpg">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item2 Ends ===   -->
        
                    <!--   === Item3 Starts ===   -->
                    <div class="item code">
                        <img src="images/website1.jpg">
                        <div class="overlay">
                            <a href="images/website1.jpg">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item3 Ends ===   -->
        
                    <!--   === Item4 Starts ===   -->
                    <div class="item code">
                        <img src="images/website2.jpg">
                        <div class="overlay">
                            <a href="images/website2.jpg">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item4 Ends ===   -->
        
                    <!--   === Item5 Starts ===   -->
                    <div class="item code">
                        <img src="images/website3.jpg">
                        <div class="overlay">
                            <a href="images/website3.jpg">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item5 Ends ===   -->
        
                    <!--   === Item6 Starts ===   -->
                    <div class="item logo">
                        <img src="images/logo1.jpg">
                        <div class="overlay">
                            <a href="https://docs.google.com/document/d/1i8PoLO0EJXdCZZtyNU5n8xBDxlq7QhY6/edit">VIEW MORE</a>
                        </div>
                    </div>
                    <!--   === Item6 Ends ===   -->
        
                    <!--   === Item6 Starts ===   -->
                    <!-- <div class="item99 logo">
                        <img src="images/logo1.jpg">
                        <div class="1overlay">
                            <a href="https://docs.google.com/document/d/1i8PoLO0EJXdCZZtyNU5n8xBDxlq7QhY6/edit">VIEW MORE</a>
                        </div>
                    </div>	 -->
                    <!--   === Item6 Ends ===   -->
                </div>
                <!--   === Gallery Ends ===   -->
                
            </main>
        
        </section>
        <div onclick=AddChanges() ><button class="btn hire-btn center">Add new</button></div>
        <!--   *** Portfolio Section Ends ***   -->
        
        <!--   *** Testimonials Section Starts ***   -->
        <section class="testimonials reusable" id="testimonials">
            
            <!--   === Headings Text Starts ===   -->
            <header class="headings">
                <h3>Testimonials</h3>
                <h1>What People Say</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </header>
            <!--   === Headings Text Ends ===   -->
        
            <!--   === Owl Carousel Slider Container Starts ===   -->
            <div class="rev">
        
                <!--   === Card1 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Awesome Coding</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile1.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>John Doe</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card1 Ends ===   -->
        
                <!--   === Card2 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Unique Design</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile2.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>Jane Doe</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card2 Ends ===   -->
        
                <!--   === Card3 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Just Awesome</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile3.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>Albert Smith</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card3 Ends ===   -->
        
                <!--   === Card4 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Awesome Coding</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile4.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>Person Name</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card4 Ends ===   -->
        
                <!--   === Card5 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Simple Ways</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile5.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>Person Name</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card5 Ends ===   -->
        
                <!--   === Card6 Starts ===   -->
                <div class="item testimonial-card">
                    <main class="test-card-body">
                        <div class="quote">
                            <i class="fa fa-quote-left"></i>
                            <h2>Awesome Coding</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
                        <div class="ratings">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </main>
                    <div class="profile">
                        <div class="profile-image">
                            <img src="images/profile6.jpg">
                        </div>
                        <div class="profile-desc">
                            <span>Etimad Khan</span>
                            <span>Description</span>
                        </div>
                    </div>
                </div>
                <!--   === Card6 Ends ===   -->
                
            </div>
            <div onclick=AddChangesr() ><button class="btn hire-btn center">Add new</button></div>
            <!--   === Owl Carousel Slider Container Ends ===   -->
            <div onclick=saveChanges() ><button class="btn hire-btn center">Save changes</button></div>
        
        </section>
        <!--   *** Testimonials Section Ends ***   -->
        
        <!--   *** Footer Section Starts ***   -->
        <section class="page-footer">
            
            <footer class="footer-contents">
                <a href="#">Antony</a>
                <p>Created by <span>Five-Star Tutorials</span> | All rights reserved.</p>
            </footer>
            
        </section>
        <!--   *** Footer Section Ends ***   -->
        
        
        
        </div>
        <!--   *** Website Container Ends ***   -->
        
        
        
        <!--   *** Link To JQuery ***   -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.4/jquery.min.js" ></script>
        
        <!--   *** Link To Isotope ***   -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
        
        <!--   *** Link To Magnific Popup ***   -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
        
        <!--   *** Link To OwlCarousel Js ***   -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
        
        
        <!--   *** Link To Custom Script File ***   -->
        <script type="text/javascript" src="scripta.js"></script>`;



        firebase.database().ref("years").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i1")[0].value=a.val();
            console.log(    document.getElementsByClassName("i1")[0].value    );
            y=a.val();
        
        })
        function handlei1(a){
            document.getElementsByClassName("i1")[0].value=a;
            y=a;
            console.log("y",y);
        }
        firebase.database().ref("projects").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i2")[0].value=a.val();
            console.log(    document.getElementsByClassName("i2")[0].value    );
            p=a.val();
        })
        function handlei2(a){
            document.getElementsByClassName("i2")[0].value=a;
            p=a;
        }
        firebase.database().ref("clients").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i3")[0].value=a.val();
            console.log(    document.getElementsByClassName("i3")[0].value    );
            c=a.val();
        })
        function handlei3(a){
            document.getElementsByClassName("i3")[0].value=a;
            c=a;
        }
        firebase.database().ref("i4").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i4")[0].value=a.val();
            console.log(    document.getElementsByClassName("i4")[0].value    );
            i4=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei4(a){
            document.getElementsByClassName("i4")[0].value=a;
            i4=a;
            console.log("D",i4);
        }
        firebase.database().ref("i5").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i5")[0].value=a.val();
            console.log(    document.getElementsByClassName("i5")[0].value    );
            i5=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei5(a){
            document.getElementsByClassName("i5")[0].value=a;
            i5=a;
            console.log("D",i5);
        }
        firebase.database().ref("i6").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i6")[0].value=a.val();
            console.log(    document.getElementsByClassName("i6")[0].value    );
            i6=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei6(a){
            document.getElementsByClassName("i6")[0].value=a;
            i6=a;
            console.log("D",i6);
        }
        firebase.database().ref("i7").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i7")[0].value=a.val();
            console.log(    document.getElementsByClassName("i7")[0].value    );
            i7=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei7(a){
            document.getElementsByClassName("i7")[0].value=a;
            i7=a;
            console.log("D",i7);
        }
        firebase.database().ref("i8").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i8")[0].value=a.val();
            console.log(    document.getElementsByClassName("i8")[0].value    );
            i8=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei8(a){
            document.getElementsByClassName("i8")[0].value=a;
            i8=a;
            console.log("D",i8);
        }
        firebase.database().ref("i9").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i9")[0].value=a.val();
            console.log(    document.getElementsByClassName("i9")[0].value    );
            i9=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei9(a){
            document.getElementsByClassName("i9")[0].value=a;
            i9=a;
            console.log("D",i9);
        }
        firebase.database().ref("i10").on("value",(a)=>{
            // document.getElementsByClassName("i1").value=a.val();
            document.getElementsByClassName("i10")[0].value=a.val();
            console.log(    document.getElementsByClassName("i10")[0].value    );
            i10=a.val();
            // document.getElementById("#ii4")[0].innerHTML=i4;
        })
        function handlei10(a){
            document.getElementsByClassName("i10")[0].value=a;
            i10=a;
            console.log("D",i10);
        }
         kk= document.getElementsByClassName("gallery1")[0];
         kka = document.getElementsByClassName("button active")[0];
        
        firebase.database().ref("todos").on("value",(a)=>{
            data1=a.val();
            console.log("new",data1);
            
            var kaa1=[];
            var ka1=[];
            kaa1=data1;
            
            
            ka1=kaa1.map((item)=> {
                   return( `<div class="item code">
                                    <img src="${item.img}"/>
                                    <div class="overlay">
                                    <a>VIEW MORE</a>
                                    </div>
                                    <div class="upper">
                                    img <input class='i11' maxLength='330' onchange=handleipi(this.value,${item.id}) name='i11' value=${item.img}>
                                        <br>VIEW MORE <input class='i12' maxLength='330' onchange=handleipa(this.value,${item.id}) name='i12' value=${item.a}>
                                        <br>tag <input class='i13' maxLength='20' onchange=handleipt(this.value,${item.id}) name='i13' value=${item.tag}>
                                    </div>
                                    <button class="upper1" onclick=Deleteitem(${item.id})>Delete</button>
                            </div>`);
                });
            kaa1=ka1[0];
            for(var i=1;i<=ka1.length-1;i++)
            {kaa1+=ka1[i];}
            kk.innerHTML=kaa1;
            console.log(ka1);
            });//firebase end
            kk1= document.getElementsByClassName("rev")[0];

            firebase.database().ref("todosr").on("value",(a)=>{
           todosr=a.val();
           
       var kaa1=[];
       var ka1=[];
       kaa1=todosr;
       
       
       ka1=kaa1.map((item)=> {
              return( `
           <div class="item testimonial-card">
              <main class="test-card-body">
                  <div class="quote">
                      <i class="fa fa-quote-left"></i>
                      <h2><input class='i14' maxLength='330' onchange=handlerh(this.value,${item.id}) name='i11' value="${item.h}"></h2>
                  </div>
                  <p><input class='i14' maxLength='330' onchange=handlerp(this.value,${item.id}) name='i11' value="${item.p}"></p>
                  <div class="ratings">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                  </div>
              </main>
              <div class="profile">
                  <div class="profile-image">
                  <img src="${item.gender=="male" ? "images/male.jpg":"images/female.jpg"}">
                  </div>
                  <div class="profile-desc">
                      <span><input class='i14' maxLength='330' onchange=handlers1(this.value,${item.id}) name='i11' value="${item.s1}"><input class='i14' maxLength='330' onchange=handlerg(this.value,${item.id}) name='i11' value="${item.gender}"></span>
                      <span><input class='i14' maxLength='330' onchange=handlers2(this.value,${item.id}) name='i11' value="${item.s2}"><button onclick=Deleteitemr(${item.id})>Delete</button></span>
                  </div>
              </div>
          </div>`);
           });
       kaa1=ka1[0];
       for(var i=1;i<=ka1.length-1;i++)
       {kaa1+=ka1[i];}
       kk1.innerHTML=kaa1;
       console.log("kk1",kk1.innerHTML);
       console.log("todosr",todosr);
       })      



     }
     else{
        document.getElementsByTagName("body")[0].innerHTML=`<div class='akhiri3'>
        <div class='akhiri'>
            <div class='akhiri1'>
                <input class='ak2' onchange=a(this.value)>
                <br/>
                <input class='ak2' type='password' onchange=b(this.value)>
                <br/>
                <button class='botm3a' onclick=almn(this.value)>sign in</button>
            </div>
        </div>
        </div>`;
     }
    }

 
































var ata1=[{"img":"images/design1.jpg","a":"images/design1.jpg","tag":"all"},{"img":"images/website1.jpg","a":"images/website1.jpg","tag":"Development"},{"img":"images/logo1.jpg","a":"https://docs.google.com/document/d/1i8PoLO0EJXdCZZtyNU5n8xBDxlq7QhY6/edit","tag":"development"}]
  var data1=ata1;
  var ied=0;
  var ied1=5;
  // set(ref(db,`stent/a/a`),(
  //     ata1
  //   ))
//   firebase.database().ref("todos").set(ata1);

//   get(ref(db,'student/nndata')).then((ata)=>{
//     console.log("ya",ata);
//   })
firebase.database().ref("todos").on("value",(a)=>{data1=a.val();});
firebase.database().ref("ied").on("value",(a)=>{ied=a.val();});
firebase.database().ref("ied1").on("value",(a)=>{ied1=a.val();});













































// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(var i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})








var y;
var c;
var p;
var i4;
var i5;
var i6;
var i7;
var i8;
var i9;
var i10;
var todosr=[
    {"id":"0","gender":"male","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Jane Doe","s2":"Description"},
    {"id":"1","gender":"female","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Jane Doe","s2":"Description"},
    {"id":"2","gender":"male","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Albert Smith","s2":"Description"},
    {"id":"3","gender":"female","h":"Awesome Coding","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Person Name","s2":"Description"},
    {"id":"4","gender":"female","h":"Simple Ways","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Person Name","s2":"Description"},
    {"id":"5","gender":"male","h":"Awesome Coding","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Etimad Khan","s2":"Description"}
];

//  firebase.database().ref("todosr").set(todosr);
// firebase.database().ref("i4").set("Professional Web Designer & Developer having 9+ years of experience");
// firebase.database().ref("i5").set("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
// firebase.database().ref("i6").set("J Antony");
// firebase.database().ref("i7").set("24");
// firebase.database().ref("i8").set("xyz@gmail.com");
// firebase.database().ref("i9").set("Cricket");
// firebase.database().ref("i10").set("https://www.facebook.com");
// firebase.database().ref("todos").set(data1);
// firebase.database().ref("ied1").set(ied1);


// var data1=[{"id":"0","img":"images/design1.jpg","a":"images/design1.jpg","tag":"Design"},{"id":"1","img":"images/design2.jpg","a":"images/design2.jpg","tag":"Design"},{"id":"2","img":"images/website1.jpg","a":"images/website1.jpg","tag":"Development"},{"id":"3","img":"images/website2.jpg","a":"images/website2.jpg","tag":"development"},{"id":"4","img":"images/website3.jpg","a":"images/website3.jpg","tag":"logo"},{"id":"5","img":"images/logo1.jpg","a":"images/logo1.jpg","tag":"logo"}]

firebase.database().ref("years").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i1")[0].value=a.val();
    console.log(    document.getElementsByClassName("i1")[0].value    );
    y=a.val();

})
function handlei1(a){
    document.getElementsByClassName("i1")[0].value=a;
    y=a;
    console.log("y",y);
}
firebase.database().ref("projects").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i2")[0].value=a.val();
    console.log(    document.getElementsByClassName("i2")[0].value    );
    p=a.val();
})
function handlei2(a){
    document.getElementsByClassName("i2")[0].value=a;
    p=a;
}
firebase.database().ref("clients").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i3")[0].value=a.val();
    console.log(    document.getElementsByClassName("i3")[0].value    );
    c=a.val();
})
function handlei3(a){
    document.getElementsByClassName("i3")[0].value=a;
    c=a;
}
firebase.database().ref("i4").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i4")[0].value=a.val();
    console.log(    document.getElementsByClassName("i4")[0].value    );
    i4=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei4(a){
    document.getElementsByClassName("i4")[0].value=a;
    i4=a;
    console.log("D",i4);
}
firebase.database().ref("i5").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i5")[0].value=a.val();
    console.log(    document.getElementsByClassName("i5")[0].value    );
    i5=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei5(a){
    document.getElementsByClassName("i5")[0].value=a;
    i5=a;
    console.log("D",i5);
}
firebase.database().ref("i6").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i6")[0].value=a.val();
    console.log(    document.getElementsByClassName("i6")[0].value    );
    i6=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei6(a){
    document.getElementsByClassName("i6")[0].value=a;
    i6=a;
    console.log("D",i6);
}
firebase.database().ref("i7").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i7")[0].value=a.val();
    console.log(    document.getElementsByClassName("i7")[0].value    );
    i7=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei7(a){
    document.getElementsByClassName("i7")[0].value=a;
    i7=a;
    console.log("D",i7);
}
firebase.database().ref("i8").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i8")[0].value=a.val();
    console.log(    document.getElementsByClassName("i8")[0].value    );
    i8=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei8(a){
    document.getElementsByClassName("i8")[0].value=a;
    i8=a;
    console.log("D",i8);
}
firebase.database().ref("i9").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i9")[0].value=a.val();
    console.log(    document.getElementsByClassName("i9")[0].value    );
    i9=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei9(a){
    document.getElementsByClassName("i9")[0].value=a;
    i9=a;
    console.log("D",i9);
}
firebase.database().ref("i10").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    document.getElementsByClassName("i10")[0].value=a.val();
    console.log(    document.getElementsByClassName("i10")[0].value    );
    i10=a.val();
    // document.getElementById("#ii4")[0].innerHTML=i4;
})
function handlei10(a){
    document.getElementsByClassName("i10")[0].value=a;
    i10=a;
    console.log("D",i10);
}
function saveChanges(){

firebase.database().ref("ied").set(ied);
firebase.database().ref("ied1").set(ied1);
firebase.database().ref("todos").set(data1);
firebase.database().ref("todosr").set(todosr);
firebase.database().ref("years").set(y);
firebase.database().ref("projects").set(p);
firebase.database().ref("clients").set(c);
firebase.database().ref("i4").set(i4);
firebase.database().ref("i5").set(i5);
firebase.database().ref("i6").set(i6);
firebase.database().ref("i7").set(i7);
firebase.database().ref("i8").set(i8);
firebase.database().ref("i9").set(i9);
firebase.database().ref("i10").set(i10);
console.log(data1);
}
// firebase.database().ref("todos").set(data1);
// firebase.database().ref("years").set(5);
// firebase.database().ref("projects").set(5);
// firebase.database().ref("clients").set(5);
// firebase.database().ref("id").set(5);

var kk= document.getElementsByClassName("gallery1")[0];
var kka = document.getElementsByClassName("button active")[0];

firebase.database().ref("todos").on("value",(a)=>{
data1=a.val();
console.log("new",data1);

var kaa1=[];
var ka1=[];
kaa1=data1;


ka1=kaa1.map((item)=> {
       return( `<div class="item code">
                        <img src="${item.img}"/>
                        <div class="overlay">
                        <a>VIEW MORE</a>
                        </div>
                        <div class="upper">
                        img <input class='i11' maxLength='330' onchange=handleipi(this.value,${item.id}) name='i11' value=${item.img}>
                            <br>VIEW MORE <input class='i12' maxLength='330' onchange=handleipa(this.value,${item.id}) name='i12' value=${item.a}>
                            <br>tag <input class='i13' maxLength='20' onchange=handleipt(this.value,${item.id}) name='i13' value=${item.tag}>
                        </div>
                        <button class="upper1" onclick=Deleteitem(${item.id})>Delete</button>
                </div>`);
    });
kaa1=ka1[0];
for(var i=1;i<=ka1.length-1;i++)
{kaa1+=ka1[i];}
kk.innerHTML=kaa1;
console.log(ka1);
});//firebase end





function handleipi(value,idd){
    console.log(data1);

    for(var j=0;j<data1.length;j++){
        if(idd==data1[j].id){
            data1[j].img=value;
        }
    }
     
     console.log(value,idd,data1);
 
}

function handleipa(value,idd){
    for(var j=0;j<data1.length;j++){
        if(idd==data1[j].id){
            data1[j].a=value;
        }
    }    
}

function handleipt(value,idd){
    for(var j=0;j<data1.length;j++){
        if(idd==data1[j].id){
            data1[j].tag=value;
        }
    }
}

var kk1= document.getElementsByClassName("rev")[0];

     firebase.database().ref("todosr").on("value",(a)=>{
    todosr=a.val();
    
var kaa1=[];
var ka1=[];
kaa1=todosr;


ka1=kaa1.map((item)=> {
       return( `
    <div class="item testimonial-card">
       <main class="test-card-body">
           <div class="quote">
               <i class="fa fa-quote-left"></i>
               <h2><input class='i14' maxLength='330' onchange=handlerh(this.value,${item.id}) name='i11' value="${item.h}"></h2>
           </div>
           <p><input class='i14' maxLength='330' onchange=handlerp(this.value,${item.id}) name='i11' value="${item.p}"></p>
           <div class="ratings">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
           </div>
       </main>
       <div class="profile">
           <div class="profile-image">
               <img src="images/profile1.jpg">
           </div>
           <div class="profile-desc">
               <span><input class='i14' maxLength='330' onchange=handlers1(this.value,${item.id}) name='i11' value="${item.s1}"><input class='i14' maxLength='330' onchange=handlerg(this.value,${item.id}) name='i11' value="${item.gender}"></span>
               <span><input class='i14' maxLength='330' onchange=handlers2(this.value,${item.id}) name='i11' value="${item.s2}"><button onclick=Deleteitemr(${item.id})>Delete</button></span>
           </div>
       </div>
   </div>`);
    });
kaa1=ka1[0];
for(var i=1;i<=ka1.length-1;i++)
{kaa1+=ka1[i];}
kk1.innerHTML=kaa1;
console.log("kk1",kk1.innerHTML);
})

function AddChanges(){
    // firebase.database().ref("todos").on("value",(a)=>{
    //     data1=a.val();
        console.log("new",data1);
        
        var kaa1=[];
        var ka1=[{"id":ied,"img":"images/website2.jpg","a":"images/website2.jpg","tag":"null"}];
        kaa1=[...data1,...ka1];
        data1=kaa1;
        
        ka1=kaa1.map((item)=> {
               return( `<div class="item code">
               <img src="${item.img}"/>
               <div class="overlay">
               <a>VIEW MORE</a>
               </div>
               <div class="upper">
               img <input class='i11' maxLength='330' onchange=handleipi(this.value,${item.id}) name='i11' value=${item.img}>
                   <br>VIEW MORE <input class='i12' maxLength='330' onchange=handleipa(this.value,${item.id}) name='i12' value=${item.a}>
                   <br>tag <input class='i13' maxLength='20' onchange=handleipt(this.value,${item.id}) name='i13' value=${item.tag}>
               </div>
               <button class="upper1" onclick=Deleteitem(${item.id})>Delete</button>
       </div>`);
            });
        kaa1=ka1[0];
        for(var i=1;i<=ka1.length-1;i++)
        {kaa1+=ka1[i];}
        kk.innerHTML=kaa1;
        console.log(ka1);
        // });//firebase end
        ied++;
}

function Deleteitem(idd){
    data1 = data1.filter(function (e) {
        return e.id != idd;
    });
    var kaa1=[];
var ka1=[];
kaa1=data1;


ka1=kaa1.map((item)=> {
       return( `<div class="item code">
                        <img src="${item.img}"/>
                        <div class="overlay">
                        <a>VIEW MORE</a>
                        </div>
                        <div class="upper">
                        img <input class='i11' maxLength='330' onchange=handleipi(this.value,${item.id}) name='i11' value=${item.img}>
                            <br>VIEW MORE <input class='i12' maxLength='330' onchange=handleipa(this.value,${item.id}) name='i12' value=${item.a}>
                            <br>tag <input class='i13' maxLength='20' onchange=handleipt(this.value,${item.id}) name='i13' value=${item.tag}>
                        </div>
                        <button class="upper1" onclick=Deleteitem(${item.id})>Delete</button>
                </div>`);
    });
kaa1=ka1[0];
for(var i=1;i<=ka1.length-1;i++)
{kaa1+=ka1[i];}
kk.innerHTML=kaa1;
console.log(ka1);
}

function handlerh(value,idd){
    for(var j=0;j<todosr.length;j++){
        if(idd==todosr[j].id){
            todosr[j].h=value;
        }
    }
}
function handlerp(value,idd){
    for(var j=0;j<todosr.length;j++){
        if(idd==todosr[j].id){
            todosr[j].p=value;
        }
    }
}
function handlerg(value,idd){
    for(var j=0;j<todosr.length;j++){
        if(idd==todosr[j].id){
            todosr[j].gender=value;
        }
    }
}
function handlers1(value,idd){
    for(var j=0;j<todosr.length;j++){
        if(idd==todosr[j].id){
            todosr[j].s1=value;
        }
    }
}
function handlers2(value,idd){
    for(var j=0;j<todosr.length;j++){
        if(idd==todosr[j].id){
            todosr[j].s2=value;
        }
    }
}



function Deleteitemr(idd){
    todosr = todosr.filter(function (e) {
        return e.id != idd;
    });
    var kaa1=[];
var ka1=[];
kaa1=todosr;


ka1=kaa1.map((item)=> {
       return( `
    <div class="item testimonial-card">
       <main class="test-card-body">
           <div class="quote">
               <i class="fa fa-quote-left"></i>
               <h2><input class='i14' maxLength='330' onchange=handlerh(this.value,${item.id}) name='i11' value="${item.h}"></h2>
           </div>
           <p><input class='i14' maxLength='330' onchange=handlerp(this.value,${item.id}) name='i11' value="${item.p}"></p>
           <div class="ratings">
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
               <i class="fa-solid fa-star"></i>
           </div>
       </main>
       <div class="profile">
           <div class="profile-image">
           <img src="${item.gender=="male" ? "images/male.jpg":"images/female.jpg"}">
           </div>
           <div class="profile-desc">
               <span><input class='i14' maxLength='330' onchange=handlers1(this.value,${item.id}) name='i11' value="${item.s1}"><input class='i14' maxLength='330' onchange=handlerg(this.value,${item.id}) name='i11' value="${item.gender}"></span>
               <span><input class='i14' maxLength='330' onchange=handlers2(this.value,${item.id}) name='i11' value="${item.s2}"><button onclick=Deleteitemr(${item.id})>Delete</button></span>
           </div>
       </div>
   </div>`);
    });
kaa1=ka1[0];
for(var i=1;i<=ka1.length-1;i++)
{kaa1+=ka1[i];}
kk1.innerHTML=kaa1;
}
function AddChangesr(){
    // firebase.database().ref("todos").on("value",(a)=>{
    //     data1=a.val();
        console.log("new",data1);
        
        var kaa1=[];
        var ka1=[{"id":ied1,"gender":"male","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Jane Doe","s2":"Description"}];
        kaa1=[...todosr,...ka1];
        todosr=kaa1;
        
        ka1=kaa1.map((item)=> {
               return( `
            <div class="item testimonial-card">
               <main class="test-card-body">
                   <div class="quote">
                       <i class="fa fa-quote-left"></i>
                       <h2><input class='i14' maxLength='330' onchange=handlerh(this.value,${item.id}) name='i11' value="${item.h}"></h2>
                   </div>
                   <p><input class='i14' maxLength='330' onchange=handlerp(this.value,${item.id}) name='i11' value="${item.p}"></p>
                   <div class="ratings">
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                   </div>
               </main>
               <div class="profile">
                   <div class="profile-image">
                   <img src="${item.gender=="male" ? "images/male.jpg":"images/female.jpg"}">
                   </div>
                   <div class="profile-desc">
                       <span><input class='i14' maxLength='330' onchange=handlers1(this.value,${item.id}) name='i11' value="${item.s1}"><input class='i14' maxLength='330' onchange=handlerg(this.value,${item.id}) name='i11' value="${item.gender}"></span>
                       <span><input class='i14' maxLength='330' onchange=handlers2(this.value,${item.id}) name='i11' value="${item.s2}"><button onclick=Deleteitemr(${item.id})>Delete</button></span>
                   </div>
               </div>
           </div>`);
            });
        kaa1=ka1[0];
        for(var i=1;i<=ka1.length-1;i++)
        {kaa1+=ka1[i];}
        kk1.innerHTML=kaa1;
        console.log("tr",todosr);
        // });//firebase end
        ied1++;
}





function but(){
    console.log("l");
    var aaa=`<div class="item code">
				
    </div>`;

    setTimeout(function () {var kk= document.getElementsByClassName("gallery1")[0];
    var kka = document.getElementsByClassName("button active")[0];
    
    firebase.database().ref("todos").on("value",(a)=>{
    data1=a.val();
    console.log("new",data1);
    
    var kaa1=[];
    var ka1=[];
    var searchTerm=kka.innerHTML.toLowerCase();

    if(searchTerm=="all"){
        kaa1=data1;
    }
    else{
    data1.filter(item => {
        
        const fullName=item.tag.toLowerCase();
        console.log(fullName);
        return searchTerm && fullName.startsWith(searchTerm);
    })
    .map((item)=> {
        ka1=[item];
        kaa1=[...kaa1,...ka1];
    })
}

    
    ka1=kaa1.map((item)=> {
           return( `<div class="item code">
            				<img src="${item.img}"/>
            				<div class="overlay">
            					<a href="${item.a}">VIEW MORE</a>
            				</div>
                	</div>`);
        });
    kaa1=ka1[0];
    for(var i=1;i<=ka1.length-1;i++)
    {kaa1+=ka1[i];}
    kk.innerHTML=kaa1;
    console.log(ka1);
});//firebase end
}, 1000);

}






