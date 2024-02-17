<?php
// Connect to MySQL

header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auth";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle signup form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve JSON data from request body
    $data = json_decode(file_get_contents("php://input"), true);
  
    $username = $data["u"];
    $password = $data["p"];

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Insert user into database
    $sql = "INSERT INTO foot (username, password) VALUES ('$username', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        $response = array("success" => true, "message" => "User registered successfully");
        echo json_encode($response);
    } else {
        $response = array("success" => false, "message" => "Error: " . $sql . "<br>"  . $conn->error);
        echo json_encode($response);
    }
}

$conn->close();
?>
