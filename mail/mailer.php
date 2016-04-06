<?php
    $subject = '';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['name'])) {
        $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
        $mess .= '<b>Имя отправителя:</b>' . $name . '<br>';
    }
    if(isset($_POST['email'])) {
        $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
        $mess .= '<b>E-mail:</b>' . $email . '<br>';
    }
    if(isset($_POST['phone'])) {
        $phone = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
        $mess .= '<b>Телефон:</b>' . $phone . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('ofisnyj-pereezd@mail.ru','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    if(isset($_FILES['file'])) {
            if($_FILES['file']['error'] == 0){
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }

?>