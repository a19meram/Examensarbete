<?php
    $host = "localhost";
    $username = "root";
    $password = "Te16infmer!";
    $dbname = "mysql_ex";

    $conn = new mysqli($host, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}

?>