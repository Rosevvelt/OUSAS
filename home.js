let fileInput= document.getElementById("fileInput")
let rel_fileInput=document.getElementById("rel_fileInput")
let profile_img=document.getElementById("profile_img")
let the_mood=document.getElementById("the_mood")
let header=document.getElementById("header")
let log_out=document.getElementById("log_out")
let Profile=document.getElementById("Profile")
let info_profile=document.getElementById("info_profile")
let Name_us=document.getElementById("Name_us")
let pro_user=document.getElementById("pro_user")
let titel_system=document.getElementById("titel_system")
let select=document.getElementById("select")
let section=document.getElementById("sec")
let meom=document.getElementById("meom")///
let header_post=document.querySelectorAll(".header_post")
let all_h3=document.querySelectorAll("h3")
let all_h2=document.querySelectorAll("h2")
let post=document.querySelectorAll(".posts")
let coments_pepole=document.querySelectorAll(".coments_pepole")
let other_color=document.querySelectorAll(".other_color")
let text_coment=document.querySelectorAll(".text_coment")
let p=document.getElementById("post")
let INPUT=document.getElementById("INPUT")
let label=document.getElementById("label")
let closs_pic_post=document.getElementById("closs_pic_post")
let mod="dirk"
let sec=document.getElementById("sec")
let system=document.getElementById("system")
let home=document.getElementById("home")

let save_mood=localStorage.getItem("mood")
let btm= document.querySelectorAll(".btm")
let btm2= document.querySelector(".btm2")
let btm22= document.querySelectorAll(".btm2")
let btms = document.querySelectorAll(".btm");
let s_post = document.getElementById("s_post");
let send_coments = document.querySelectorAll(".send_coments");
let shere = document.getElementById("shere");
let add_post = document.getElementById("add_post");
let titel_c = document.getElementById("titel_c");
let lun_h3 = document.getElementById("lun_h3");
let dark_mood = document.getElementById("dark_mood");
let chang_img = document.getElementById("chang_img");
let titel_new = document.getElementById("titel_new");
let lol= document.getElementById("lol");
let moods= document.getElementById("mood");
let closs = document.getElementById("closs");
let img_add_post = document.getElementById("img_add_post");
let posts = document.getElementById("post");
let list = document.getElementById("list");
let btmlogto = document.getElementById("btmlogto");
let add_coment = document.getElementById("add_coment");
let zz = document.getElementById("zz");
let h6 = document.getElementById("h6");
let sys_s= document.getElementById("sive_user").value=have_user()
let sive_user = document.getElementById("sive_user");
let wid_hg = document.getElementById("wid_hg");
let saves_language=localStorage.getItem("language");
let option=document.querySelectorAll(".option")
let chak=true;
let chak2=true;
let chak3=true;
let chak4=true;
let chak5=true;


//// SING UP

let info_sing_up=document.getElementById("info_sing_up")
let pag=document.getElementById("pag")
let homeHTMl=document.getElementById("homeHTMl")
let SINGS_IN=document.getElementById("SINGS_IN")
let LONG_IN=document.getElementById("LONG_IN")
let shereAnte=document.getElementById("shereAnte")
let inputs = document.querySelectorAll('input')
let fullNAME=document.getElementById("fullNAME")
let email= document.getElementById("email")
let Add_Anew_picer_post= document.getElementById("Add_Anew_picer_post")
let Add_Anew_write_post= document.getElementById("Add_Anew_write_post")

//// post 
let sher_post= document.getElementById("sher_post")
let sher_post_write= document.getElementById("sher_post_write")
let question= document.getElementById("question")



////
let titel_cAnte= document.getElementById("titel_cAnte")
let user_na= document.getElementById("user_na")
let password= document.getElementById("password")
let select_language=document.getElementById("select_language")
let btn_sing_up=document.getElementById("btn_sing_up")
let log_in_btm=document.getElementById("log_in_btm")
let sing_up_btm=document.getElementById("sing_up_btm")





/// LONG IN

    
    let info_long_in=document.getElementById("info_long_in")
let texts=document.getElementById("texts")
let textss=document.getElementById("textss")
let btm_long_in=document.getElementById("btm_long_in")
let textsss=document.getElementById("textsss")
let user_NALOGIN=document.getElementById("user_NALOGIN")
let password_LOGIN=document.getElementById("password_LOGIN")
let pge_sign_in=document.getElementById("pge_sign_in")
let logo_mood=document.getElementById("logo_mood")

// let current_page=1
// let lastpag=1
// window.addEventListener("scroll",()=>{
//     const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
// console.log(endOfPage
// )
// console.log(current_page,lastpag )
// if(endOfPage && current_page < lastpag)
// {
    
    
   
    
//     current_page=current_page+1
//     // dirk_GET_POST(false,current_page)
//     light_GET_POST(false,current_page)
// }
// }
// )

onload = new onl()
chang_profile_picer()
mood();
save_moood()
 didhaveTOken()
system_clic()
home_clic()

btmm()

add_posts()
closs_post()
add_pic_post()
closs_pic_posts()
language()
save_language()
lisst()
scrren()
clic_pag_sing_up()
log_OUT()
get_Register()


