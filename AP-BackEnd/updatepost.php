<?php
  include 'config.php';
    $postdata = file_get_contents("php://input");
    $post="";
    $idp ="";
    if (isset($postdata)) {
        $request = json_decode($postdata);
        $post = $request->post;
        $idp = $request->idp;
    }
    $query_vali = mysqli_query($conn, "SELECT * FROM forum where id='$idp'");
    if($query_vali) {
    $queryup = mysqli_query($conn,"UPDATE forum SET post='$post' WHERE id = '$idp'");
    $query_acc = mysqli_query($conn, "SELECT * FROM forum WHERE id = '$idp' ");
        $row=mysqli_fetch_assoc($query_acc);
        $data =array(
            'message' => "Isi post berhasil diubah",
            'data' => $row,
            'status' => "200"
        );
}
    else{
        $data =array(
            'message' => "Gagal mengubah post.",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>