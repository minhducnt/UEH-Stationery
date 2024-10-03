<?php
    // Kết nối tới cơ sở dữ liệu
     include "../database/conn.php";

     $MaSP = $_GET['MaSP'];
    // Thực hiện truy vấn
     $getdetail = "SELECT TenSP, MaSP, Mota FROM sanpham WHERE MaSP = '$MaSP' ";

     $truyvan = mysqLi_query($conn,$getdetail);
    // Kiểm tra xem truy vấn có trả về kết quả không
     if ($truyvan && mysqli_num_rows($truyvan) > 0) {
        // Lấy chi tiết sản phẩm
        $row = mysqli_fetch_assoc($truyvan);
        $TenSP = $row['TenSP'];
        $MaSP = $row['MaSP'];
        $Mota = $row['Mota'];

        // Hiện chi tiết sản phẩm
        echo "Product Name: " . $TenSP . "<br>";
        echo "Product ID: " . $MaSP . "<br>";
        echo "Description: " . $Mota . "<br>";
    } else {
        // Nếu không có chi tiết sản phẩm
        echo "Chi tiết sản phẩm này không khả dụng";
    }

     //Lấy bình luận
    // Thực hiện truy vấn, nối bảng danhgia, sanpham, thanhvien
     $sql = "SELECT TenTV, Binhluan
     FROM danhgia INNER JOIN sanpham INNER JOIN thanhvien
     ON danhgia.MaSP = sanpham.MaSP AND danhgia.MaTV = thanhvien.MaTV
     WHERE TenSP LIKE '%$TenSP%' ";

     $result = mysqLi_query($conn,$sql);

     while($row = mysqLi_fetch_array($result)){
        echo "<br>";
        echo $row['TenTV'];
        echo "<br>";
        echo $row['Binhluan'];
     }

?>
 