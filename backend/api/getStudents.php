<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
$data = file_get_contents("../files/students.json");
echo(json_encode($data));