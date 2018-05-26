<?php
    $postdata = file_get_contents("php://input");

    $email="";
    $password="";  
    $nama_lengkap="";
    $tanggal_lahir="";
    $id_line="";
    $nomor_hp="";
    $nim="";
    $jurusan="";
    $fakultas="";
    $angkatan="";
    $minat="";
    $id = $_GET['id'];
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
          $minat = $request->minat;
    }
    $check_password = md5($password);
    $query_vali = mysqli_query($connect, "SELECT name FROM user_mahasiswa WHERE id='$id' AND password ='$check_password' ");
    if(mysqli_num_rows($query_vali)){
        $query_old = mysqli_query($connect, "SELECT email FROM user_mahasiswa WHERE id='$id' ");
        $dt=mysqli_fetch_assoc($query_old);
        $old_email = $dt['email'];
        if($request){
            $query_check = mysqli_query($connect,"SELECT name FROM user_mahasiswa WHERE email='$email' ");
            if(mysqli_num_rows($query_check) && $email!=$old_email){
                $data = array(
                    'message' => "Email Exist!",
                    'status' => "405"
                );
            }
            else{
                $query_register = mysqli_query($connect, "UPDATE user_mahasiswa SET email='$email',password='$check_password',nama_lengkap='$nama_lengkap',tanggal_lahir='$tanggal_lahir', id_line ='$id_line', nomor_hp='$nomor_hp', nim='$nim', jurusan='$jurusan', fakultas='$fakultas', angkatan='$angkatan', minat='$minat' ");
                $query_login = mysqli_query($connect, "SELECT * FROM user_mahasiswa WHERE id = '$id' ");
                if($query_register){
                    $row=mysqli_fetch_assoc($query_login);
                    $data =array(
                        'message' => "Profile Succesfully changed!",
                        'data'=>$row,
                        'status' => "200"
                    );
                }
                else{
                    $data =array(
                        'message' => "Failed!",
                        'status' => "404"
                    );
                }
            }
        }
        else{
            $data =array(
                'message' => "No Data!",
                'status' => "503"
            );
        }
    }
    else{
        $data =array(
                'message' => "Wrong Password!",
                'status' => "401"
            );
    }
?>