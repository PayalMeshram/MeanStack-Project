<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    div{
      border: 2px solid red;
      width: 200px;
      padding: 30px;
    }
  </style>
</head>
<body>
  
<h3>Fill the Form</h3>
<div>
<form method="POST" action = "insert.php">
  Name : <input type="text" name="username" Required>
  <br/>
  Email : <input type="text" name="email"  Required>
  <br/> <br>
  <input type="submit" name="btnSubmit" value="Submit">

</form>
</div>

</body>
</html>

