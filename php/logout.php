<?php
session_start();
if (isset( $_SESSION['uname'])){
echo "welcome to our website  " .$_SESSION['uname']; 
}
else{
    echo "<script> location.href ='login.php'</script>" ; 
}
 if(isset($_REQUEST['logout'])){
     session_unset();
     session_destroy();
     echo "<script> location.href ='login.php'</script>" ;
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
 
  <br/>
  <button type="submit" name="logout">Logout</button>

</form>
</body>
</html>