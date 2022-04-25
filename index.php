<?php
// $msg = '';

// if(filter_has_var(INPUT_POST, 'submit')){
//   $name = htmlspecialechars($_POST['name']);
//   $email = htmlspecialechars($_POST['email']);
//   $message = htmlspecialechars($_POST['message']);

//   // Check that form fields aren't empty
//   if(!empty($email) && !empty($name) && !empty($message)){
//     echo 'PASSED';

//     if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
//       $msg = 'Please enter a valid email';
//     } else {
//       $recipientEmail = 'mhackmann13@icloud.com';
//       $subject = 'Internship Oppurtunity from ' . $name;
//       $body = '<h2>Internship Oppurtunity</h2>
//         <h4>Name:</h4><p>' . $name . '</p>
//         <h4>Email:</h4><p>' . $email . '</p>
//         <h4>Message:</h4><p>' . $message . '</p>';

//       $headers = "MIME-Version: 1.0" . "\r\n";
//       $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
//       $headers .= "From: " . $name . "<" . $email . ">" . "\r\n";

//       if(mail($recipientEmail, $subject, $body, $headers)){
//         $msg = 'Your email has been sent';
//       } else {
//         $msg = 'Your email was not sent';
//       }
//     }
//   } else {
//     $msg = 'Please fill in all fields';
//   }
// }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Matt's Portfolio</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/1b8d9746c3.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
  <div class="row bg-color-1">
    <i class="close-btn btn fas fa-lg fa-times"></i>
    <h1 class="menu-item-header text-color-1 text-color-1-animated text-border-color-2">PROJECTS</h1>
  </div>
  <section class="content-wrapper bg-color-1">
  </section>
  <div class="row bg-color-2">
    <i class="close-btn btn fas fa-lg fa-times"></i>
    <h1 class="menu-item-header text-color-2 text-color-2-animated text-border-color-1">ABOUT</h1>
  </div>
  <section class="content-wrapper bg-color-2">
    <div id="about-page">
      <p>
        <span>Hello There.</span>
        I'm Matt Hackmann, an aspiring web developer. I'm a believer in simple and concise design, both in web layouts and code. Simple usually doesn't mean easy, and it takes diligance to maintain clear and concise code as you're building a project. This, along with a dedication to continual learning, is where my focus lies.
      </p>
    </div>
  </section>
  <div class="row bg-color-1">
    <i class="close-btn btn fas fa-lg fa-times"></i>
    <h1 class="menu-item-header text-color-1 text-color-1-animated text-border-color-2">RESUME</h1>
  </div>
  <section class="content-wrapper bg-color-1">
  </section>
  <div class="row bg-color-2">
    <i class="close-btn btn fas fa-lg fa-times"></i>
    <h1 class="menu-item-header text-color-2 text-color-2-animated text-border-color-1">CONTACT</h1>
  </div> 
  <section class="content-wrapper bg-color-2 text-white">
    <div id="contact-page">
      <form method="post" action="./send.php">
        <div>
          <label>Enter you name:</label>
          <input type="text" id="name" name="name">
        </div>
        <div>
          <label>Enter your email:</label>
          <input type="email" id="email" name="email">
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
        </div>
        <button type="submit" name="submit" class="btn">Send Message</button>
      </form>
      <div>
        <label>Phone:</label> 
        <p>+1 636 384 6445</p>
        <br>
        <label>Email:</label>
        <p>mhackmann13@icloud.com</p>
      </div>
    </div>
  </section>

  <script src="./js/MenuItem.js"></script>
  <script src="./js/script.js"></script>
</body>
</html>
