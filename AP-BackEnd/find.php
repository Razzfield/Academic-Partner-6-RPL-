<?php
    include 'config.php'

    $user_id = $_GET['user_id']

    //Input minat/dept
    $partner = file_get_contents("php://input");
    $request = json_decode($partner);

    if($partner = "Departemen"){
        $jurusan = $request->jurusan;
        $jurusan0 = mysqli_query($connect,"SELECT jurusan FROM user_mahasiswa WHERE id = '$user_id' ");
        
        $query_teman=mysqli_query($connect,"SELECT nama_lengkap, id_line, nomor_hp, minat, jurusan, angkatan FROM user_mahasiswa where jurusan = '$jurusan0' "); 
        while($result=mysqli_fetch_assoc($query_teman)){
            $result_set[]=$result;
            $data=array(
                'data'=>$result,
                'status'=>'200'
            );
        }  
    }
    else if($partner = "Minat"){
        $minat = $request->minat;
        $minat0 = mysqli_query($connect,"SELECT minat FROM user_mahasiswa WHERE id = '$user_id' ");
        
        $query_teman=mysqli_query($connect,"SELECT nama_lengka, id_line, nomor_hp, minat, fakultas, angkatan FROM user_mahasiswa where minat = '$minat0' "); 
        while($result=mysqli_fetch_assoc($query_teman)){
            $result_set[]=$result;
            $data=array(
                'data'=>$result,
                'status'=>'200'
            );
        }  
    }
    else{
        $query_teman=mysqli_query($connect,"SELECT nama_lengkap, id_line, nomor_hp, minat, fakultas, angkatan FROM user_mahasiswa ");
        while($result=mysqli_fetch_assoc($query_teman)){
            $data=array(
                'data'=>$result,
                'status'=>'200'
            )
        }
    }
?>