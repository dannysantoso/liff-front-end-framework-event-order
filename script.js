
function userdropdown() {
  document.getElementById("user").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.userbtn')) {
  var user = document.getElementById("user");
    if (user.classList.contains('show')) {
      user.classList.remove('show');
    }
  }
}

function orderEvent1(){
	var event = document.getElementById("event").innerHTML;
  var date = document.getElementById("date").innerHTML;
  var location = document.getElementById("location").innerHTML;
  var price = document.getElementById("price").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));

}

function orderEvent2(){
  var event = document.getElementById("event2").innerHTML;
  var date = document.getElementById("date2").innerHTML;
  var location = document.getElementById("location2").innerHTML;
  var price = document.getElementById("price2").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));
}


function orderEvent3(){
  var event = document.getElementById("event3").innerHTML;
  var date = document.getElementById("date3").innerHTML;
  var location = document.getElementById("location3").innerHTML;
  var price = document.getElementById("price3").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));
}

function orderEvent4(){
  var event = document.getElementById("event4").innerHTML;
  var date = document.getElementById("date4").innerHTML;
  var location = document.getElementById("location4").innerHTML;
  var price = document.getElementById("price4").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));
}

function orderEvent5(){
  var event = document.getElementById("event5").innerHTML;
  var date = document.getElementById("date5").innerHTML;
  var location = document.getElementById("location5").innerHTML;
  var price = document.getElementById("price5").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));
}

function orderEvent6(){
  var event = document.getElementById("event6").innerHTML;
  var date = document.getElementById("date6").innerHTML;
  var location = document.getElementById("location6").innerHTML;
  var price = document.getElementById("price6").innerHTML;

  if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        id = list_event.length;
    }
    else {
        list_event = [];
        id = 0;
    }

    id++;
    list_event.push({'id' : id, 'event' : event, 'date' : date, 'location' : location, 'price' : price});
    sessionStorage.setItem('list_event', JSON.stringify(list_event));
}

function home(){
  document.getElementById("home").classList.add("active");
  document.getElementById("orderlist").classList.remove("active");
  document.getElementById("order_list").style.display = "none";
  document.getElementById("event_list").style.display = "inline-block";
  
}

function orderlist(){
  document.getElementById("orderlist").classList.add("active");
  document.getElementById("home").classList.remove("active");
  document.getElementById("event_list").style.display = "none";
  document.getElementById("order_list").style.display = "block";
  loadCatatan();
}

function loadCatatan() {
    if (sessionStorage.list_event) {
        list_event = JSON.parse(sessionStorage.getItem('list_event'));
        var data_app = "";
        if (list_event != null && list_event.length > 0) {
            data_app = '<table>';
            data_app += '<tr>' +
                '<th>ID ORDER</th>' +
                '<th>EVENT</th>' +
                '<th>DATE</th>' +
                '<th>LOCATION</th>' +
                '<th>PRICE</th>' +
                '</tr>';

            for (i in list_event) {
                data_app += '<tr>';
                data_app +=
                    '<td>' + list_event[i].id + ' </td>' +
                    '<td>' + list_event[i].event + ' </td>' +
                    '<td>' + list_event[i].date + ' </td>' +
                    '<td>' + list_event[i].location + ' </td>' +
                    '<td>' + list_event[i].price + ' </td>';
                data_app += '</tr>';
            }

            data_app += '</table>';

        }
        else {
            data_app = "THERE ARE NO DATA";
        }


       document.getElementById('order_list').innerHTML = data_app ;
    }
}

