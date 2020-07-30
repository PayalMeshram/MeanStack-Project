<?php 
$conn = mysqli_connect ("localhost","root","","testphp");
if (isset($_POST['upload'])){

    $checkbox = implode(',',$_POST['check']);

     // $gender = $_POST['cities'];
   // $gender= $_POST['gender'];

    $sql = "INSERT INTO radio (gender) VALUES ('$checkbox')";
  if(mysqli_query($conn,$sql)){
      echo "inserted";
  }else{
    echo " not inserted"; 
  }

}
?>
