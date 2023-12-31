
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
//   const db =getDatabase(app);
  var ata1=[{"img":"images/design1.jpg","a":"images/design1.jpg","tag":"all"},{"img":"images/website1.jpg","a":"images/website1.jpg","tag":"Development"},{"img":"images/logo1.jpg","a":"https://docs.google.com/document/d/1i8PoLO0EJXdCZZtyNU5n8xBDxlq7QhY6/edit","tag":"development"}]
//   var data1=ata1;
  // set(ref(db,`stent/a/a`),(
  //     ata1
  //   ))
//   firebase.database().ref("todos").set(ata1);

//   get(ref(db,'student/nndata')).then((ata)=>{
//     console.log("ya",ata);
//   })
  firebase.database().ref("todos").on("value",(a)=>{data1=a.val()});



var todosr=[
    {"id":"0","gender":"male","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Jane Doe","s2":"Description"},
    {"id":"1","gender":"female","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Jane Doe","s2":"Description"},
    {"id":"2","gender":"male","h":"Just Awesome","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Albert Smith","s2":"Description"},
    {"id":"3","gender":"female","h":"Awesome Coding","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Person Name","s2":"Description"},
    {"id":"4","gender":"female","h":"Simple Ways","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Person Name","s2":"Description"},
    {"id":"5","gender":"male","h":"Awesome Coding","p":"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.","s1":"Etimad Khan","s2":"Description"}
];
var kk1= document.getElementsByClassName("i88")[0];
console.log("go",kk1.innerHTML);
// firebase.database().ref("todosr").on("value",(a)=>{console.log("todosr1",a.val());console.log("todosr2",todosr);})
// firebase.database().ref("todos").on("value",(a)=>{
firebase.database().ref("todosr").on("value",(a)=>{
    todosr=a.val();
    console.log("todosr",todosr);
    // todosr=["a","c","b"];
var kaa1=[];
var ka1=[];
var d1='<section class="testimonials reusable" id="testimonials"><header class="headings"><h3>Testimonials</h3><h1>What People Say</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p></header><div class="owl-carousel owl-theme testimonials-container">';
var d2='</div></section>';
kaa1=todosr;

console.log("kaa1",kaa1);
ka1=kaa1.map((item)=> {
       return( `
       <div class="item testimonial-card">
           <main class="test-card-body">
               <div class="quote">
                   <i class="fa fa-quote-left"></i>
                   <h2>${item.h}</h2>
               </div>
               <p>${item.p}</p>
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
                   <span>${item.s1}</span>
                   <span>${item.s2}</span>
               </div>
           </div>
       </div>`);
    });
kaa1=ka1[0];
for(var i=1;i<=ka1.length-1;i++)
{kaa1+=ka1[i];}
kaa1=d1+kaa1+d2;
kk1.innerHTML=kaa1;
console.log("kk1",kk1.innerHTML,"hogia");






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






})//fire




































// // Home Section Starts
// var menuBtn = document.querySelector('.menu-btn');
// var menu = document.querySelector('.nav-links');
// var menuLinks = document.querySelectorAll('.nav-links li a');

// menuBtn.addEventListener('click', activeClass);

// function activeClass(){
// 	menuBtn.classList.toggle('active');
// 	menu.classList.toggle('active');
// }

// for(var i = 0; i < menuLinks.length; i++){
// 	menuLinks[i].addEventListener('click', menuItemClicked);
// }

// function menuItemClicked(){
// 	menuBtn.classList.remove('active');
// 	menu.classList.remove('active');
// }

// var homeSection = document.querySelector('.home');
// window.addEventListener('scroll', scrollFunction);
// window.addEventListener('load', scrollFunction);

// function scrollFunction(){
// 	if(window.scrollY > 60){
// 		homeSection.classList.add('active');
// 	}
// 	else{
// 		homeSection.classList.remove('active');
// 	}
// }
// // Home Section Ends 

// // Portfolio Section Starts
// var $galleryContainer = $('.gallery').isotope({
// 	itemSelector: '.item',
// 	layoutMode: 'fitRows'
// })

// $('.button-group .button').on('click', function(){
// 	$('.button-group .button').removeClass('active');
// 	$(this).addClass('active');

// 	var value = $(this).attr('data-filter');
// 	$galleryContainer.isotope({
// 		filter: value
// 	})
// })

// // magnific popup
// $('.gallery').magnificPopup({
// 	delegate: '.overlay a',
// 	type: 'image',
// 	gallery:{
// 		enabled: true
// 	}
// })
// // Portfolio Section Ends

// // Testimonials Section Starts
// $('.testimonials-container').owlCarousel({
//     loop:true,
//     autoplay:true,
//     autoplayTime:6000,
//     margin:10,
//     nav:true,
//     navText:["<i class='fa-solid fa-arrow-left'></i>",
//              "<i class='fa-solid fa-arrow-right'></i>"],
//     responsive:{
//         0:{
//             items:1,
//             nav:false
//         },
//         600:{
//             items:1,
//             nav:true
//         },
//         768:{
//             items:2
//         }
//     }
// })








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
// var i11;
// var i12;
// var i13;

// firebase.database().ref("i4").set("Professional Web Designer & Developer having 9+ years of experience");

var data1=[{"id":"0","img":"images/design1.jpg","a":"images/design1.jpg","tag":"Design"},{"id":"1","img":"images/design2.jpg","a":"images/design2.jpg","tag":"Design"},{"id":"2","img":"images/website1.jpg","a":"images/website1.jpg","tag":"Development"},{"id":"3","img":"images/website2.jpg","a":"images/website2.jpg","tag":"development"},{"id":"4","img":"images/website3.jpg","a":"images/website3.jpg","tag":"logo"},{"id":"5","img":"images/logo1.jpg","a":"images/logo1.jpg","tag":"logo"}]

firebase.database().ref("years").on("value",(a)=>{
    document.getElementsByClassName("y")[0].innerHTML=`${a.val()} Years of`;
    // document.getElementsByClassName("i1")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i1")[0].value    );
    // y=a.val();

})
firebase.database().ref("projects").on("value",(a)=>{
    document.getElementsByClassName("p")[0].innerHTML=`${a.val()}+ Projects`;
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i2").value=a.val();
    // console.log(    document.getElementsByClassName("i2")[0].value    );
    // p=a.val();
})
firebase.database().ref("clients").on("value",(a)=>{
    document.getElementsByClassName("c")[0].innerHTML=`${a.val()}+ Happy`;
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i3").value=a.val();
    // console.log(    document.getElementsByClassName("i3")[0].value    );
    // c=a.val();
})
firebase.database().ref("i4").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i4=a.val();
    document.getElementById("i4").innerHTML=i4;
})
firebase.database().ref("i5").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i5=a.val();
    document.getElementById("i5").innerHTML=i5;
})
firebase.database().ref("i6").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i6=a.val();
    document.getElementById("i6").innerHTML=i6;
})
firebase.database().ref("i7").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i7=a.val();
    document.getElementById("i7").innerHTML=i7;
})
firebase.database().ref("i8").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i8=a.val();
    document.getElementById("i8").innerHTML=i8;
})
firebase.database().ref("i9").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i9=a.val();
    document.getElementById("i9").innerHTML=i9;
})
firebase.database().ref("i10").on("value",(a)=>{
    // document.getElementsByClassName("i1").value=a.val();
    // document.getElementsByClassName("i4")[0].value=a.val();
    // console.log(    document.getElementsByClassName("i4")[0].value    );
    i10=a.val();
    document.getElementById("i10").setAttribute("href",i10);
})
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


ka1=kaa1.slice(0,6).map((item)=> {
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
        // data1.filter(item => {
        //     searchTerm="design";
        //     const fullName=item.tag.toLowerCase();
        //     console.log(fullName);
        //     return searchTerm && fullName.startsWith(searchTerm);
        // }).slice(0,2)
        // .map((item)=> {
        //     ka1=[item];
        //     kaa1=[...kaa1,...ka1];
        // })

        // data1.filter(item => {
        //     searchTerm="development";
        //     const fullName=item.tag.toLowerCase();
        //     console.log(fullName);
        //     return searchTerm && fullName.startsWith(searchTerm);
        // }).slice(0,2)
        // .map((item)=> {
        //     ka1=[item];
        //     kaa1=[...kaa1,...ka1];
        // })

        // data1.filter(item => {
        //     searchTerm="logo";
        //     const fullName=item.tag.toLowerCase();
        //     console.log(fullName);
        //     return searchTerm && fullName.startsWith(searchTerm);
        // }).slice(0,2)
        // .map((item)=> {
        //     ka1=[item];
        //     kaa1=[...kaa1,...ka1];
        // }) 
        kaa1=data1.slice(0,6)
        
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








// function but(){
//     return( setTimeout(function () {var kk= document.getElementsByClassName("gallery1")[0];
//     var kka = document.getElementsByClassName("button active")[0];
    
    
//     var kaa1=[];
//     var ka1=[];
//         data1.filter(item => {
//         var searchTerm=kka.innerHTML.toLowerCase();
//         const fullName=item.tag.toLowerCase();
//         console.log(fullName);
//         return searchTerm && fullName.startsWith(searchTerm);
//     })
//     .map((item)=> {
//         ka1=[item]
//         kaa1=[...kaa1,...ka1]
//     })
    

    
//     return(
//     kk.innerHTML=kaa1.map((item)=>{

//             <div class="item code">
// 				<img src={item.img}/>
// 				<div class="overlay">
// 					<a href={item.a}>VIEW MORE</a>
// 				</div>
// 			</div>
// });
// )}, 1000)
// )}



var data=["ali","b","al","ai"]
var kaa=[];
var ka=[];
var searchTerm1="Al";
data.filter(item => {
    var searchTerm=searchTerm1.toLowerCase();
    const fullName=item.toLowerCase();

    return searchTerm && fullName.startsWith(searchTerm);
})
.map((item)=> {
    ka=[item]
    kaa=[...kaa,...ka]
})
console.log(kaa);


