<?php
	ob_start();
	include("db.php");
	//print_r($_POST);//exit();
	// Escape user inputs for security, first table
	$type = strtolower($_POST['type']);
	$receipient = mysqli_real_escape_string($link, $_POST['receipient']);
	$AJAX = mysqli_real_escape_string($link, $_POST['AJAX']);
	$six_digit_random_number = mt_rand(1000, 9999);

		echo $sql = "INSERT INTO mobileno
					VALUES (NULL, '$receipient', '$six_digit_random_number',NOW())";
		
		if(mysqli_query($link, $sql)){
			
			//$mobile = implode(',',$data['mobile'][$i]);
			//echo $mobile;
			$smsUrl = "http://192.168.100.213/httpapi/sendsms?userId=motors&password=Asdf1234&smsText=".urlencode($six_digit_random_number)."&commaSeperatedReceiverNumbers=".$receipient;
			$response = file_get_contents($smsUrl);
			//echo $response;
			echo "valid";


			//$msg="Successfully Inserted!!";

			/*echo "<script type='text/javascript'>

				alert('$msg');

				window.location = 'index.php';

			</script>";*/

		}else{
			echo "invalid";
			//echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

		}


	// close connection
	mysqli_close($link);

?>