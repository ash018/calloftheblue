<?php
	ob_start();
	include("db.php");
	//print_r($_POST);exit();
	// Escape user inputs for security, first table
	$type = strtolower($_POST['type']);
	$otp = mysqli_real_escape_string($link, $_POST['otp']);
	$receipient = mysqli_real_escape_string($link, $_POST['receipient']);
	$AJAX = mysqli_real_escape_string($link, $_POST['AJAX']);
	//$six_digit_random_number = mt_rand(1000, 9999);

		$sql = "SELECT * FROM mobileno WHERE  mobileno = '$receipient' AND otp = '$otp'";
		
		$result = $link->query($sql);
			
		if ($result->num_rows > 0) {
			//echo $result->num_rows;
			echo "valid";
			
		} else {
			echo "invalid";
		}
	// close connection
	mysqli_close($link);

?>