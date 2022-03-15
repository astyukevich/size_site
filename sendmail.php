<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('info@size.by', 'SiZE.BY');
	//Кому отправить
	$mail->addAddress('astyukevichr@mail.ru');
	//Тема письма
	$mail->Subject = 'Новая заявка с сайта size.by"';

	

	//Тело письма
	$body = '<h1>Клиент заполнил бриф.</h1>';
	
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['tel']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
	}
	if(trim(!empty($_POST['nameCompany']))){
		$body.='<p><strong>Компания:</strong> '.$_POST['nameCompany'].'</p>';
	}
	
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}

	$checkbox = $_POST['services'];

	if(trim(!empty($_POST['services']))){
		$body.='<p><strong>Теги:</strong> ' . $checkbox .'</p>';
	}
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		 
		$message = 'Ошибка отправки данных. Пожалуйста, свяжитесь с нами по номеру телефона';
		
	} else {

		$message = 'Данные отправлены!';
		
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>