<?php  
    include "../database/conn.php";

    $sql = " SELECT * FROM loaisanpham";

    $result = mysqLi_query($conn , $sql);

    echo mysqLi_num_rows($result);

    if (mysqLi_num_rows($result) > 0)
    {
        while($row = mysqLi_fetch_array($result))
        {
            echo $row['Maloai'] . $row['TenLoai'];
            echo '<br>';
        }
    }
?>
