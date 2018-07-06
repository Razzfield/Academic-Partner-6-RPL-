<?php
    include 'config.php';
    
    $postdata = file_get_contents("php://input");

    $password="";
    $newpassword="";
    $confirmnewpassword="";  
    $nama_lengkap="";
    $tanggal_lahir="";
    $id_line="";
    $nomor_hp="";
    $nim="";
    $jurusan="";
    $fakultas="";
    $angkatan="";
    $minat="";
    $id_mahasiswa = $_GET['id'];
    if (isset($postdata)) {
          $request = json_decode($postdata);
          $password = $request->password;
          $newpassword = $request->newpassword;
          $confirmednewpassword = $request->confirmednewpassword;
          $nama_lengkap = $request->nama_lengkap;
          $tanggal_lahir = $request->tanggal_lahir;
          $id_line = $request->id_line;
          $nomor_hp = $request->nomor_hp;
          $nim = $request->nim;
          $jurusan = $request->jurusan;
          $fakultas = $request->fakultas;
          $angkatan = $request->angkatan;
          $minat = $request->minat;
    }
    $encrypt_password = md5($password);
    $enc_newpass = md5($newpassword);
    $enc_confnewpass = md5($confirmednewpassword);

    $query_vali = mysqli_query($conn, "SELECT nama_lengkap FROM user_mahasiswa WHERE id_mahasiswa='$id_mahasiswa' AND password ='$encrypt_password' ");
    if(mysqli_num_rows($query_vali)){
        $query_old = mysqli_query($conn, "SELECT nim FROM user_mahasiswa WHERE id_mahasiswa='$id_mahasiswa' ");
        $dt=mysqli_fetch_assoc($query_old);
        $old_nim = $dt['nim'];
        if($newpassword == $confirmednewpassword) {
            if($request){
                 $query_check = mysqli_query($conn,"SELECT nama_lengkap FROM user_mahasiswa WHERE email='$email'");
                 if(mysqli_num_rows($query_check) && $nim!=$old_nim){
                     $data = array(
                     'message' => "NIM Already Exist!",
                     'status' => "405"
                );
            }
            else{ //kalo berhasil mengubah profile
                $query_register = mysqli_query($conn, "UPDATE user_mahasiswa SET password='$enc_newpass',nama_lengkap='$nama_lengkap',tanggal_lahir='$tanggal_lahir', id_line ='$id_line', nomor_hp='$nomor_hp', nim='$nim', jurusan='$jurusan', fakultas='$fakultas', angkatan='$angkatan', minat='$minat' ");
                $query_login = mysqli_query($conn, "SELECT * FROM user_mahasiswa WHERE id_mahasiswa = '$id_mahasiswa' ");
                if($query_register){
                    $row=mysqli_fetch_assoc($query_login);
                    $data =array(
                        'message' => "Profile Succesfully changed!",
                        'data'=>$row,
                        'status' => "200"
                    );
                }
                else{ // gagal mengubah
                    $data =array(
                        'message' => "Failed!",
                        'status' => "404"
                    );
                }
            } // checked for suskses ubah profile
        }
        // checked for ada data yang kosong
        else{ // ada data yang kosong
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }
    } 
    //checked for cek kesamaan password baru
    else{
        $data=array(
            'message' => "New Password Are Not Match!",
            'status' => "455"
        );
    }
} 

    else{ // password salah
        $data =array(
                'message' => "Wrong Password!",
                'status' => "401"
            );
    }
?>