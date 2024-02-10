// Fungsi untuk menampilkan formulir login saat ikon akun diklik
document.getElementById("account-icon").addEventListener("click", function() {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");

  loginForm.style.display = "block"; // Tampilkan formulir login
  signupForm.style.display = "none"; // Sembunyikan formulir sign up
});

// Fungsi untuk menutup formulir saat klik di luar formulir
document.addEventListener("click", function(event) {
  var loginForm = document.getElementById("login-form");
  var signupForm = document.getElementById("signup-form");
  var accountIcon = document.getElementById("account-icon");

  // Periksa apakah yang diklik berada di luar formulir, formulir sign up, atau ikon akun
  if (!loginForm.contains(event.target) && !signupForm.contains(event.target) && !accountIcon.contains(event.target)) {
      loginForm.style.display = "none"; // Sembunyikan formulir login
      signupForm.style.display = "none"; // Sembunyikan formulir sign up
  }
});

// Fungsi untuk sign up
function signup() {
  var fullname = document.querySelector('#signup-form input[name="fullname"]').value;
  var email = document.querySelector('#signup-form input[name="email"]').value;
  var password = document.querySelector('#signup-form input[name="password"]').value;

  // Membuat objek user
  var user = {
      fullname: fullname,
      email: email,
      password: password
  };

  // Simpan data user ke Local Storage
  localStorage.setItem(email, JSON.stringify(user));

  // Bersihkan formulir
  document.querySelector('#signup-form').reset();

  alert('Sign up successful! Please login.');
}

// Fungsi untuk login
function login() {
  var email = document.querySelector('#login-form input[name="email"]').value;
  var password = document.querySelector('#login-form input[name="password"]').value;

  // Periksa apakah email ada di Local Storage
  if (localStorage.getItem(email)) {
      // Ambil data user dari Local Storage
      var user = JSON.parse(localStorage.getItem(email));

      // Periksa kecocokan password
      if (password === user.password) {
          alert('Login successful! Welcome, ' + user.fullname + '.');
          // Bersihkan formulir
          document.querySelector('#login-form').reset();
      } else {
          alert('Invalid email or password.');
      }
  } else {
      alert('User not found. Please sign up.');
  }
}


