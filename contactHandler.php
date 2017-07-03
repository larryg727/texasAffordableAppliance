<?php



if(isset($_POST['submit'])) {
    $name = test_input($_POST["name"]);
    $email = test_input($_POST['email']);
    $phone = test_input($_POST['phone']);
    $message = test_input($_POST['message']);
}

$msg = "You have a new message.\n Name: " . $name . "\n Email: " . $email . "\n Phone: " . $phone . "\n Message:  ";

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

$to = "txaffordable@gmail.com";
$subject = "A visitor has submitted a message.";
$header = "From: Visitor@txaffordable.repair";
$msg = $msg . wordwrap($message,70);

if(mail($to,$subject,$msg,$header)) {
   echo "<script>
alert('Message sent successfully.');
window.location.href='index.html';
</script>";
//    header('Location: index.html');
}else {
     echo "<script>
alert('Message failed to send. Please try again.');
window.location.href='contact.html';
</script>";
}
?>