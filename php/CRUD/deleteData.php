<?php
include_once "dbConnection.php";
if(isset($_POST['btnSubmit'])){
  $query = "DELETE FROM user_details where id = 17" ;
  $res = mysqli_query($conn,$query);
  if(!$res){
     echo" data not deleted";
  }
  echo" data deleted";

  }