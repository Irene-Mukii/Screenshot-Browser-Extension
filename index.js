
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

