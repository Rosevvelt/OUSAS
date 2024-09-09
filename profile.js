let header = document.getElementById("header")
let back_ho = document.getElementById("back_ho")
let all_info = document.getElementById("all_info")
let name_pp = document.getElementById("name_pp")
let postr = document.getElementById("p")
let name_pos = document.getElementById("name_pos")
let tit = document.getElementById("tit")
let zz = document.getElementById("zz")
let user_pp = document.getElementById("user_pp")
let p = document.getElementById("postr")
let img_porf = document.getElementById("img_porf")
let img_profile = document.getElementById("img_profile")
let posts_count = document.getElementById("posts_count")
let header_postp2 = document.getElementById("header_postp2")
let h6 = document.getElementById("h6")
let ptm_delete_post = document.getElementById("ptm_delete_post")
let ptm_delete_cancel = document.getElementById("ptm-delete_cancel")
let btm = document.querySelectorAll(".btm")
const token =localStorage.getItem("token")
let saves_language=localStorage.getItem("language");
let chak = true
let save_mood = localStorage.getItem("mood")
save_moood()
back()
cancel()
info_pro()
save_language()
function arbic(){
    h6.innerText="هل تريد حذف المنشور؟"
    ptm_delete_cancel.innerText="الغاء"
    ptm_delete_post.innerText="حذف"
    back_ho.setAttribute("title","عوده الى صفحه رئيسيه")
}
function english(){
 h6.innerText="Do you want to delete the post?"
 ptm_delete_cancel.innerText="cancel"
 ptm_delete_post.innerText="Delete"
 back_ho.setAttribute("title","Back to Home")
}
function save_language(){
    if(saves_language=="Arb"){
        arbic()
      
       }
        else{
            english()
           
        }
    
}
function dirck() {
    document.body.style.background = "#041B24"
    postr.style.background = "var(--color_dirkbl)"
    header.style.background = "var(--color_dirkbl)"
    header.style.boxShadow = " 1px 1px 5px (--color_light)"
    back_ho.style.background = "var(--color_dirkbl)"
    all_info.style.background = "var(--color_dirkbl)"
    zz.style.background = "var(--color_dirkbl)"

    back_ho.style.color = "var(--color_light)"
    h6.style.color = "var(--color_light)"
    name_pp.style.color = "var(--color_light)"
    name_pos.style.color = "var(--color_light)"
    tit.style.color = "var(--color_light)"

    btm.forEach(element => {
        element.style.color = "var(--color_light)";
    });

    localStorage.setItem("mood", "dirk")
}
function light() {
    document.body.style.background = "#FCFCFC"
    header.style.boxShadow = " 1px 1px 5px (--border)"
    header.style.background = "var(--color_light)"
    postr.style.background = "var(--color_light)"
    back_ho.style.background = "var(--color_light)"
    all_info.style.background = "var(--color_light)"
    zz.style.background = "var(--color_light)"
    back_ho.style.color = "var(--color_dirkbl)"
    name_pp.style.color = "var(--color_dirkbl)"
    tit.style.color = "var(--color_dirkbl)"  
    h6.style.color = "var(--color_dirkbl)"  
    btm.forEach(element => {
        element.style.color = "var(--color_dirkbl)";
    });
    localStorage.setItem("mood", "light")
}
function save_moood() {
    if (save_mood == "light") {
        light()
        chak = true;
    }
    else {
        dirck()
        chak = false
    }
}

function back() {
    back_ho.addEventListener("click", () => {
        window.location = "index.html"
    })
}
function warning(id_pos) {
    let in_post=JSON.parse(decodeURIComponent(id_pos))
    document.getElementById("teqs").value=in_post.id


    let zz = document.getElementById("zz")
    zz.style.top = "200px"
    zz.style.visibility = "visible"
    document.body.style.overflowY = "hidden";
    all_info.style.filter = "blur(5px)";
    p.style.filter = "blur(5px)";

}
function delete_pos(){
let dons=document.getElementById("teqs").value
const have_token=localStorage.getItem("token")
const hed={
  "Content-Type": "multipart/form-data",
  "authorization":`Bearer ${have_token} `
}
axios.delete(`https://tarmeezacademy.com/api/v1/posts/${dons}`,{
  headers:hed
})
.then(function (response){
console.log(response)
zz.style.top = "-400px"
zz.style.visibility = "hidden"
document.body.style.overflowY = "auto";
all_info.style.filter = "blur(0px)";
p.style.filter = "blur(0px)";
info_pro()
get_post()

})
.catch(function (error) {
    // handle error
   alert(error.response.data.message)
  })
}
function cancel() {
    document.getElementById("ptm-delete_cancel").addEventListener("click", () => {
        zz.style.top = "-400px"
        zz.style.visibility = "hidden"
        document.body.style.overflowY = "auto";
        all_info.style.filter = "blur(0px)";
        p.style.filter = "blur(0px)";


    })
}
function uu(){
    let URLPar=new URLSearchParams(window.location.search)
    let user= URLPar.get("userid")
    return user
}
function info_pro() {
   

    let id = uu();
    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}`)
        .then(function (response) {
            let languagedP=""
            if(localStorage.getItem("language")=="Arb"){
                 languagedP="المنشورات"
            }
            else{
  languagedP="Posts"
            }
            let profcomL = typeof response.data.data.profile_image === 'string' ? response.data.data.profile_image.trim() : '';
            let pro = profcomL ?
                `
                <img id="img_porf" class="xz" src="${response.data.data.profile_image}">
               `
                :
                `
                <img id="img_porf" class="xz" src="default-avatar.jpg">
               `;

            let respo = response.data.data;
            console.log(response.data.data.profile_image);
            name_pp.innerHTML = respo.name;
            user_pp.innerHTML =`@${respo.username}` ;
            posts_count.innerHTML = `${languagedP}: ${respo.posts_count}`
            img_profile.innerHTML = pro
        })
        .catch(function (error) {
            console.error("Error fetching data:", error);
        });
}

function get_post(){
    
  let id=uu()
    axios.get(`https://tarmeezacademy.com/api/v1/users/${id}/posts`)
    .then(function (response) {
      let getpost=response.data.data
      let languaged=""
      
      if(localStorage.getItem("language")=="Arb"){
        languaged="حذف"
       
      }
      else{
        languaged="Delete"
      
      }
      p.innerHTML=""
     let color="color"
     if (localStorage.getItem("mood")=="light") {
        color="light_b"
    }
    else {
      color="dirk_b"
    }

      for(poster of getpost){
    let userr=have_user()
    let isme=userr!=null && poster.author.id ==userr.id
    header_postp2=""
        if(isme){
            header_postp2=` <samp class="header_postp2">
             <ul  class="fa-solid fa-ellipsis btm ${color}" onclick="show_delete(${poster.id})" ></ul>
                   <li class="btm2" id="${poster.id}" onclick="warning('${encodeURIComponent(JSON.stringify(poster))}')">${languaged}</li></samp>
                   `

        }
        
        header_postp2.innerHTML=header_postp2
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
       
       `<div class="pic_post pic"> 
             <img src="${imageUrl}"  class="post-image">
        </div>` 
        : 
        
        `<div class="pic_post pic" style="display:none;"></div>`;
        let cost=
       `  <div class="posts ${color}">
            <div class="header_post" >
            <div class="header_postp1">
  ${proHtml}
    <h3 class="${color}" >${poster.author.name}</h3>                                    
  
            </div>
          ${header_postp2}
       </div>
       <div class="titel_post ${color}" >
        <p class=" ${color}" > 
${poster.body}
        </p>  </div>
     
     ${imageHtml}
       
     <div class="Tag">
     <h5>${poster.created_at}</h5>
     <h5 class="count" onclick="coment_web(${poster.id})"> <i class="fa-regular fa-comment" ></i> ${poster.comments_count}</h5>
       
   </div>
   `
       
        p.innerHTML+=cost
      
      }
    })
    .catch(function (error) {
        console.error("Error fetching data:", error);
    });
}
get_post()
function show_delete(posterID){
    let poa=document.getElementById(`${posterID}`)
    let ch=true
    if (poa) {
        
        if (poa.style.display === "none" || poa.style.display === "") {
            poa.style.display = "block";
        } else {
            poa.style.display = "none";
        }
    } 
    
    console.log(ch)
    
}
function coment_web(id_post){
    
    window.location=`reed_coment.html?postId=${id_post}`
}
function have_user(){
    let user=null
    const your_userr=localStorage.getItem("user_name")
    if(your_userr != null)
    {
        user= JSON.parse(your_userr)

    }
        return user
    
}


