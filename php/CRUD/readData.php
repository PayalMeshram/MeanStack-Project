<?php
include_once "dbConnection.php";
if(isset($_POST['btnSubmit'])){

    $sql = "SELECT id , user_name,email FROM user_details";
    $result = mysqli_query($conn,$sql) or die(mysqli_error);

    while ($row = mysqli_fetch_assoc($result)){
        echo "ID : {$row['id']} <br>" .
        "Name : {$row['user_name']} <br>" .
        "Email : {$row['email']} <br>" ;

        "---------------------------------";
    }           
    

}

?>