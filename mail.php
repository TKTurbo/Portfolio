<?php

$to = "t.kreder@student.alfa-college.nl";
$subject = "Bericht van TKTurbo.nl";
$headers = "Van: webmaster@tkturbo.nl" . "\r\n" .

$message = " Voornaam: " . $_POST['Voornaam'];
$message .= "\r\n Achternaam: " . $_POST['Achternaam'];
$message .= "\r\n E-mail:" . $_POST['E-mail'];
$message .= "\r\n Nieuwsbrief: " . $_POST['Nieuwsbrief'];
$message .= "\r\n\r\n Bericht: \r\n" . $_POST['Bericht'];

if(mail($to, $subject, $message)){
	echo "<script type='text/javascript'>alert('Mail verzonden!');</script>";
} else {
	echo "<script type='text/javascript'>alert('Mail NIET verzonden, contacteer t.kreder@student.alfa-college.nl als dit blijft gebeuren.');</script>";
}

?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <title>Contact - Portfolio Thomas Kreder</title>
    <meta charset="UTF-8">
    <meta content="noindex" name="robots">
    <link href="styles.css" rel="stylesheet">
    <script src="functions.js"></script>
    <meta content="width=device-width" name="viewport">
    <link href="images/logo.png" rel="icon">
    <meta content="Thomas Kreder" name="author">
    <meta content="Portfolio, opdracht AO" name="description">
    <style>
    #containercontact{
        text-align: center;
    }
    </style>
</head>
<body>
<header>
    <div class="topnav">
        <a href="index.html">Home</a>
        <a href="informatie.html">Informatie</a>
        <a href="contact.html" style="text-decoration: underline;">Contact</a>
        <div class="gegevens">
            <h3>Thomas Kreder</h3>
            <h3>ITB4-1B</h3>
        </div>
        <div href="javascript:void(0);" id="navbox" onclick="hamBurger()"></div>
        <span></span>
        <span></span>
        <span></span>
        <div id="mobnavfiller"></div>
        <div id="mobnavfiller2"></div>
        <div id="mobileLinks">
            <div id="containerkeepleft">
                <a href="index.html" id="homelink">Home</a>
                <a href="informatie.html" id="infolink">Info</a>
                <a href="contact.html" id="contactlink">Contact</a>
            </div>
        </div>
    </div>
</header>
<div id="containercontact" style="font-size: 30px;">
    Bedankt!
</div>
<div id="filler"></div>
<footer>
    <div class="links">
        <a href="https://www.linkedin.com/in/thomas-kreder/"><img id="linkedin" src="images/linkedin.png" alt="LinkedIn"></></a>
    </div>
</footer>
</body>
</html>