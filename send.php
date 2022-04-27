<?php
// Code courtesy of https://docs.aws.amazon.com/ses/latest/dg/send-using-smtp-programmatically.html

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['name']) 
    && isset($_POST['email'])
    && isset($_POST['message'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // If necessary, modify the path in the require statement below to refer to the
    // location of your Composer autoload.php file.
    // $filename = '../../../home/ec2-user/vendor/autoload.php';
    $filename = '../vendor/autoload.php';
    require $filename;

    $sender = 'matthackmann@matthackmann.com';
    $senderName = 'My Portfolio';

    $recipient = 'mhackmann13@icloud.com';

    // Replace smtp_username with your Amazon SES SMTP user name.
    $usernameSmtp = 'AKIA5UFU5X67JVXWSSXV';

    // Replace smtp_password with your Amazon SES SMTP password.
    $passwordSmtp = 'BCy9mtLuYl2bTCOvpJvxNlFElxKj1SfO7f7oIt54KeGa';

    // If you're using Amazon SES in a region other than US West (Oregon),
    // replace email-smtp.us-west-2.amazonaws.com with the Amazon SES SMTP
    // endpoint in the appropriate region.
    $host = 'email-smtp.us-west-1.amazonaws.com';
    $port = 587;

    $subject = 'Internship Opportunity';

    $bodyText =  $message;

    // The HTML-formatted body of the email
    $bodyHtml = '<h4>Name: </h4><p>'.$name.'</p>
        <h4>Email: </h4><p>'.$email.'</p>
        <h4>Message: </h4><p>'.$message.'</p>';

    $mail = new PHPMailer(true);
    try {
        // Specify the SMTP settings.
        $mail->isSMTP();
        $mail->setFrom($sender, $senderName);
        $mail->Username   = $usernameSmtp;
        $mail->Password   = $passwordSmtp;
        $mail->Host       = $host;
        $mail->Port       = $port;
        $mail->SMTPAuth   = true;
        $mail->SMTPSecure = 'tls';

        // Specify the message recipients.
        $mail->addAddress($recipient);

        // Specify the content of the message.
        $mail->isHTML(true);
        $mail->Subject    = $subject;
        $mail->Body       = $bodyHtml;
        $mail->AltBody    = $bodyText;
        $mail->Send();
        echo "Thank you for your message!" , PHP_EOL;
    } catch (phpmailerException $e) {
        echo "An error occurred. Please contact the site owner.{$e->errorMessage()}", PHP_EOL; //Catch errors from PHPMailer.
    } catch (Exception $e) {
        echo "Email not sent. Please contact the site owner.{$mail->ErrorInfo}", PHP_EOL; //Catch errors from Amazon SES.
    }
} else {
    echo "Email failed to send. Please contact the site owner.";
}
?>
