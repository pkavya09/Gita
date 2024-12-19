import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
    import { getDatabase,ref,get} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
    const firebaseConfig = {
      apiKey: "AIzaSyB2rqIPzwKpi_F9wZblykXyArZaDz_mk6s",
      authDomain: "gita-269f8.firebaseapp.com",
      databaseURL: "https://gita-269f8-default-rtdb.firebaseio.com",
      projectId: "gita-269f8",
      storageBucket: "gita-269f8.firebasestorage.app",
      messagingSenderId: "506820047158",
      appId: "1:506820047158:web:7927eae4abbe51a606c397",
      measurementId: "G-47D5M4PPP3"
    };
    // Initialize Firebase
const app = initializeApp(firebaseConfig);
const database=getDatabase(app);

// HTML elements
const slokaTitle=document.getElementById("sloka-title")
const slokaContainer = document.getElementById("sloka-text");
const nextBtn = document.getElementById("next-btn");
const engBtn=document.getElementById("eng-btn");
const telBtn=document.getElementById("tel-btn");
const hinBtn=document.getElementById("hin-btn");
const tamilBtn=document.getElementById("tamil-btn");
const engmeanBtn=document.getElementById("meaning-eng-btn");
const telmeanBtn=document.getElementById("meaning-tel-btn");
const hinmeanBtn=document.getElementById("meaning-hin-btn");
const tammeanBtn=document.getElementById("meaning-tam-btn");

const sloka1=document.getElementById("281")
const sloka2=document.getElementById("282")
const sloka3=document.getElementById("283")
const sloka4=document.getElementById("284")
const sloka5=document.getElementById("285")
const sloka6=document.getElementById("286")
const sloka7=document.getElementById("287")
const sloka8=document.getElementById("288")
const sloka9=document.getElementById("289")
const sloka10=document.getElementById("290")
// Variables
let currentSloka = 1; // Starting from the first sloka
const maxSloka = 11; // Total number of slokas
let numm=1;
let Engnum=1;let Telnum=1;let Hinnum=1;let Tamnum=1;
let meanEng=1;let meanTel=1;let meanTam=1;let meanHin=1;
let slokaNum=281;
let isClicked=false;let isSlokaBtn=false;let temp;
const maxSlokaNum=290;
const slokaImages = [
   'images/281.jpg', 
   'images/282.jpg',
   'images/283.jpg',
   'images/284.jpg',
   'images/285.jpg',
   'images/286.webp',
   'images/287.jpg',
   'images/288.webp',
   'images/289.jpg',
   'images/290.jpg',
 ];
import { slokas } from "./slokas.js";


// Function to render audio
function renderAudioList(slokaId) {
   const audioList = document.getElementById("audioList");
   audioList.innerHTML = ""; // Clear existing audios

   const sloka = slokas.find((s) => s.id === slokaId);
   if (sloka) {
       sloka.audios.forEach((audio) => {
           const audioElement = document.createElement("audio");
           audioElement.controls = true;
           audioElement.src = audio.url;
           audioList.appendChild(audioElement);
       });
   }
}

// Event listeners for sloka buttons
document.querySelectorAll("#slokaList button").forEach((button) => {
   button.addEventListener("click", () => {
       const slokaId = parseInt(button.getAttribute("data-sloka-id"));
       renderAudioList(slokaId);
   });
});

nextBtn.addEventListener("click",()=>{
 nextBtnFunc();
})
engBtn.addEventListener("click",()=>{
   if(isClicked){
      const transRef=ref(database,`/${currentSloka-1}/translations/english`);
      get(transRef).then((snapshot)=>{
         if(snapshot.exists){
            slokaContainer.innerHTML=snapshot.val();    
            
         }
         else{
            console.log("data not found!")
         }
        
      })
   }
})
telBtn.addEventListener("click",()=>{
   if((isClicked)){

      const transRef=ref(database,`/${currentSloka-1}/translations/telugu`);
      get(transRef).then((snapshot)=>{
         if(snapshot.exists){
            slokaContainer.innerHTML=snapshot.val();       
         }
         else{
            console.log("data not found!")
         }
        
      })
   }
 
})
hinBtn.addEventListener("click",()=>{
   if((isClicked)){
   const transRef=ref(database,`/${currentSloka-1}/translations/hindi`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
         slokaContainer.innerHTML=snapshot.val();     
      }
      else{
         console.log("data not found!")
      }
      
   })
}
})
tamilBtn.addEventListener("click",()=>{
   if((isClicked)){
   const transRef=ref(database,`/${currentSloka-1}/translations/tamil`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();     
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
engmeanBtn.addEventListener("click",()=>{
   if((isClicked)){
   const transRef=ref(database,`/${currentSloka-1}/meaning/eng`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
      
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
telmeanBtn.addEventListener("click",()=>{
   if((isClicked)){
   const transRef=ref(database,`/${currentSloka-1}/meaning/tel`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
        
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
hinmeanBtn.addEventListener("click",()=>{
   if((isClicked)){
   const transRef=ref(database,`/${currentSloka-1}/meaning/hin`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
        
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
tammeanBtn.addEventListener("click",()=>{
   if((isClicked )){
   const transRef=ref(database,`/${currentSloka-1}/meaning/tam`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
        slokaContainer.innerHTML=snapshot.val();  
       
      }
      else{
         console.log("data not found!")
      }
 
   })
}
})
 
sloka1.addEventListener("click",()=>{
   slokaBtn(1);
   
})
sloka2.addEventListener("click",()=>{
   slokaBtn(2);
})
sloka3.addEventListener("click",()=>{
   slokaBtn(3);
})
sloka4.addEventListener("click",()=>{
   slokaBtn(4);
})
sloka5.addEventListener("click",()=>{
   slokaBtn(5);
})
sloka6.addEventListener("click",()=>{
   slokaBtn(6);
})
sloka7.addEventListener("click",()=>{
   slokaBtn(7);
})
sloka8.addEventListener("click",()=>{
   slokaBtn(8);
})
sloka9.addEventListener("click",()=>{
   slokaBtn(9);
})
sloka10.addEventListener("click",()=>{
   slokaBtn(10);
})
function slokaBtn(num){
   const transRef=ref(database,`/${num}/sloka`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
         isClicked=true;
         isSlokaBtn=true;
         slokaContainer.innerHTML=snapshot.val();
         slokaTitle.innerText=280+num;
   }
   })
}
let currentSlokaIndex = 0; // Start with the first sloka

document.getElementById('get-image-btn').addEventListener('click', () => {
  const slokaImage = document.getElementById('sloka-image');
  console.log(currentSlokaIndex)
  slokaImage.src = slokaImages[currentSlokaIndex];
  slokaImage.style.display = 'block';
  document.getElementById('sloka-title').textContent = ` ${281 + currentSlokaIndex}`;

  // Increment the index, loop back to the first image if at the end
  currentSlokaIndex = (currentSlokaIndex + 1) % slokaImages.length;
 
});
function slokaDisplay(){
   if(currentSloka===maxSloka){
      slokaContainer.innerHTML="Click next to continue again form 281"
      slokaTitle.innerText=""
      currentSloka=1;
      slokaNum=281;
   }
   else{
      slokaTitle.innerText=slokaNum;
      currentSloka++;
      slokaNum++;
   }
}
function nextBtnFunc(){
    if(isSlokaBtn==true){isClicked=false}
   const transRef=ref(database,`/${currentSloka}/sloka`);
   get(transRef).then((snapshot)=>{
      if(snapshot.exists){
         isClicked=true;
         slokaContainer.innerHTML=snapshot.val();
          slokaDisplay();
          temp=((currentSloka-1)+280)
          renderAudioList(temp)
      }
      else{
         console.log("data not found!")
      }
   })  
}