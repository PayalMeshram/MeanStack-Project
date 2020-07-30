<?php
include_once "dbConnection.php";
if(isset($_POST['btnSubmit'])){

$Name = $_POST['username'];
$Email = $_POST['email'];

$sql = "INSERT INTO user_details (user_name,email) VALUES ('$Name','$Email')";
if(mysqli_query($conn,$sql))
{
    echo " inserted";
}
else{
    echo "not inserted";
}
}
?>
