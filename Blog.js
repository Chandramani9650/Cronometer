arr = [ {
    url:"https://cronometer.com/blog/wp-content/uploads/2023/10/Blog-Img-Women-Eating.png",
    title:"Nutrition To Support Your Menstrual Cycle: The Follicular Phase",
    date:"November 10, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/10/Blog-Img-Woman-Eating-2.png",
    title:"Nutrition To Support Your Menstrual Cycle: The Luteal Phase",
    date:"November 10, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/10/Blog-Img-Brain-Health.png",
    title:"Brain Boost: 5 Nutrition Tips To Improve Brain Health",
    date:" October 30, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/09/Blog-Img-Oura-Cycle-Tracking.png",
    title:"Leading Health Tech ŌURA and Cronometer Unlock A World Of Insights With New Menstrual Cycle Tracking Functionality",
    date:"October 25, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/09/Blog-Img-Oura-Cycle-Tracking.png",
    title:"New Oura Integration Feature: Cycle Insights",
    date:"October 25, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/09/Blog-Img-Fatigue-2.png",
    title:"The Diet-Energy Connection: Fighting Stress and Fatigue with Nutrition",
    date:"September 15, 2023"
},{
    url:"",
    title:"Episode 15: Discovering Hydration with Quench Author Dr. Dana Cohen",
    date:"August 29, 2023"
},
{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/08/Blog-Img-Sodium.png",
    title:"Nutrients that Affect Hydration",
    date:"August 28, 2023"
},
{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/07/Blog-Img-Repeat-Item.png",
    title:"How To Set A Repeating Food or Recipe (Gold Feature)",
    date:"August 29, 2023"
},
{
    url:"",
    title:"Episode 14: Exercise with Kinesiologist Alex Lueth",
    date:"July 31, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2022/07/Blog-Hiking.png",
    title:"How Nutrition Can Improve Endurance",
    date:"August 1, 2023"
},
{
    url:"https://cronometer.com/blog/wp-content/uploads/2021/07/nutrition-cycling-cronometer-6-1536x1536.jpg",
    title:"Nutrition for Cyclists",
    date:"August 1, 2023"
},
{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/07/Blog-Img-Em-Phone-2x-2.png",
    title:"New & Improved: The Latest Cronometer Updates",
    date:"August 1, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2023/07/Blog-Img-Em-Phone-2x-2.png",
    title:"New & Improved: The Latest Cronometer Updates",
    date:"August 1, 2023"
},{
    url:"https://cronometer.com/blog/wp-content/uploads/2022/08/andrew-tanglao-3I2vzcmEpLU-unsplash-1536x805.jpg",
    title:"New & Improved: The Latest Cronometer Updates",
    date:"August 1, 2023"
},
]
let post = document.getElementById("post")

arr.map((el)=>{
 let div = document.createElement("div")
 let h2 = document.createElement("h3")
 let p = document.createElement("p")
 let img = document.createElement("img")
 img.src = el.url
 img.style.width = "100%"
 
 h2.innerText = el.title
 p.innerText = el.date
 div.append(img,h2,p)
 post.append(div)
})