window.onload = function() {
    const useNodeJS = false;  
    const defaultLiffId = "1653716067-3Glwdagk";  

    let myLiffId = "";

    myLiffId = defaultLiffId;
    
    inisialisasiLiff(myLiffId);

}

function inisialisasiLiff(myLiffId) {
    liff
        .init({
            liffId: myLiffId
        })
        .then(() => {
            
            startupApp();
        })
        .catch((err) => {
            console.log('error', err);
        });
}

function startupApp(){
	if (liff.isLoggedIn()) {
        getUsername();
    } else {
        document.getElementById("event_list").style.display = "none";
  		document.getElementById("login").style.display = "block";
  		document.getElementById("navbar").style.visibility = "hidden";
  		cekBrowser();
    }
}

function cekBrowser() {
    if (liff.isInClient()) {
        document.getElementById("infoclient").innerHTML = 'You are opening the app in the in-app browser of LINE.';
    } else {
        document.getElementById("infoclient").innerHTML = 'You are opening the app in an external browser.';
    }
}

function externalBrowser(){
	liff.openWindow({
            url: 'https://eventonlineorder.herokuapp.com/', 
            external: true
        });
}

function logout(){
	liff.logout();
    window.location.reload();
}

function loginUser(){

	if (!liff.isLoggedIn()) {
          
            liff.login();
        }
}

function getUsername(){
	var name = "";
	liff.getProfile()
		.then(profile => {
  			const name = profile.displayName;
  			alert(name);
		})
		.catch((err) => {
  			console.log('error', err);
		});
		
  document.getElementById("event_list").style.display = "inline-block";
  document.getElementById("login").style.display = "none";
  document.getElementById("navbar").style.visibility = "visible";
  /*document.getElementById("userbtn").innerHTML = name;*/


}

function senddata(){
	if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        var data_app = "";
        if (list_event != null && list_event.length > 0) {
            for (i in list_event) {
	            liff.sendMessage([
				{
					type : 'text',
					text : "Anda telah memesan tiket "+list_event[i].event+", pada tanggal "+list_event[i].date+" yang berlokasi di "+list_event[i].location+" dengan harga tiket "+list_event[i].price+""
				}]).then(() => {
					console.log("message terkirim");
				}).catch((error) => {console.log('error', error);});
        	}
    	}
	}
}



function kirimPesan1(){
	var event = document.getElementById("event").innerHTML;
  var date = document.getElementById("date").innerHTML;
  var location = document.getElementById("location").innerHTML;
  var price = document.getElementById("price").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

function kirimPesan2(){
	var event = document.getElementById("event2").innerHTML;
  var date = document.getElementById("date2").innerHTML;
  var location = document.getElementById("location2").innerHTML;
  var price = document.getElementById("price2").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

function kirimPesan3(){
	var event = document.getElementById("event3").innerHTML;
  var date = document.getElementById("date3").innerHTML;
  var location = document.getElementById("location3").innerHTML;
  var price = document.getElementById("price3").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

function kirimPesan4(){
	var event = document.getElementById("event4").innerHTML;
  var date = document.getElementById("date4").innerHTML;
  var location = document.getElementById("location4").innerHTML;
  var price = document.getElementById("price4").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

function kirimPesan5(){
	var event = document.getElementById("event5").innerHTML;
  var date = document.getElementById("date5").innerHTML;
  var location = document.getElementById("location5").innerHTML;
  var price = document.getElementById("price5").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

function kirimPesan6(){
	var event = document.getElementById("event6").innerHTML;
  var date = document.getElementById("date6").innerHTML;
  var location = document.getElementById("location6").innerHTML;
  var price = document.getElementById("price6").innerHTML;

	liff.sendMessage([
	{
		type : 'text',
		text : "Anda telah memesan tiket "+event+", pada tanggal "+date+" yang berlokasi di "+location+" dengan harga tiket "+price+""
	}]).then(() => {
		console.log("message terkirim");
	}).catch((error) => {console.log('error', error);});
}

