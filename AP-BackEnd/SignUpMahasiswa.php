<?php
    include 'config.php';
      $postdata = file_get_contents("php://input");
        $nama_lengkap="";
        $id_line="";
        $nomor_hp="";
        $nim="";
        $jurusan="";
        $fakultas="";
        $angkatan="";
        $email="";
        $password="";
        $tertarik_pada_lomba="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $nama_lengkap = $request->nama_lengkap;
          $id_line = $request->id_line;
          $nomor_hp = $request->nomor_hp;
          $nim = $request->nim;
          $jurusan = $request->jurusan;
          $fakultas = $request->fakultas;
          $angkatan = $request->angkatan;
          $email = $request->email;
          $password = $request->password;
          $tertarik_pada_lomba = $request->tertarik_pada_lomba;
         
      }
      $encrypt_password = md5($password);
      $sql = mysqli_query($conn,"INSERT INTO user (nama_lengkap, id_line, nomor_hp, nim, jurusan, fakultas, angkatan, email, password, tertarik_pada_lomba)
      VALUES ('$nama_lengkap','$id_line', '$nomor_hp','$nim','$jurusan','$fakultas','$angkatan','$email','$encrypt_password','$tertarik_pada_lomba')");
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