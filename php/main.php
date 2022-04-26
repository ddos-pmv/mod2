<?php 
ini_set("display_errors", 1); 
session_start();
try {
    $db = new PDO("mysql:host=localhost;dbname=ifcspdmd_m4", 'ifcspdmd', '5F6tV5',array(
        PDO::ATTR_DEFAULT_FETCH_MODE =>PDO::FETCH_ASSOC,
        PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', //after php5.3.6
    ));
    //$p->exec('SET NAMES utf8');
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
    function login($name, $pass,$db) {
        $sql = "SELECT `id`, `name`, `role` FROM `users` WHERE  `name` = ? AND `pass` = ?";
        $stmt = $db->prepare($sql);
        $stmt->execute(array(htmlspecialchars($name), htmlspecialchars(md5($pass))));
        $res = $stmt->fetch(); 
        if (!empty($res['name'])){
            $_SESSION=[
                'name' => $res['name'] , 
                'role'=>$res['role']
            ];
           print_r($_SESSION);
            $_SESSION['error']= null;
        }
        else{
            $_SESSION['error']='log/pass err';
            $_SESSION['error'];
        }
       

    }
    if (isset($_POST['sub'])) {
        $_SESSION['error'] = 'registrating';
        // echo $_SESSION['error'];

        login($_POST['name'], $_POST['pass'],$db);
    }
    else{
        $_SESSION['error']='not approached';
        echo $_SESSION['error'];
    }
?>