<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

$conn = new mysqli("localhost", "root", "", "reactjsdb");
if (mysqli_connect_errno()) {
    echo mysqli_connect_error();
    exit();
} else {
    $eData = file_get_contents("php://input");
    $dData = json_decode($eData, true);

    $user = $dData['user'];
    $email = $dData['email'];
    $pass = $dData['pass'];

    $result = "";

    if ($user != "" and $email != "" and $pass != "") {
        $sql = "INSERT INTO user(user, email, pass) VALUES('$user', '$email', '$pass');";
        $res = mysqli_query($conn, $sql);
        if ($res) {
            $result = "You have registered successfully!";
        } else {
            $result = "";
        }
    } else {
        $result = "";
    }

    $conn->close();
    $response[] = array("result" => $result);
    echo json_encode($response);
}
