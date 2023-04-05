<?php
require 'vendor/autoload.php';

// Create a MongoDB client
$client = new MongoDB\Client("mongodb://localhost:27017");

// Get the county from the query string
$county = $_GET['county'];

// Select the database and collection
$database = $client->selectDatabase('MongoDB_EX');
$collection = $database->selectCollection('fordonSkuld');
?>