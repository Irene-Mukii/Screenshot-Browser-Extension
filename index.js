//input variables
const inputedlink = document.querySelector('#url');//tab.url; //to get current url ----gets browser extension @FIXME page... not correct
//const instanceId = document.querySelector('#instance_id');
const submitBtn = document.querySelector('.screenshot-btn')

//output variables
const image = document.querySelector('.screenshot-img');
const imageLink = document.querySelector('.screenshot-image-link')


//getting screenshot
submitBtn.addEventListener('click', ()=> {
    // imageLink.innerHTML = link ;
    let link = getCurrentTab();
    getScreenShot(link)
})

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  // `tab` will either be a `tabs.Tab` instance or `undefined`.
  await chrome.tabs.query(queryOptions, function(tabs){
    var tab = tabs[0];
    console.log(tab);
    var activeUrl = tab.url;
    console.log(activeUrl)
  });
  
  return activeUrl;
}


async function getScreenShot(link) { 
    try {
        await axios 
        .get (`https://api.browshot.com/api/v1/screenshot/create?url=${link.value}/&instance_id=12&size=page&key=CXirmDIyiJlRUSK9b7Ylhdkon41r`)

        .then(response => {
            console.log(response.data);
            imageLink.innerHTML = link.value ; 
            image.src = response.data.screenshot_url;
            console.log("Cost is "+ response.data.cost);

            //@TODO store screenshots or their url in localstorage maybe use setItem?

        });
    }catch (error){
        console.log('error');
    }

}
