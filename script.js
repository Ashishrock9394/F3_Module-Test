const ipDetails = document.getElementById("ip");

window.onload = ipAddress;

function ipAddress() {
    fetch(`https://api.ipify.org?format=json`)
        .then((response) => response.json())
        .then(data => {
            console.log(data);
            showIp(data.ip);
        })
        .catch((error) => console.log(error))
}
function showIp(ip) {
    ipDetails.innerHTML = ip;
}

function showDetails() {
    const IP = ipDetails.innerText;
    console.log(IP);
    setTimeout(() => {
        fetch(`https://ipapi.co/${IP}/json/`)
            .then((response) => response.json())
            .then(data => {
                showPost(data);
                // console.log(data.city);
            })
            .catch((error) => console.log(error));
    }, 500); 
}

function showPost(data) {
    const lat = data.latitude;
    const long = data.longitude;
    const timezone = data.timezone;
    const pin = data.postal;
    const my_time_zone = new Date().toLocaleString("en-US", { timeZone: timezone });
    
    document.body.classList.add('main');
    document.body.classList.remove('home');

    document.getElementById("landingIP").innerHTML = data.ip;

    document.getElementById("lat").innerHTML = lat;
    document.getElementById("long").innerHTML = long;
    document.getElementById("city").innerHTML = data.city;
    document.getElementById("region").innerHTML = data.region;
    document.getElementById("org").innerHTML = data.org;
    document.getElementById("host").innerHTML = data.asn;
    
    document.getElementById("googlemap").src = "https://maps.google.com/maps?q=" + lat + "," + long + "&z=15&output=embed";
    //maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed
    
    document.getElementById("time").innerHTML = timezone;
    document.getElementById("date").innerHTML = my_time_zone;
    document.getElementById("pin").innerHTML = pin;

    postOfficeDetails(pin);

    // document.getElementById("noOfPost").innerHTML = timezone;


}

function postOfficeDetails(pin){
    setTimeout(() => {
        fetch(`https://api.postalpincode.in/pincode/${pin}`)
            .then((response) => response.json())
            .then(data => {
                console.log(data)
                // console.log(data.city);
            })
            .catch((error) => console.log(error));
    }, 500); 
}

