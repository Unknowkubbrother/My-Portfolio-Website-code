$(document).ready(function () {

  $('#menu').click(function () {

      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });
});

const li = document.querySelectorAll(".links")
const sec = document.querySelectorAll("section")

function activeMenu(){
    let len = sec.length;
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
      li.forEach(ltx => ltx.classList.remove("active"));
      li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// -------------------works

//selecting all required elements
const filterItem = document.querySelector("#work .items");
const filterItem1 = document.querySelector("#Cerfi .items");
const filterImg = document.querySelectorAll("#work .gallery .image");
const filterImg1 = document.querySelectorAll("#Cerfi .gallery .image");
window.onload = ()=>{ //after window loaded
  filterItem.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  filterItem1.onclick = (selectedItem)=>{ //if user click on filterItem div
    if(selectedItem.target.classList.contains("item")){ //if user selected item has .item class
      filterItem1.querySelector(".active").classList.remove("active"); //remove the active class which is in first item
      selectedItem.target.classList.add("active"); //add that active class on user selected item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting data-name value of user selected item and store in a filtername variable
      filterImg1.forEach((image) => {
        let filterImges = image.getAttribute("data-name"); //getting image data-name value
        //if user selected item data-name value is equal to images data-name value
        //or user selected item data-name value is equal to "all"
        if((filterImges == filterName) || (filterName == "all")){
          image.classList.remove("hide"); //first remove the hide class from the image
          image.classList.add("show"); //add show class in image
        }else{
          image.classList.add("hide"); //add hide class in image
          image.classList.remove("show"); //remove show class from the image
        }
      });
    }
  }
  for (let i = 0; i < filterImg.length; i++) {
    filterImg[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
  for (let i = 0; i < filterImg1.length; i++) {
    filterImg1[i].setAttribute("onclick", "preview(this)"); //adding onclick attribute in all available images
  }
}
//fullscreen image preview function
//selecting all required elements
const previewBox = document.querySelector("#work .preview-box"),
categoryDetail = previewBox.querySelector("#work .detail p"),
previewImg = previewBox.querySelector("#work img"),
closeIcon = previewBox.querySelector("#work .icon"),
shadow = document.querySelector("#work .shadow");
function preview(element){
  //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  previewImg.src = selectedPrevImg; //passing the user clicked image source in preview image source
  checklangdetail(element);
  previewBox.classList.add("show"); //show the preview image box
  shadow.classList.add("show"); //show the light grey background
  closeIcon.onclick = ()=>{ //if user click on close icon of preview box
    previewBox.classList.remove("show"); //hide the preview box
    shadow.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}


function checklangdetail(element){
  let selectedImgDetailen = element.getAttribute("data-detailen"); //getting user clicked image data-name value
  let selectedImgDetailth = element.getAttribute("data-detailth"); //getting user clicked image data-name value
    if (localStorage.lang == 'en')
    categoryDetail.textContent = selectedImgDetailen; //passing user clicked data-name value in category name
  else if (localStorage.lang == 'th')
    categoryDetail.textContent = selectedImgDetailth; //passing user clicked data-name value in category name
}

const previewBox1 = document.querySelector("#Cerfi .preview-box"),
categoryDetail1 = previewBox1.querySelector("#Cerfi .detail p"),
previewImg1 = previewBox1.querySelector("#Cerfi img"),
closeIcon1 = previewBox1.querySelector("#Cerfi .icon"),
shadow1 = document.querySelector("#Cerfi .shadow");
function preview1(element){
  //once user click on any image then remove the scroll bar of the body, so user cant scroll up or down
  document.querySelector("body").style.overflow = "hidden";
  let selectedPrevImg = element.querySelector("img").src; //getting user clicked image source link and stored in a variable
  previewImg1.src = selectedPrevImg; //passing the user clicked image source in preview image source
  checklangdetail(element);
  previewBox1.classList.add("show"); //show the preview image box
  shadow1.classList.add("show"); //show the light grey background
  closeIcon1.onclick = ()=>{ //if user click on close icon of preview box
    previewBox1.classList.remove("show"); //hide the preview box
    shadow1.classList.remove("show"); //hide the light grey background
    document.querySelector("body").style.overflow = "auto"; //show the scroll bar on body
  }
}

// ------------------- Send Email
function  sendEmail(){
  let firstname = document.getElementById("Firstname").value;
  let lastname = document.getElementById("Lastname").value;
  let email = document.getElementById("Email").value;
  let phone = document.getElementById("Phone").value;
  let message = document.getElementById("Message").value;

Email.send({
      SecureToken: "304ea378-3ae2-48ab-b8a2-303613030fa9",
      Username : "natchnon654321@gmail.com",
      Password : "097D73C589AFEDCDD4DDD4798CBFB1818C44",
      To : 'natchnon654321@gmail.com',
      From : 'natchnon654321@gmail.com',
      Subject : "New Contact To Me Form Portfolio",
      Body : "FirstName :" + firstname + "<br/> LastName :" + lastname + "<br/> email :" + email + "<br/> phone :" + phone + "<br/> message :" + message
  }).then(
    message => alert("ส่งข้อความเรียบร้อยแล้ว!!")
  );
}


// ----------------readmore

const parentContainer = document.querySelector('.content-ps');

parentContainer.addEventListener('click', event =>{
    const current = event.target;

    const isReadMoreBtn = current.className.includes('checkreadmore')

    if(!isReadMoreBtn) return;

    const currentText = event.target.parentNode.querySelector('.content-readmore');

    currentText.classList.toggle('content-readmore--show');

    if (localStorage.lang == 'en') {
      current.textContent = current.textContent.includes('Read More') ?
      "Read Less":"Read More";
    } else {
      current.textContent = current.textContent.includes('อ่านเพิ่มเติม') ?
      "อ่านน้อยลง":"อ่านเพิ่มเติม";
    }
})
