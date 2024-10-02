<?php
     include "../database/conn.php";

     if (isset($_POST['signup']))
     {
        $str = rand();
        $userID = md5($str); 
        $accountID = md5($str); 
        $fullname = $_POST['fullname'];
        $email = $_POST['email'];
        $username = $_POST['username'];
        $password = $_POST['password'];
        $address = $_POST['address'];
        $gender = $_POST['gender'];
        $phone = $_POST['phone'];
        $roleID = 1;
        $level = "Đồng";

      //Thêm dữ liệu đã nhập vào bảng taikhoan
        $sql1 = " INSERT INTO taikhoan (MaTK,TenDangNhap,MatKhau,RoleID)
        VALUES('$accountID','$username','$password','$roleID'); ";

      //Thêm dữ liệu đã nhập vào bảng thanhvien
        $sql2 = " INSERT INTO thanhvien (MaTV,MaTK,TenTV,Email,Diachi,Gioitinh,SDT,Hang)
        VALUES('$userID','$accountID','$fullname','$email','$address','$gender','$phone','$level'); ";
        
        mysqLi_query($conn, $sql1) && mysqLi_query($conn, $sql2);

        header('location:../user/loginUser.php');
     }
    ?>

<form action="signup.php" method="post">

<label>Ho va ten</label>
<input type="text" name="fullname">

<label>Email</label>
<input type="text" name="email">

<label>Username</label> 
<input type="text" name="username">

<label>Mat khau</label>
<input type="text" name="password">

<label>Dia chi nha</label>
<input type="text" name="address">

<label>So dien thoai</label>
<input type="text" name="phone">

<label>Nam</label>
<input type="radio" name="gender" value="Nam">
<label>Nữ</label>
<input type="radio" name="gender" value="Nữ">

<button type="submit" name="signup">Dang Ky</button>

</form>



<?php
?>