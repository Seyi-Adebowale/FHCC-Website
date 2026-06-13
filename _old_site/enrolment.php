<?php
// Check for empty fields
$requiredFields = ['name-of-child', 'gender', 'date-of-birth', 'enquirer-name', 'relationship-to-child', 'email', 'phone-number', 'whatsapp-number', 'contact-method'];
foreach ($requiredFields as $field) {
    if (empty($_POST[$field])) {
        echo "Please fill in all the required fields.";
        return false;
    }
}

// Server-side validation for email format
if (!empty($_POST['email']) && !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
    echo "Invalid email format.";
    return false;
}

// Retrieve form data
$nameOfChild = $_POST['name-of-child'];
$gender = $_POST['gender'];
$dateOfBirth = $_POST['date-of-birth'];
$enquirerName = $_POST['enquirer-name'];
$relationshipToChild = $_POST['relationship-to-child'];
$email = $_POST['email'];
$phoneNumber = $_POST['phone-number'];
$whatsappNumber = $_POST['whatsapp-number'];
$contactMethod = $_POST['contact-method'];
$message = $_POST['message'];

// Create the email and send the message
$to = 'info@flowerhousecrechecare.com.ng'; // Add your email address here
$email_subject = "Interest to Enrol!";
$email_body = "You have received a new message from your website.\n\n"
              . "Here are the details:\n\n"
              . "Name of Child: $nameOfChild\n"
              . "Gender: $gender\n"
              . "Date of Birth: $dateOfBirth\n"
              . "Enquirer Name: $enquirerName\n"
              . "Relationship to Child: $relationshipToChild\n"
              . "Email: $email\n"
              . "Phone Number: $phoneNumber\n"
              . "WhatsApp Number: $whatsappNumber\n"
              . "Contact Method: $contactMethod\n"
              . "Message: $message";
$headers = "From: noreply@flowerhousecrechecare.com.ng\n";
$headers .= "Reply-To: $email";
mail($to, $email_subject, $email_body, $headers);

// Display thanks.html upon successful submission
include('thanks.html');
return true;
?>
