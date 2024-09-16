<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shadow Store</title>
    <link rel="stylesheet" href="CSS/style.css">
<body>
    <header>
        <nav>
            <ul>
                <li><a href="index.php">Home</a></li>
                <li><a href="products.php">Products</a></li>
                <li><a href="about-us.php">About Us</a></li>
                <li class="login-button"><a href="login.php">Login</a></li>
            </ul>
        </nav>
    </header>

<main>

<form method="post">
    Username: <input type="text" name="username"><br>
    Password: <input type="password" name="password"><br>
    <input type="submit" value="Login">
</form>

<?php
$conn = new mysqli("localhost", "user", "", "ctf");

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hashed_password = hash('sha256', $password);

    $sql = "SELECT * FROM users WHERE username = '$username' AND password = '$hashed_password'";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        echo "Login successful!";
        
header("Location: index.php");
exit;
    } else {
        echo "Invalid login.";
    }
}
?>
</main>

    <footer>
    <p>Shadow Company 2024 C. All rigths resrved</p>
    </footer>


    <script src="JS/axios.min.js"></script>
</body>
</html>
