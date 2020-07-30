
<?php
include_once "dbConnection.php";

if(isset($_POST['btnSubmit'])){
    

    $Name = $_POST['username'];
    $Email = $_POST['email'];
    
        $sql = "UPDATE user_details SET email = '$Email' WHERE user_name = '$Name'  "  ;
        if(!mysqli_query($conn,$sql)){
           
            echo" data not update";
        } else{

        echo" data update";
      
      }
    }
 ?>