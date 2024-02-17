<?php
// Start session
session_start();
// error_log("This is a message printed to the error log.");

// Allow requests from localhost:3000
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");
error_log(print_r($_POST, true));
// Connect to MySQL
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "auth";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    // If unable to connect to the database, return an error response
    $response = array("success" => false, "message" => "Connection failed: " . $conn->connect_error);
   
    echo json_encode($response);
    exit();
}

// Handle login form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // echo "username";
    // var_dump($_POST);
    // $username = $_POST["username"];
    // // echo $username ;
    // $password = $_POST["password"];
    
    $data = json_decode(file_get_contents("php://input"), true);
     

    error_log("Password received: " . $_POST["password"]);


    $username = $data["username"];
    //  $password = $_POST["password"];
    // $password = $data["password"];
    $password = $_POST["password"];

    // echo $username;

    // Check username and password
    $sql = "SELECT * FROM foot WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        $row = $result->fetch_assoc();

        // echo $row["password"];
        //  echo password_hash($password,PASSWORD_DEFAULT);
        if (password_verify($password, $row["password"])) {
            echo "logged";
            $_SESSION["username"] = $username;
            // If login successful, return a success response
            
            $response = array("success" => true, "message" => "Login successful");
            echo json_encode($response);
             exit();
        } else {
            // If password is incorrect, return an error response
            $response = array("success" => false, "message" => "Invalid password");
            echo json_encode($response);
            exit();
        }
    } else {
        // If user not found, return an error response
        $response = array("success" => false, "message" => "User not found");
        echo json_encode($response);
         exit();
    }
}

// Close database connection
$conn->close();
?>
