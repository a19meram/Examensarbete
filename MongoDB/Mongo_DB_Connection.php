<?php
require 'vendor/autoload.php';

// Create a MongoDB client
$client = new MongoDB\Client("mongodb://localhost:27017");

// Get the county from the query string
$county = $_GET['county'];

// Select the database and collection
$database = $client->selectDatabase('MongoDB_EX');
$collection = $database->selectCollection('fordonSkuld');

// Build the query
$filter = [];
if ($county == "alla") {
    $filter = [];
} elseif ($county != "") {
    $filter['County'] = $county;
}

$options = [
    'projection' => [
        'Year' => 1,
        'debtType' => 1,
        'Amount' => 1,
        '_id' => 0
    ]
];

// Find documents matching the query
$documents = $collection->find($filter, $options);

// Convert the results to an array
$data = iterator_to_array($documents);

// Send the results as JSON
header('Content-Type: application/json');
echo json_encode($data);
?>