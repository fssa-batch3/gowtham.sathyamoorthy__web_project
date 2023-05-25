const before_login = `   
   <div class="logo">
<img src="../assets/images/Turbo trip.png" alt="logo" />
</div>
<ul class="snip1143">
<li class="current"><a href="../pages/homepage.html" data-hover="Home">Home</a></li>
<li>
  <a href="../pages/About us.html" data-hover="About Us">About Us</a>
</li>
<li>
  <a href="../pages/collapse.html" data-hover="Notification"
    >Notification</a
  >
</li>
<li>
  <a href="../pages/contact us.html" data-hover="Contact">Contact</a>
</li>
<li>
  <a href="../pages/dri_login.html" data-hover="Login as a Driver"
    >Login as a Driver</a
  >
</li>
<li>
  <a href="../pages/login.html" data-hover="Login as a Customer"
    >Login as a Customer</a
  >
</li>
</ul>

`;

let driver_after_login = `
<div class="logo">
<img src="../assets/images/Turbo trip.png" alt="logo" />
</div>
<ul class="snip1143">
<li class="current">
<a href="../index.html" data-hover="Home">Home</a>
</li><li>
  <a href="../pages/About us.html" data-hover="About Us">About Us</a>
</li>
<li class="notification-li">
  <a href="../pages/collapse.html" data-hover="Notification"
>Notification</a
  >
</li>
<li>
  <a href="../pages/contact us.html" data-hover="Contact">Contact</a>
</li>
<li>
  <a href="../pages/login.html" data-hover="Login as a Customer"
    >Login as a Customer</a
  >
</li>
</ul>
<div class="user_profile">
<a href="../pages/dri_profile.html">
  <img
    src="../assets/images/gpro.png"
    alt="use_pro"
    class="user_profile1"
/></a>
</div>`;

let customer_after_login = `
<div class="logo">
<img src="../assets/images/Turbo trip.png" alt="logo" />
</div>
<ul class="snip1143">
<li class="current">
<a href="../index.html" data-hover="Home">Home</a>
</li>
<li>
  <a href="../pages/About us.html" data-hover="About Us">About Us</a>
</li>
<li>
  <a href="../pages/collapse.html" data-hover="Notification"
    >Notification</a
  >
</li>
<li>
  <a href="../pages/contact us.html" data-hover="Contact">Contact</a>
</li>
<li>
  <a href="../pages/dri_login.html" data-hover="Login as a Driver"
    >Login as a Driver</a
  >
</li>
</ul>
<div class="user_profile">
<a href="../pages/profilepage-1.html">
  <img
    src="../assets/images/gpro.png"
    alt="use_pro"
    class="user_profile1"
/></a>
</div>`;

let header_js = document.getElementById("js_header");
let driver_login = JSON.parse(localStorage.getItem("DriverEmail"));
let customer_login = JSON.parse(localStorage.getItem("user_id"));

let 


if (driver_login != null) {
  header_js.innerHTML = driver_after_login;
} else {
  header_js.innerHTML = before_login;
}

if (customer_login != null) {
  header_js.innerHTML = customer_after_login;
} else {
  header_js.innerHTML = driver_after_login;
}

// if (customer_login != null) {
//   header_js.innerHTML = customer_after_login;
// } else {
// }

// if (driver_login != null) {
//   console.log("2");
// } else {
//   header_js.innerHTML = before_login;
// }
