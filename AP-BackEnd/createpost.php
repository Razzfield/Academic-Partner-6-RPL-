<?php
  include 'config.php';
    $postdata = file_get_contents("php://input");
    $judul="";
    $post="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $judul = $request->judul;
        $post = $request->post;
    }
    
    $querypost = mysqli_query($conn,"INSERT INTO forum (judul,post) VALUES('$judul','$post')");
    if($querypost)
    $getquerypost=mysqli_query($conn, "SELECT * from forum");
    if(mysqli_num_rows($getquerypost)){
        $row=mysqli_fetch_assoc($getquerypost);
        $data =array(
            'message' => "Thread berhasil dibuat",
            'data' => $row,
            'status' => "200"
        );
    }
    else{
        $data =array(
            'message' => "Gagal membuat thread.",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>