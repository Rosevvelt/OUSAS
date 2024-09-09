

    function chang_profile_picer(){
        // let fileInput= document.getElementById("fileInput")
    fileInput.addEventListener("click",()=>{
        rel_fileInput.click()
            alert("عذرا هذا زر معطل في وقت حالي بسبب بعض مشاكل تقنيه")
        
     
    });
    rel_fileInput.addEventListener("change",()=>{
        if (rel_fileInput.files.length > 0) {
            profile_img.src=URL.createObjectURL(rel_fileInput.files[0]);
   } 
 
        })
}
///chang img profile


function dirk(){
   

   p.style.backdropFilter="var(--color_dirkbl)"
   titel_cAnte.style.background="var(--color_dirkbl)"
 
    all_h3.forEach(h3=>{
        h3.style.color="#d4e6f2"
        
    });
    all_h2.forEach(h2 =>{
        h2.style.color="#d4e6f2"
    });
    post.forEach(post =>{
        post.style.background="#05222d"
    });
    btm.forEach(btm =>{
        btm.style.color="#d4e6f2"
    })
    header_post.forEach(header_posts =>{

        header_posts.style.backgroundColor = "#05222d";
       
    });
    other_color.forEach(other_color =>{
        other_color.style.color="#d4e6f2";
    });
    text_coment.forEach(text_coment =>{
        text_coment.style.background="#05222d"
        text_coment.style.color="#d4e6f2"
    });
    btm.forEach(btm2 =>{
        btm2.style.color="#d4e6f2"
    })
    list.style.color="var(--color_light)"
   
  label.style.color="#05222d"
 label.style.background="#d4e6f2"
    closs.style.color="#d4e6f2"
    log_out.style.color="#d4e6f2"
    titel_system.style.color="#d4e6f2"
    the_mood.innerText="ON";
    document.body.style.background="#041B24"
    header.style.background="#05222d"
    Profile.style.background="#05222d"
    info_profile.style.background="#05222d"
    Name_us.style.background="#05222d"
    the_mood.style.background="#05222d"
    section.style.background="#05222d"
    fileInput.style.background="#d4e6f2"
    fileInput.style.color="#05222d"
    the_mood.style.color="#d4e6f2"
    the_mood.style.boxShadow="1px 1px 5px #d4e6f2"
    select.style.background="#05222d";
    select.style.color="#d4e6f2";
     add_post.style.background="#05222d"
     titel_c.style.color="#d4e6f2"
     closs_pic_post.style.color="#d4e6f2"
     titel_c.style.background="#05222d"
      add_post.style.boxShadow=" 1px 1px 5px #d4e6f2"
      info_sing_up.style.background="var(--color_dirkbl)"
      info_long_in.style.background="var(--color_dirkbl)"
      info_long_in.style.color="var(--color_light)"
      titel_cAnte.style.color="var(--color_light)"
      pag.style.color="var(--color_light)"
      
    localStorage.setItem("mood","dirk")
}

function light(){
    
  p.style.backdropFilter="var(--color_light)"
    all_h3.forEach(h3=>{
        h3.style.color="#05222d"
    });
    all_h2.forEach(h2 =>{
        h2.style.color="#05222d"
    });
    post.forEach(post =>{
        post.style.background="#d4e6f2"
    });
    header_post.forEach(header_posts =>{

        header_posts.style.background="#d4e6f2"
    });
    other_color.forEach(other_color =>{
        other_color.style.color="#05222d";
    });
    text_coment.forEach(text_coment =>{
        text_coment.style.background="#d4e6f2"
        text_coment.style.color="#05222d"
    });
    btm.forEach(btm2 =>{
        btm2.style.color="#05222d"
    })
    list.style.color="var(--color_dirkbl)"
    closs_pic_post.style.color="#05222d"
    titel_cAnte.style.color="#05222d"
       titel_c.style.color="#05222d"
     titel_c.style.background="#d4e6f2"
    add_post.style.background="#d4e6f2"
    titel_cAnte.style.background="#d4e6f2"
    add_post.style.boxShadow=" 1px 1px 5px #FFAF00"
    closs.style.color="#05222d"
    select.style.background="#d4e6f2";
    select.style.color="#05222d";
    log_out.style.color="#d4e6f2"
    titel_system.style.color="#838887"
    the_mood.innerText="OFF"
    document.body.style.background="#FCFCFC"
    header.style.background="#d4e6f2"
    Profile.style.background="#d4e6f2"
    info_profile.style.background="#d4e6f2"
    Name_us.style.background="#d4e6f2"
    section.style.background="#d4e6f2"
    the_mood.style.background="#d4e6f2"
    fileInput.style.background="#05222d"
    fileInput.style.color="#d4e6f2"
    the_mood.style.color="#05222d"
    the_mood.style.boxShadow="1px 1px 5px #FFAF00"
     label.style.color="#d4e6f2"
 label.style.background="#05222d"
 info_sing_up.style.background="var(--color_light)"
      pag.style.color="var(--color_dirkbl)"
      info_long_in.style.background="var(--color_light)"
      info_long_in.style.color="var(--color_dirkbl)"
    localStorage.setItem("mood","light")
}


function mood(){
    the_mood.addEventListener("click",()=>{
        if(chak){
            dirk()
            dirk_GET_POST()
            chak=false

        }
        else{
            light()
            light_GET_POST()
            chak=true;
           
        }
    })
}
function save_moood(){
    if(save_mood=="light"){
        light()
        light_GET_POST()
        chak=true;
    }
    else{
        dirk() 
        dirk_GET_POST()
        chak=false
    }
}
/// mood

function move(){
   let your_user= have_user()
 
   
        window.location=`Profile.html?userid=${your_user.id}`
  
}
  
function btmm() {
    btms.forEach(btm => {
        // استخدم مستمع الحدث لكل عنصر .btm
        btm.addEventListener("click", () => {
            // استهداف العنصر sibling التالي
            let btm2 = btm.nextElementSibling;

            // تحقق مما إذا كان العنصر btm2 موجودًا وبتصنيفه صحيحًا
            if (btm2 && btm2.classList.contains('btm2')) {
                if (chak2) {
                    btm2.style.display = "block";
                    chak2 = false;
                } else {
                    btm2.style.display = "none";
                    chak2 = true;
                }
            }
        });
    });
}

function lisst(){
    list.addEventListener("click", () => {
        if (chak5) {
            list.style.transform = "rotate(90deg)";
            Profile.style.top="71px"
            chak5 = false;
          
        } else {
            list.style.transform = "rotate(0deg)";
            Profile.style.top="-700px"
            chak5 = true;
          
        }
    });
}

function system_clic(){

    system.addEventListener("click",()=>{
        sec.style.visibility="visible"
        sec.style.left="0px"
        p.style.visibility="hide"
        p.style.right="-1000px"
        wid_hg.style.display="none"
        wid_hg.style.right="-1000px"
        s_post.style.display="none"
           add_post.style.top="-600px"
            add_post.style.visibility="hidden"
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
             home.style.background="var(--border)"
        system.style.background="var(--dirkyello)"
       
        
    
       

        
    });
}
function home_clic(){
    home.addEventListener("click",()=>{
    sec.style.visibility="hidden"
        sec.style.left="-990px"
        p.style.visibility="visible"
        p.style.right="10px"
        wid_hg.style.display="flex"
        wid_hg.style.right="70vh"
        wid_hg.style.marginTop="40vh"
        s_post.style.display="block"
         add_post.style.top="-600px"
            add_post.style.visibility="hidden"
        p.style.filter="blur(0px)";
        home.style.background="var(--dirkyello)"
        system.style.background="var(--border)"
            document.body.style.overflowY = "auto";
            if (window.innerWidth >= 767 && window.innerWidth <= 1023){
                 wid_hg.style.right="20vh"
        wid_hg.style.marginTop="30vh"
            }
         
})
}
function clic_pag_sing_up(){
    let SINGS_IN=document.getElementById("SINGS_IN")
   
    textsss.addEventListener("click",()=>{
        LONG_IN.style.display="none"
        homeHTMl.style.display="none"
        SINGS_IN.style.display="grid"
          document.body.style.overflowX = "hidden";
          document.body.style.overflowY = "hidden";
          window.scrollTo({ top: 16, behavior: 'smooth' });
       
    })
    sing_up_btm.addEventListener("click",()=>{
        LONG_IN.style.display="none"
        homeHTMl.style.display="none"
        SINGS_IN.style.display="grid"
        document.body.style.overflowX = "hidden";
        document.body.style.overflowY = "hidden";
        window.scrollTo({ top: 16, behavior: 'smooth' });
    })

}
function clic_pag_long_in(){
    let log_in_btm=document.getElementById("log_in_btm")
    let pag=document.getElementById("pag")
    pag.addEventListener("click",()=>{
        LONG_IN.style.display="grid"
        SINGS_IN.style.display="none" 
        document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
            window.scrollTo({ top: 0, behavior: 'smooth' });
          
    })
    log_in_btm.addEventListener("click",()=>{
         LONG_IN.style.display="grid"
        homeHTMl.style.display="none"
        SINGS_IN.style.display="none"
        document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "hidden";
            window.scrollTo({ top: 0, behavior: 'smooth' });
    })
}clic_pag_long_in()

function eye(){

    let eye= document.getElementById("eye")
chak6=true
eye.addEventListener("click",()=>{
    if(chak6){
        
    eye.innerHTML=`<i class="fa-regular fa-eye"></i>`
    password_LOGIN.setAttribute("type","text")
    chak6=false;
    }
    else{

    eye.innerHTML=`<i class="fa-regular fa-eye-slash">`
    password_LOGIN.setAttribute("type","password")
    chak6=true;
    }
    
    })
}eye()

function log_OUT(){
    log_out.addEventListener("click",()=>{
       {
        sec.style.visibility="hidden"
        sec.style.left="-990px"
        p.style.visibility="visible"
        p.style.right="10px"
        s_post.style.display="block"
         add_post.style.top="-600px"
            add_post.style.visibility="hidden"
        p.style.filter="blur(0px)";
        home.style.background="var(--dirkyello)"
        system.style.background="var(--border)"
            document.body.style.overflowY = "auto";
       }
       localStorage.removeItem("token")
       localStorage.removeItem("user_name")
        info_profile.style.display="none"
        btmlogto.style.display="flex"
        s_post.style.display="none"
    })
}
function coment_web(id_post){
    
    window.location=`reed_coment.html?postId=${id_post}`
}
function clic_add_post(){
    question.style.display="none"
    sher_post_write.style.display="none"
    sher_post.style.display="block"

}
function clic_write_post(){
    question.style.display="none"
    sher_post.style.display="none"
    sher_post_write.style.display="flex"
}
///clik 


function add_posts(){
    s_post.addEventListener("click",()=>{
        add_post.style.top="100px"
            add_post.style.visibility="visible"
            document.body.style.overflow="hidden"

            p.style.filter="blur(5px)";
        
    })
}
function closs_post(){
    closs.addEventListener("click",()=>{
         add_post.style.top="-600px"
            add_post.style.visibility="hidden"
            document.body.style.overflowY="auto"
            p.style.filter="blur(0px)";
            sher_post_write.style.display="none"
            sher_post.style.display="none"
            question.style.display="flex"


    })
}


function add_pic_post(){
    label.addEventListener("click", () => {
        INPUT.click();
    });
    
    INPUT.addEventListener("change", () => {
        if (INPUT.files.length > 0) {
            img_add_post.src = URL.createObjectURL(INPUT.files[0]);
           
            img_add_post.style.display="flex"
            closs_pic_post.style.display="flex"
          
        
        }
    });
}
function closs_pic_posts(){
    closs_pic_post.addEventListener("click",()=>{
       
        img_add_post.setAttribute("src","")
         img_add_post.style.display="none"
            closs_pic_post.style.display="none"
   
    })
}
/// new post


function arbic(){

home.innerHTML=` الرئيسيه <i class="fa-solid fa-house"></i> </a>`
system.innerHTML=` الاعدادات <i class="fa-solid fa-gear"></i> </a>`
titel_system.innerText="الاعدادات"
shereAnte.innerText="نشر"
Add_Anew_write_post.innerText="كتابه منشور"
Add_Anew_picer_post.innerText="نشر صوره "
lun_h3.innerText="اختيار اللغة"
dark_mood.innerText="الوضع المظلم"
titel_new.innerText=" صورة ملف الشخصيه  " 
fileInput.innerText=" تغير" 
log_out.innerText="تسجيل خروج"
select.style.direction="rtl"
lol.style.justifyContent="end"
lol.style.marginRight="0"
lol.style.direction="ltr"
select.style.borderRight="1px solid #FFAF00"
select.style.borderLeft="none"
moods.style.direction="rtl"
dark_mood.style.borderRight="none"
dark_mood.style.borderLeft="1px solid #FFAF00"
chang_img.style.direction="rtl"
titel_new.style.borderLeft=" 1px solid var(--border)"
titel_new.style.borderRight=" none"
fullNAME.innerText="الاسم كامل"
    email.innerText="البريد الالكتروني"
    user_na.innerText="اسم المستخدم"
    password.innerText="الرمز السري"
    log_in_btm.innerText=" تسجيل دخول"
    sing_up_btm.innerText="انشاء حساب"
     pag.innerHTML=`  هل لديك حساب <a > تسجيل دخول</a>`
    pag.style.direction="rtl"
    btn_sing_up.innerText="انشاء حساب"

    textss.innerHTML="الرمز السري" 
    textss.style.direction="rtl"
    texts.innerHTML=" اسم المستخدم"
    texts.style.direction="rtl"
    btm_long_in.innerHTML="تسجيل دخول"
    textsss.innerHTML=` ليس لديك حساب؟  <a id="pge_sign_in"  > انشاء حساب</a>`
    textsss.style.direction="rtl"
    all_h3.forEach(h3 => {
        h3.style.direction="rtl";
    });
btm22.forEach(btm2 =>{
    btm2.innerText="حذف"
    
})
send_coments.forEach(send_coments =>{
    send_coments.innerText="اضف تعليق"
})
label.innerText="اضف صور"
shere.innerText="نشر"

if (window.innerWidth <= 767) {
     lol.style.marginRight="20%"
            lol.style.direction="ltr"
             the_mood.style.marginLeft="10%"
}
localStorage.setItem("language","Arb")
}
function English(){
  
    textss.innerHTML="password"
    shereAnte.innerHTML="send"
    Add_Anew_picer_post.innerText="Add a post"
    Add_Anew_write_post.innerText="Add a Write a post"
    textss.style.direction="ltr"
    texts.innerHTML="User name"
    texts.style.direction="ltr"
    btm_long_in.innerHTML="Long in"
    textsss.innerHTML=`Don't have an account?  <a id="pge_sign_in"  > Sing up</a>`
    textsss.style.direction="ltr"
    home.innerHTML=`<i class="fa-solid fa-house"></i> Home </a>`
    system.innerHTML=`<i class="fa-solid fa-gear"></i> system</a>`
    titel_system.innerText="System"
    lun_h3.innerText="Language"
    dark_mood.innerText="dirk mood"
    titel_new.innerText="New profile picture" 
    fileInput.innerText="chang" 
    log_out.innerText="LOG OUT"
    lol.style.justifyContent="start"
lol.style.marginRight="50%"
lol.style.direction="rtl"
select.style.borderLeft="1px solid #FFAF00"
select.style.borderRight="none"
select.style.direction="ltr"
moods.style.direction="ltr"
dark_mood.style.borderRight="1px solid #FFAF00"
dark_mood.style.borderLeft="none"
chang_img.style.direction="ltr"
titel_new.style.borderLeft=" none"
titel_new.style.borderRight=" 1px solid var(--border)"
fullNAME.innerText="Full Name"
        
email.innerText="Email"
user_na.innerText="User Name"
password.innerText="password"
log_in_btm.innerText="LONG IN"
sing_up_btm.innerText="SING UP"
pag.innerHTML=` Have an account? <a > Long in</a>`
pag.style.direction="ltr"
btn_sing_up.innerText="Sing up"

all_h3.forEach(h3 => {
    h3.style.direction="ltr"; });
btm22.forEach(btm2 =>{
    btm2.innerText="Delete"
  })

send_coments.forEach(send_coments =>{
  send_coments.innerText="send "
})

label.innerText="add picture"
shere.innerText="send"
posts.style.direction="rtl"
if (window.innerWidth <= 767) {
    lol.style.marginRight="20%"
           lol.style.direction="rtl"
           the_mood.style.marginLeft="10%"
}
if (window.innerWidth > 767 && window.innerWidth <= 1024) {
 lol.style.marginRight="30%"
 moods.style.marginLeft="37%"
 chang_img.style.marginLeft="37%"
}
localStorage.setItem("language","Eng")
}
function language(){
    select.addEventListener("change",()=>{
        if(select.value=="eng"){
            English()
            
            
        }
        else{
            arbic()
            lu=false
           
        }
      
    })
}
function save_language(){
    if(saves_language=="Arb"){
        arbic()
      
       }
        else{
            English()
           
        }
    
}
///language
function scrren(){
   
if (window.innerWidth <= 767) {
    if(chak4){

        chak4=false
    }

    system.addEventListener("click",()=>{
      
        list.style.transform = "rotate(0deg)";
        Profile.style.top="-900px"
        wid_hg.style.top="-00px"
        wid_hg.style.display="none"
        chak5 = true;

       
        
    })
    home.addEventListener("click",()=>{
        list.style.transform = "rotate(0deg)";
        Profile.style.top="-900px"
        wid_hg.style.top="-0px"
        wid_hg.style.display="flex"
        wid_hg.style.right="38%"
        wid_hg.style.marginTop="30vh"

        chak5 = true;
    })
 
}

}

function light_GET_POST(){
    axios.get(`https://tarmeezacademy.com/api/v1/posts?limit=55`)
    .then(function (response) {
       
      let getpost=response.data.data
    
      
        p.innerHTML=""
       
      for(poster of getpost){
        
        let profURL = typeof poster.author.profile_image === 'string' ? poster.author.profile_image.trim() : '';

        let proHtml = profURL ? 
        `
        <img src="${poster.author.profile_image}">
       ` 
        : 
        `
        <img src="default-avatar.jpg">
       `;

        let imageUrl = typeof poster.image === 'string' ? poster.image.trim() : '';

        let imageHtml = imageUrl ? 
        `<div class="pic_post"> 
             <img src="${imageUrl}" class="post-image">
        </div>` 
        : 
        `<div class="pic_post" style="display:none;"></div>`;
        
                        let cost =`  <div class="posts lit_bac">
            <div class="header_post" >
            <div class="header_postp1" onclick="click_user_other(${poster.author.id})">
   ${proHtml}
    <h3 class="other_color name_post" >${poster.author.name}</h3>                                    
  
            </div>
       
       </div>
       <div class="titel_post" >
        <p class="other_color drk_text" > 
${poster.body}
        </p>  </div>
        
           ${ imageHtml}
       
     <div class="Tag">
      <h5 class="count" onclick="coment_web(${poster.id})"> <i class="fa-regular fa-comment" ></i> ${poster.comments_count}</h5>
        <h5>${poster.created_at}</h5>
        
   
       
            
                    
                    
       </div>`
        p.innerHTML+=cost
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}

function dirk_GET_POST(){
    axios.get(`https://tarmeezacademy.com/api/v1/posts?limit=55`)
    .then(function (response) {
      let getpost=response.data.data
      
     
      p.innerHTML=""
     
      
      for(poster of getpost){
console.log(poster)
        let profURL = typeof poster.author.profile_image === 'string' ? poster.author.profile_image.trim() : '';

        let proHtml = profURL ? 
        `
        <img src="${poster.author.profile_image}">
       ` 
        : 
        `
        <img src="default-avatar.jpg">
       `;
        let imageUrl = typeof poster.image === 'string' ? poster.image.trim() : '';

        let imageHtml = imageUrl ? 
       
       `<div class="pic_post"> 
             <img src="${imageUrl}"  class="post-image">
        </div>` 
        : 
        
        `<div class="pic_post" style="display:none;"></div>`;
        let cost=
       `  <div class="posts drk_bac">
            <div class="header_post" >
            <div class="header_postp1" onclick="click_user_other(${poster.author.id})">
  ${proHtml}
    <h3 class="other_color lit_text" >${poster.author.name}</h3>                                    
  
            </div>
        
       </div>
       <div class="titel_post" >
        <p class="other_color lit_text" > 
${poster.body}
        </p>  </div>
     
     ${imageHtml}
       
     <div class="Tag">
     <h5 class="count" onclick="coment_web(${poster.id})"> <i class="fa-regular fa-comment" ></i> ${poster.comments_count}</h5>
     <h5>${poster.created_at}</h5>
       
   </div>
   `
       
        p.innerHTML+=cost
      
      }
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }) 
}

function GET_post(){
   
    if(localStorage.getItem("mood")=="dirk"){
        dirk_GET_POST()
    }
    else{
        light_GET_POST()
     }
}GET_post()


 
function cruet_write_post(){
    let titel_cAnte=document.getElementById("titel_cAnte").value
    let formData = new FormData();
formData.append("body", titel_cAnte);
const have_token=localStorage.getItem("token")
const hed={
  "Content-Type": "multipart/form-data",
  "authorization":`Bearer ${have_token} `
}
axios.post('https://tarmeezacademy.com/api/v1/posts',formData,{
    headers:hed
 })
         .then(function (response){
            add_post.style.top="-600px"
            add_post.style.visibility="hidden"
            document.body.style.overflowY="auto"
            p.style.filter="blur(0px)"; 
            sher_post_write.style.display="none"
            sher_post.style.display="none"
            question.style.display="flex"           
           
            GET_post()
         })
         .catch(function (error) {
            // handle error
           alert(error.response.data.message)
          })
}






function cruet_post(){
    shere.addEventListener("click",()=>{
        const titel_c = document.getElementById("titel_c").value
        const INPUT=document.getElementById("INPUT").files[0]
        
      
let formData = new FormData();
formData.append("body", titel_c);
formData.append("image", INPUT);

         const have_token=localStorage.getItem("token")
          const hed={
            "Content-Type": "multipart/form-data",
            "authorization":`Bearer ${have_token} `
          }
         axios.post('https://tarmeezacademy.com/api/v1/posts',formData,{
            headers:hed
         })
                 .then(function (response) {
          
         
          add_post.style.top="-600px"
            add_post.style.visibility="hidden"
            document.body.style.overflowY="auto"
            p.style.filter="blur(0px)"; 
            console.log(response);
            sher_post_write.style.display="none"
            sher_post.style.display="none"
            question.style.display="flex"
            GET_post()
         
        })
        .catch(function (error) {
          // handle error
         alert(error.response.data.message)
        })
    })
}
cruet_post()



  

///axios_post

function test(){
   
    axios.get("https://tarmeezacademy.com/api/v1/posts")
    .then(function (response) {
      let getpost=response.data.data
      console.log("222 this is Test 2222???")
      for(po of getpost){
        console.log(po.comments_count)
      }
     
    })
}

function have_user(){
    let user=null
    const your_userr=localStorage.getItem("user_name")
    if(your_userr != null)
    {
        user=JSON.parse(localStorage.getItem("user_name"))

    }
        return user
    
}
function get_Register(){
    let btn_sing_up=document.getElementById("btn_sing_up")
    btn_sing_up.addEventListener("click",()=>{
        let Full_name=document.getElementById("Full_name").value
        let email_inp=document.getElementById("email_inp").value
        let user_names=document.getElementById("user_names").value
        let pass=document.getElementById("pass").value
      
   
        let  pas_us={
            "name":Full_name,
            "email":email_inp,
            "username":user_names,
            "password":pass
            }
            axios.post('https://tarmeezacademy.com/api/v1/register',pas_us)
          .then(function (response) {
            let token =response.data.token
            console.log(response.data.user)
            const storg_token=localStorage.setItem("token",token)
            const storg_user=localStorage.setItem("user_name",JSON.stringify(response.data.user))
           
            SINGS_IN.style.display="none"
            homeHTMl.style.display="flex"
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
            didhaveTOken()
        
            
          })
          .catch(function (error) {
            if(error.response.data.message=="Server Error"){
                return 
            }
           
           alert(`هنالك بعض معلومات مدخله موجوده بالفعل (البريد الالكتروني او اسم مستخدم)`)
          })
    })
}

get_Register()
function get_axios_long_IN(){
    btm_long_in.addEventListener("click",()=>{
        const user_NALOGIN= document.getElementById("user_NALOGIN").value
        const password_LOGIN=document.getElementById("password_LOGIN").value

        let params_LONGIN={
            "username":user_NALOGIN,
            "password":password_LOGIN
        }
        axios.post('https://tarmeezacademy.com/api/v1/login',params_LONGIN )
        .then(function (response) {
            let token =response.data.token
            const storg_token=localStorage.setItem("token",token)
            const storg_user=localStorage.setItem("user_name",JSON.stringify(response.data.user))
            LONG_IN.style.display="none"
            homeHTMl.style.display="flex"
            document.body.style.overflowX = "hidden";
            document.body.style.overflowY = "auto";
            didhaveTOken()
          })
          .catch(function (error) {
            // handle error
            alert(`error: ${error.response.data.message}`);
          })
})
}get_axios_long_IN()

function didhaveTOken(){
    const have_token=localStorage.getItem("token")
    if(have_token==null){
      
        info_profile.style.display="none"
        btmlogto.style.display="flex"
        s_post.style.display="none"
    }
    else{
       
        info_profile.style.display="flex"
        btmlogto.style.display="none"
         s_post.style.display="block"
         let use =get_info_profile();
          Name_us.innerHTML=use.name
          pro_user.innerHTML="@"+use.username
        
            }
}
function get_info_profile(){
    let use=null
    let info_user=localStorage.getItem("user_name")
    if(info_user!=null){
        use=JSON.parse(info_user)
    }
    return use
}
function onl(){
    LONG_IN.style.display="none"
    homeHTMl.style.display="flex"
    SINGS_IN.style.display="none"
    sher_post_write.style.display="none"
    sher_post.style.display="none"
    question.style.display="flex"
}
function click_user_other(info){
    window.location=`Profile.html?userid=${info}`
}