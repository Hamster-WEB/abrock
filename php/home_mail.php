<?php

$message = $_POST['message'];
$name = $_POST['name'];
$email = $_POST['email'];
$result = $message .$name;

mail(
    'jarkythumster@gmail.com',
    $name,
    "Здравствуйте \r\nМеня зовут " . $name . "\r\nМоя почта " . $email . "\r\n$message"
);

header('Location: /')

?>