<?php
    include 'config.php';
      $postdata = file_get_contents("php://input");
        $nama_lengkap="";
        $nomor_hp="";
        $jurusan="";
        $fakultas="";
        $angkatan="";
        $email="";
        $password="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $nama_lengkap = $request->nama_lengkap;
          $nomor_hp = $request->nomor_hp;
          $jurusan = $request->jurusan;
          $fakultas = $request->fakultas;
          $angkatan = $request->angkatan;
          $email = $request->email;
          $password = $request->password;
      }
      $encrypt_password = md5($password);
      $sql = mysqli_query($conn,"INSERT INTO user (nama_lengkap, nomor_hp, jurusan, fakultas, angkatan, email, password)
      VALUES ('$nama_lengkap', '$nomor_hp','$jurusan','$fakultas','$angkatan','$email','$encrypt_password')");
  if($sql){
      $getUserSql=mysqli_query($conn, "SELECT * from user WHERE username='$username' AND password = '$encrypt_password'");
      if (mysqli_num_rows($getUserSql)) {
        $row = mysqli_fetch_assoc($getUserSql);
        $data =array(
            'message' => "Data have been recorded",
            'data' => $row,
            'status' => "200"
        );
      }
      else{
        $data =array(
            'message' => "ERROR",
            'status' => "404"
        );
      }
  }
 else {
    $data =array(
        'message' => "ERROR",
        'status' => "404"
    );
  }
  echo json_encode($data);
?>