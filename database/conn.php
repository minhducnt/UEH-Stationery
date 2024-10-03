<?php

    $server = 'localhost';
    $user = 'root';
    $pass = '';
    $database = 'uehstationery';

    $conn = new mysqLi($server, $user, $pass, $database);

    if($conn){
        mysqLi_query($conn, "SET NAMES 'utf8' ");
        echo "Success";
        echo '<br>';
    }
    else{
        echo"Fail";
    }
?>
