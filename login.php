<?php
session_start();

$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "database123";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

if (isset($_POST['login'])) {
    $email = $_POST['email'];
    $password = $_POST['password']; // Note: You should hash the password before comparing

    $sql_query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn, $sql_query);

    if (mysqli_num_rows($result) == 1) {
        $_SESSION['email'] = $email;
        header('location: index.html'); // Redirect to index.html after successful login
        exit();
    } else {
        echo "Invalid email or password";
    }
    mysqli_close($conn);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>
    <h2>Login</h2>
    <form method="post" action="login.php">
        <label for="email">Email:</label>
        <input type="email" name="email" required><br>

        <label for="password">Password:</label>
        <input type="password" name="password" required><br>

        <button type="submit" name="login">Login</button>
    </form>
</body>
</html>
