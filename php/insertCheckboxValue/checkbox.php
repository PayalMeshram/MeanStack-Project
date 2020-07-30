<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
    <form action="text1.php" method="post">
     <!----
    <select name="cities" id="">
    <option value="pune">Pune</option>
    <option value="Delhi">Delhi</option>
    <option value="Mumbai">Mumbai</option>
    </select>
   
    <label>Gender</label> <br>
    <input type="radio" name="gender" value="male">Male
    <input type="radio" name="gender" value="female">Female <br>
    ---->
    <label >Favourite Color</label> <br>
    <input type="checkbox" name="check[]" value="red">Red
    <input type="checkbox" name="check[]" value="blue">Blue
    <input type="checkbox" name="check[]" value="green">Green
    <input type="checkbox" name="check[]" value="yellow">Yellow <br> <br>

    <button type="submit" name="upload">Submit</button>
    </form>

</body>
</html>