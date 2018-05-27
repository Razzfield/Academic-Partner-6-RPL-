<?php
	include 'config.php';

    $id = $_GET['id'];
	$q = mysqli_query($conn,"SELECT * FROM user_mahasiswa WHERE id_mahasiswa = '$id'");
	
	while($result=mysqli_fetch_assoc($q)){
		$result_set[]=$result;
	}

	$data=array(
		'message'=>'Get Profile Success',
		'data'=>$result_set,
		'status'=>'200'
	);
	echo json_encode($data);
?>