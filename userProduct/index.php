<?php  
    session_start();
    //Nếu chưa đăng nhập -> Chuyển tới trang Login
    if(!isset($_SESSION['mySession']))
    {
        header('location:../user/loginUser.php');
    }

?>

<h1>TRANG CHU
<a href="../user/logout.php">
<button type="submit" name="logout">DANG XUAT</button>
</a>
</h1>


<!--Chức năng tìm kiếm-->
<form method="post">
    <input type="text" name="productname">
    <button type="submit" name="search">Tim kiem</button>
</form>

<?php
    include "../database/conn.php";

    if(isset($_POST['search'])) {
       $productname = $_POST['productname'];
    }
    else {
        echo $productname = false;
    }

    $sql = "SELECT * FROM sanpham WHERE TenSP LIKE '%$productname%' ";

    $result = mysqLi_query($conn,$sql);

    while($row = mysqLi_fetch_array($result)) 
    { ?>
       <h1><?php echo $row['TenSP']; ?></h1>

    <?php 
    } ?>