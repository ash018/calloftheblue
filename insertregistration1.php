<?php
	ob_start();
	include("db.php");
	if(!empty($_FILES["imgFile"]["name"])){
		//echo 'imgFile';
		//print_r($_FILES["imgFile"]["name"]);
		move_uploaded_file($_FILES["imgFile"]["tmp_name"],"uploaded_image/" . $_FILES["imgFile"]["name"]);
		$file_imgFile="uploaded_image/".$_FILES["imgFile"]["name"];
	}else{
		$file_imgFile = '';
	}
	if(!empty($_FILES["vidFile"]["name"])){
		//echo 'vidFile';
		//print_r($_FILES["vidFile"]["name"]);
		move_uploaded_file($_FILES["vidFile"]["tmp_name"],"uploaded_image/" . $_FILES["vidFile"]["name"]);
		$file_vidFile="uploaded_image/".$_FILES["vidFile"]["name"];
	}else{
		$file_vidFile = '';
	}
	//exit();
	// Escape user inputs for security, first table
	$name = mysqli_real_escape_string($link, $_POST['name']);
	$lastname = mysqli_real_escape_string($link, $_POST['lastname']);
	$email = mysqli_real_escape_string($link, $_POST['email']);
	$mobileNo = mysqli_real_escape_string($link, $_POST['mobileNo']);
	$mobOtp = mysqli_real_escape_string($link, $_POST['mobOtp']);
	$city = mysqli_real_escape_string($link, $_POST['city']);
	
	
	$comment = mysqli_real_escape_string($link, $_POST['comment']);
	$contestName = mysqli_real_escape_string($link, $_POST['contestName']);
	$contestType = mysqli_real_escape_string($link, $_POST['contestType']);
	$AJAX = mysqli_real_escape_string($link, $_POST['AJAX']);
	$fileType = mysqli_real_escape_string($link, $_POST['fileType']);
	$verifiedmobileNo = mysqli_real_escape_string($link, $_POST['verifiedmobileNo']);
	$formType = mysqli_real_escape_string($link, $_POST['formType']);
	
	//if ($_FILES["image"]["error"] > 0){
	//if(isset($_FILES['image']) > 0){
	

		
		
		
		
		
		$sql = "INSERT INTO `yamahabd_preorder`.`registration01` 
				(`ID`, `name`, `lastname`, `email`, `mobileNo`, `mobOtp`, `city`, `vidFile`, `imgFile`, `comment`, `contestName`, `contestType`, 
					`AJAX`, `fileType`, `verifiedmobileNo`, `formType`) 
					VALUES (NULL, '$name', '$lastname', '$email', '$mobileNo', '$mobOtp', '$city', '$file_vidFile', '$file_imgFile', 
					'$comment', '$contestName', '$contestType', '$AJAX', '$fileType', '$verifiedmobileNo', '$formType')";
		
		if(mysqli_query($link, $sql)){
/*
			$msg="Successfully Inserted!!";

			echo "<script type='text/javascript'>

				alert('$msg');

				window.location = 'index.php';

			</script>";
*/
		}else{

			echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);

		}

   

	// close connection
	mysqli_close($link);

?>