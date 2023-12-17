<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "database123";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

if (isset($_POST['signup'])) {
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $gender = $_POST['gender'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password']; // Note: You should hash the password before saving it in the database

    $sql_query = "INSERT INTO users (first_name, last_name, gender, email, mobile, password)
                  VALUES ('$first_name', '$last_name', '$gender', '$email', '$phone', '$password')";

    if (mysqli_query($conn, $sql_query)) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $sql_query . "<br>" . mysqli_error($conn);
    }
    mysqli_close($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
</head>
<body>
    <h2>Sign Up</h2>
    <form method="post" action="register.php">
        <label for="first_name">First Name:</label>
        <input type="text" name="first_name" required><br>

        <label for="last_name">Last Name:</label>
        <input type="text" name="last_name" required><br>

        <label for="gender">Gender:</label>
        <input type="text" name="gender" required><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br>

        <label for="phone">Phone:</label>
        <input type="tel" name="phone" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br>

        <button type="submit" name="signup">Sign Up</button>
    </form>
</body>
</html>
