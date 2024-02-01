<?php

$host = "localhost";
$user = "root";
$pass = "";
$db = "db_coffinmedia";

$koneksi = mysqli_connect($host,$user,$pass) or die("Koneksi Gagal !");
mysqli_select_db($koneksi,$db);

?>