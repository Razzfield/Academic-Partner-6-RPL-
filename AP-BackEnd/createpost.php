<?php
  include 'config.php';
    $postdata = file_get_contents("php://input");
    $judul="";
    $kategori="";
    $post="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $judul = $request->judul;
        $kategori = $request->kategori;
        $post = $request->post;
    }
    
    $querypost = mysqli_query($conn,"INSERT INTO forum (judul,kategori,post) VALUES('$judul','$kategori','$post')");
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