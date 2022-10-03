
//input variables
const link = document.querySelector('#url');
const instanceId = document.querySelector('#instance_id');
const submitBtn = document.querySelector('.screenshot-btn')

//output variables
const image = document.querySelector('.screenshot-img');


//getting screenshot
submitBtn.addEventListener('click', ()=> {
    getScreenShot(link)
})

async function getScreenShot(link) { 
    try {
        await axios 
        .get (`https://api.browshot.com/api/v1/screenshot/create?url=${link.value}/&instance_id=12&size=page&key=CXirmDIyiJlRUSK9b7Ylhdkon41r`)

        .then(response => {
            console.log(response.data);
            image.src = response.data.screenshot_url ;
            console.log("Cost is "+ response.data.cost);
        });
    }catch (error){
        console.log('error');
    }

}
