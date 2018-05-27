<?php
    include 'config.php';

    $id = $_GET['id'];
    $query_cek = mysqli_query($conn, "SELECT * FROM forum where id='$id'");

    if($query_cek) {
        $query = mysqli_query($conn, "DELETE FROM forum where id='$id'");
        $data =array(
            'message' => "Post berhasil dihapus",
            'status' => "200"
        );
}
    else{
        $data =array(
            'message' => "Gagal menghapus post.",
            'status' => "404"
        );
    }
    echo json_encode($data);
?>