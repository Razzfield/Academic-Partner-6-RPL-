<?php
	include 'config.php';

    $id = $_GET['id'];
	$q = mysqli_query($connect,"SELECT nama,nim,jurusan,angkatan,minata FROM user_mahasiswa where id = $id");
	
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