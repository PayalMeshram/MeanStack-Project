<?php 
	session_start();
	$conn = mysqli_connect('localhost', 'root', '', 'testphp');

	// initialize variables
	$name = "";
	$email = "";
	$id = 0;
	$update = false;

	if (isset($_POST['save'])) {
		$name = $_POST['name'];
		$email = $_POST['email'];

		mysqli_query($conn, "INSERT INTO user_details (user_name, email) VALUES ('$name', '$email')"); 
		$_SESSION['message'] = "Address saved"; 
		header('location: index.php');
    }
    
    if (isset($_POST['update'])) {
        $id = $_POST['id'];
        $name = $_POST['name'];
        $email = $_POST['email'];
    
        mysqli_query($conn, "UPDATE user_details SET user_name='$name', email='$email' WHERE id=$id");
        $_SESSION['message'] = "Address updated!"; 
        header('location: index.php');
    }
    if (isset($_GET['del'])) {
        $id = $_GET['del'];
        mysqli_query($conn, "DELETE FROM user_details WHERE id=$id");
        $_SESSION['message'] = "Address deleted!"; 
        header('location: index.php');
    }