//input variables
const link = tab.url; //to get current url ----gets browser extension page... not correct
const instanceId = document.querySelector('#instance_id');
const submitBtn = document.querySelector('.screenshot-btn')

//output variables
const image = document.querySelector('.screenshot-img');
const imageLink = document.querySelector('.screenshot-image-link')


//getting screenshot
submitBtn.addEventListener('click', ()=> {
    imageLink.innerHTML = link ;
    //getScreenShot(link)
})

// async function getScreenShot(link) { 
//     try {
//         await axios 
//         .get (`https://api.browshot.com/api/v1/screenshot/create?url=${link}/&instance_id=12&size=page&key=CXirmDIyiJlRUSK9b7Ylhdkon41r`)

//         .then(response => {
//             console.log(response.data);
//             imageLink.innerHTML = link ;
//             image.src = response.data.screenshot_url;
//             console.log("Cost is "+ response.data.cost);
//         });
//     }catch (error){
//         console.log('error');
//     }

// }
