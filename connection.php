<?php
	$localhost = 'localhost';
	$user = 'root';
	$pwd = '';
	
	//get connection
	$con = mysqli_connect($localhost,$user,$pwd);
	
	if(!$con){
		die('Cannot connect the mysql server'.mysqli_error($con));
	}
?>