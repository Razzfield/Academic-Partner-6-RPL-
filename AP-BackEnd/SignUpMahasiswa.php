<?php
    include 'config.php';
      $postdata = file_get_contents("php://input");
        $email="";
        $password="";  
        $nama_lengkap="";
        $id_line="";
        $nomor_hp="";
        $nim="";
        $jurusan="";
        $fakultas="";
        $angkatan="";
      if (isset($postdata)) {
          $request = json_decode($postdata);
          $email = $request->email;
          $password = $request->password;
          $nama_lengkap = $request->nama_lengkap;
          $tanggal_lahir = $request->tanggal_lahir;
          $id_line = $request->id_line;
          $nomor_hp = $request->nomor_hp;
          $nim = $request->nim;
          $jurusan = $request->jurusan;
          $fakultas = $request->fakultas;
          $angkatan = $request->angkatan;
      }
      $encrypt_password = md5($password);
      $sql = mysqli_query($conn,"INSERT INTO user_mahasiswa (email,password,nama_lengkap,tanggal_lahir, id_line, nomor_hp, nim, jurusan, fakultas, angkatan)
      VALUES ('$email','$encrypt_password','$nama_lengkap','$tanggal_lahir','$id_line','$nomor_hp','$nim','$jurusan','$fakultas','$angkatan')");
  if($sql){
      $getUserSql=mysqli_query($conn, "SELECT * from user_mahasiswa WHERE username='$username' AND password = '$encrypt_password'");
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