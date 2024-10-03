<?php  
   include "../database/conn.php";

    session_start();

    if (isset($_SESSION['mySession'])){
        header("location:../userProduct/index.php");
    }

    if(isset($_POST['login'])){
        $username = $_POST['username'];
        $password = $_POST['password'];

        $sql = "SELECT * FROM taikhoan WHERE 
        TenDangNhap = '$username' and MatKhau ='$password' ";

        $result = mysqLi_query($conn, $sql);

        if(mysqLi_num_rows($result) == 1)
        {
            $_SESSION['mySession'] = $username;
            header("location:../userProduct/index.php"); //Nếu đăng nhập thành công -> Chuyển đến trang index
        }
        else{
            echo "Tài khoản hoặc mật khẩu sai";
        }
    }
?>


<form action="loginUser.php" method="post">

<label>User Name</label>
<input type="text" name="username">

<label>Mat Khau</label>
<input type="text" name="password">

<button type="submit" name="login">Dang Nhap</button>
<button type="submit" name="signup"><a href="../user/signup.php">Dang Ky</a></button>

</form>



