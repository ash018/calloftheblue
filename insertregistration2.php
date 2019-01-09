<?php
	ob_start();
	include("db.php");
	
	// Escape user inputs for security, first table
	$nameFame = mysqli_real_escape_string($link, $_POST['nameFame']);
	$lastnameFame = mysqli_real_escape_string($link, $_POST['lastnameFame']);
	$modelFame = mysqli_real_escape_string($link, $_POST['modelFame']);
	$yearFame = mysqli_real_escape_string($link, $_POST['yearFame']);
	$emailFame = mysqli_real_escape_string($link, $_POST['emailFame']);
	$cityFame = mysqli_real_escape_string($link, $_POST['cityFame']);
	$mobileNoFame = mysqli_real_escape_string($link, $_POST['mobileNoFame']);
	$sendmobOtpFame = mysqli_real_escape_string($link, $_POST['sendmobOtpFame']);
	$mobOtpFame = mysqli_real_escape_string($link, $_POST['mobOtpFame']);
	$verifymobOtpFame = mysqli_real_escape_string($link, $_POST['verifymobOtpFame']);
	$verifiedmobileNoFame = mysqli_real_escape_string($link, $_POST['verifiedmobileNoFame']);
	$formType = mysqli_real_escape_string($link, $_POST['formType']);

	
	//if ($_FILES["image"]["error"] > 0){
	//if(isset($_FILES['image']) > 0){
	if ($_FILES["image"]["error"] > 0){
		echo "<font size = '5'><font color=\"#e31919\">Error: NO CHOSEN FILE <br />";
		echo"<p><font size = '5'><font color=\"#e31919\">INSERT TO DATABASE FAILED";
	}else{
		move_uploaded_file($_FILES["image"]["tmp_name"],"logo/" . $_FILES["image"]["name"]);
		
		$file="logo/".$_FILES["image"]["name"];
		
		$sql = "INSERT INTO registration01 (ID, nameFame, lastnameFame, modelFame, yearFame, emailFame, city, vidFile, 
				imgFile, comment, contestName, AJAX, fileType, verifiedmobileNo, formType) 
			VALUES (null, '$nameFame', '$lastnameFame', '$modelFame', '$yearFame', '$mobOtp', '$city', '$vidFile', 
			'$imgFile', '$comment', '$contestName', '$AJAX', '$fileType', '$verifiedmobileNo', '$formType')";
		
		if(mysqli_query($link, $sql)){

			$msg="Successfully Inserted!!";

			echo "<script type='text/javascript'>

				alert('$msg');

				window.location = 'index.php';

			</script>";

		}else{

			echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

		}

   }

	// close connection
	mysqli_close($link);

?>