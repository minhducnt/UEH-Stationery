<?php
  include "../database/conn.php";

 $sql = " SELECT * FROM sanpham";

 $result = mysqLi_query($conn , $sql);

     while($row = mysqLi_fetch_array($result))
     {
        
    
?>
    <br>

    <a href="../userProduct/chitietsanpham.php?MaSP=<?php echo $row['MaSP']; ?>">
        <?php echo $row['TenSP']; ?>
    </a>
<br>
    <tr>
        <td><?php echo $row['MaSP'] ?></td>
        <td><?php echo $row['TenSP'] ?></td>
        <td><?php echo $row['MaSP'] ?></td>
        <td><?php echo $row['Maloai'] ?></td>
        <td><?php echo $row['Giaban'] ?></td>
        <td><img scr="" alt= ""><?php echo $row['Hinhanh']?></td>

    </tr>
<?php } ?>
