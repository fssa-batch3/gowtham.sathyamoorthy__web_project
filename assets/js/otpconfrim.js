function otp() {
  let bookings = JSON.parse(localStorage.getItem("bookings"));
  for (let i = 0; i < bookings.length; i++) {
    // Create the parent div element with class "otp_card"
    let otpCardDiv = document.createElement("div");
    otpCardDiv.className = "otp_card";

    // Create the first inner div element with class "otp_1"
    let otp1Div = document.createElement("div");
    otp1Div.className = "otp_1";

    // Create the first image element with class "otp_img"
    let img1 = document.createElement("img");
    // img1.src = "../assets/images/vinit sir.jpg";
    img1.className = "otp_img";
    img1.alt = "otpImg";

    // Create the second image element with class "otp_img1"
    let img2 = document.createElement("img");
    img2.src = "../assets/ribbon-unscreen.gif";
    img2.className = "otp_img1";
    img2.alt = "otpImg";

    // Append the image elements to the otp1Div
    otpCardDiv.append(img1);
    otp1Div.append(img2);

    // Create the h1 element with class "otp_2"
    let h1 = document.createElement("h1");
    h1.className = "otp_2";
    h1.textContent = "Your Driver is arriving soon";

    // Create the div element with class "otp_3"
    let otp3Div = document.createElement("div");
    otp3Div.className = "otp_3";

    // Create the p element with class "otp_4"
    let p = document.createElement("p");
    p.className = "otp_4";
    p.textContent = "Your OTP is " + bookings[i]["OTP"];

    // Create the h3 element with class "otp_5"
    let h3 = document.createElement("h3");
    h3.className = "otp_5";
    h3.textContent = "Don't share with anyone";

    // Append the p and h3 elements to the otp3Div
    otp3Div.append(p);
    otp3Div.append(h3);

    // Create the div element with class "otp_6"
    let otp6Div = document.createElement("div");
    otp6Div.className = "otp_6";

    // Create the button elements with class "otp_7" and "otp_8"
    let button1 = document.createElement("button");
    button1.className = "otp_7";
    button1.textContent = "call";

    let button2 = document.createElement("button");
    button2.className = "otp_8";
    button2.textContent = "cancel";

    // Append the button elements to the otp6Div
    otp6Div.append(button1);
    otp6Div.append(button2);

    // Append all the created elements to the otpCardDiv
    otpCardDiv.append(otp1Div);
    otpCardDiv.append(h1);
    otpCardDiv.append(otp3Div);
    otpCardDiv.append(otp6Div);

    // Append the otpCardDiv to the document body
    document.body.append(otpCardDiv);
  }
}

let bookings = JSON.parse(localStorage.getItem("bookings"));
let Drivers = JSON.parse(localStorage.getItem("Drivers"));

// Create the parent div element with class "otp_card"
let driverDetailsDiv = document.createElement("div");
driverDetailsDiv.className = "drir_card";
driverDetailsDiv.innerHTML = `
  <div class="dri_img">
  <h1 class="h1">Driver details</h1>
  <img src="" class="driver_img" alt="driver" />
</div>
<div class="dri_1">
  <p class="driver_1"><b>Name</b> : </p>
  <p class="driv_2"><b>Contact </b>: 9551555231</p>
  <p class="driv_3"><b>Pickup</b> : tam</p>
  <p class="driv_4"><b>Drop </b>: tam</p>
  <p class="driv_5"><b>"He will ariive at within 15 minutes"</p>
</div>
  `;
document.querySelector("body").append(driverDetailsDiv);
