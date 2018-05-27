<?php
    include 'config.php';

    $query_post = mysqli_query($conn, "SELECT judul,post FROM forum");
    $result_set = array();
    while($result =mysqli_fetch_assoc($query_post)){
        $result_set[]=$result;
    }
    $data =array(
        'message' => "Get Record Post Succses",
        'data' => $result_set,
        'status' => "200"
      );
      echo json_encode($data);
?>