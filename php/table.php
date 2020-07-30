<?php

    include_once "dbConnection.php";

    $sql = "SELECT id , user_name,email FROM user_details";
    $result = mysqli_query($conn,$sql) or die(mysqli_error);
    echo "<table border='1' cellspacing='0'>
    <tr>
    <th>id</th>
    <th>username</th>
    <th>email<th>
    </tr>";

    while ($row = mysqli_fetch_assoc($result)){
       
        echo"<tr>";
        echo"<td>" .$row['id'] . "</td>";
        echo"<td>" .$row['user_name'] . "</td>";
        echo"<td>" .$row['email'] . "</td>";
        echo"</tr>";
    }           
    echo "</table>";

?>