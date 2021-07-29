<?php
// echo "This mgs is sent from PHP file"; doar am verificat ca e bine conectat cu js
$firstName =htmlspecialchars $_POST['firstName'];
$lastName = htmlspecialchars $_POST['lastName'];
$email = htmlspecialchars $_POST['email'];
$phone = htmlspecialchars $_POST['phone'];
$message = htmlspecialchars $_POST['message'];
// echo $firstName;

if(!empty($email) && !empty($message)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "sarbubibi024@gmail.com";
        $subject = "Form: $firstName <$email>";
        $body = "Name: $firstName\nFirstName: $lastName\nLastName: $email\nEmail: $phone\nPhone: $message\nMessage:";
        $sender = "Form: $email";
        if(mail($receiver,$subject,$body,$sender)){
            echo "Your email has been send";

    }else{
        echo "Sorry, failed to send your message!";
    }
}else{
    echo "Enter a valid email address!";
}
}else{
    echo"Email and message field is required!";
}
?>