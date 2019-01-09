<?php
	ob_start();
	include("db.php");
	
	// Escape user inputs for security, first table
	$nameTrack = mysqli_real_escape_string($link, $_POST['nameTrack']);
	$lastnameTrack = mysqli_real_escape_string($link, $_POST['lastnameTrack']);
	$cityTrack = mysqli_real_escape_string($link, $_POST['cityTrack']);
	$emailTrack = mysqli_real_escape_string($link, $_POST['emailTrack']);
	$mobileNoTrack = mysqli_real_escape_string($link, $_POST['mobileNoTrack']);
	$sendmobOtpTrack = mysqli_real_escape_string($link, $_POST['sendmobOtpTrack']);
	$mobOtpTrack = mysqli_real_escape_string($link, $_POST['mobOtpTrack']);
	$verifymobOtpTrack = mysqli_real_escape_string($link, $_POST['verifymobOtpTrack']);
	$owner = mysqli_real_escape_string($link, $_POST['owner']);
	$verifiedmobileNoTrack = mysqli_real_escape_string($link, $_POST['verifiedmobileNoTrack']);
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