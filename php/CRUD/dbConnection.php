<?php 
// for creating connection
$conn = mysqli_connect ("localhost","root","","testphp");

 // for checking connection 
if(!$conn)
{
 echo "Not connected to server";
} 
echo " connected to server  <br>";
?>