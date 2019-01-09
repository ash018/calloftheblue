<?php 
	$link = mysqli_connect("localhost", "yamahabd_preorde", "aci123456", "yamahabd_preorder");
	
	// Check connection
	if($link === false){
		die("ERROR: Could not connect. " . mysqli_connect_error());
	}

 ?>