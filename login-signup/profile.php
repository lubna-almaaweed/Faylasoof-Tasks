<?php
// Initialize the session
session_start();
?>

<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">

<style>

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}


a {
  text-decoration: none;
  font-size: 22px;
}

button:hover, a:hover {
  opacity: 0.7;
}
</style>
</head>
<body>
<?php include "nav.php";?>
 <div class="login-form" style="margin-top:10rem">
    <div class="card"  style="background:rgba(40,57,101,.9);">
      <h2 style="text-align:center; color:white;"><?php echo $_SESSION["username"]; ?></h2>
        <div  class="card-img"style="margin: 24px 0;">
           <img  style="border-radius:50%;  max-width: 300px;" src="https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png" alt="user" style="width:100%">
        </div>
        <div>
          <button>Log out<a href="logout.php"><i class="fas fa-sign-out-alt"></i></a></button>
        </div>
    </div>
</div>

</body>
</html>