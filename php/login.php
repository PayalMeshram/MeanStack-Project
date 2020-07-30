<?php
session_start();
if(!isset($_SESSION['uname'])){
if(isset($_REQUEST['username'])||isset($_REQUEST['password'])){
$uname = $_REQUEST['username'];
$pwd = $_REQUEST['password'];
$_SESSION['uname']= $uname;
$_SESSION['pwd']= $pwd;
echo "<script> location.href ='logout.php'</script>" ;
  }
}
else{
echo "<script> location.href ='logout.php'</script>" ;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST" action = "">
  Username : <input type="text" name="username" Required>
  <br/> <br>
  Password : <input type="password" name="password"  Required>
  <br/> <br>
  <button type="submit" name="btnSubmit">Login</button>

</form> 
</body>
</html>