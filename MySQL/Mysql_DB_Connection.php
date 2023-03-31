<?php
    $host = "localhost";
    $username = "root";
    $password = "Te16infmer!";
    $dbname = "mysql_ex";

    $conn = new mysqli($host, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
}
    $county = $_GET['county'];

    $sql = "SELECT Year, debtType, Amount FROM fordonSkuld";
    if ($county == "alla") {
    
    } elseif ($county != "") {
        $sql .= " WHERE County = '".$county."'";
    }
    $result = $conn->query($sql);

    $data = array();
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
?>