// document.body.style.border = "15px solid blue";

function getPage(){

    try {
        browser.tabs.query({currentWindow: true, active: true})
        .then((tabs) => {
            var cur_url = tabs[0].url ;
            var _url = 'https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl='+cur_url ;
            const img = document.getElementById("__img_ext"); 
            img.src = _url;
        })
        
        // $('#__sp_ext').html(tabs[0].url) ;
        // console.log(browser);
        // console.log("browser.tabs : " + browser.tabs);
        // browser.tabs.onUpdated.addListener(cleanPage);
      
      } catch(err) {
        console.log("err : ", err);
      }
}

getPage();