<?php
session_start();
$webAPI = "http://localhost:8080";
if ($_POST) {
    if (isset($_POST) && !empty($_POST)) {
        if (isset($_POST["portal"]) && !empty($_POST["portal"])) {
            if ($_POST["portal"] == "login") {

                    $posturl = $webAPI . "/sspv1.o/ssp/users/webauthenticate";
                    $authorizationHeaderVal = "Basic_" . $_POST["passVal"];
                    $_SESSION["authSessToken"] = $_POST["passVal"];

                    $ch = curl_init();
                    $headers  = [
                        'Content-Type: text/plain',
                        'Authorization:'.$authorizationHeaderVal
                    ];
                    $curlConfig = array(
                        CURLOPT_URL            => $posturl,
                        CURLOPT_CUSTOMREQUEST  => 'POST',
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_HTTPHEADER => $headers,
                        CURLOPT_HTTPAUTH => CURLAUTH_BASIC
                    );
                    curl_setopt_array($ch, $curlConfig);
                    $result = curl_exec($ch);
                    $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
                    $headerRes = curl_setopt($ch, CURLOPT_HEADER, 1);
                    $header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
                    $header = substr($result, 0, $header_size);
                    $body = substr($result, $header_size);
                    curl_close($ch);
                    $return_msg = '';
                    $result = json_decode($result,true);



                    $urlAddress = "welcome";


                    if ($result["userSerialId"] != "") {
                        $_SESSION["authenticate"] = true;
                        $_SESSION["userId"] = $result["userId"];
                        $_SESSION["userSerialId"] = $result["userSerialId"];
                        $_SESSION["userFirstName"] = $result["userFirstName"];
                        $_SESSION["userlastName"] = $result["userlastName"];
                        $_SESSION["roleName"] = $result["roleName"];
                        $_SESSION["userEmailId"] = $result["userEmailId"];



                        $_SESSION["login_information"] = $result;
                        $_SESSION["route_souvenir"] = $result["rememberToken"];

                        $return_msg = [
                            "status" => "success",
                            "userId" => $result["userId"],
                            "userSerialId" => $result["userSerialId"],
                            "userFirstName" => $result["userFirstName"],
                            "userlastName" => $result["userlastName"],
                            "userEmailId" => $result["userEmailId"],
                            "user_roles" => $result["roleName"],
                            "user_role_id" => $result["roleId"],
                            "message" => "login Success!"
                        ];


                    }else {
                        $return_msg = [
                            "status" => "error",
                            "message" => "login failed!",
                        ];
                    }

                    echo json_encode($return_msg);
                    exit();

            }else if ($_POST["portal"] == "logout") {

                    $posturl = $webAPI . "/sspv1.o/ssp/users/signout";
                    $authorizationHeaderVal = "Basic_" . $_SESSION["route_souvenir"];

                    $ch = curl_init();
                    $headers  = [
                        'Content-Type: text/plain',
                        'Authorization:'.$authorizationHeaderVal
                    ];
                    $curlConfig = array(
                        CURLOPT_URL            => $posturl,
                        CURLOPT_CUSTOMREQUEST  => 'POST',
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_HTTPHEADER => $headers,
                        CURLOPT_HTTPAUTH => CURLAUTH_BASIC
                    );
                    curl_setopt_array($ch, $curlConfig);
                    $result = curl_exec($ch);

                    $_SESSION["authenticate"] = false;
                    $_SESSION["userId"] = '';
                    $_SESSION["login_information"] = '';
                    $_SESSION["route_souvenir"] = '';

                    session_unset();
                    session_destroy();
                    $return_msg = [
                        "status" => "success"
                    ];


                    echo json_encode($return_msg);
                    exit();

            }
        }
    }
}

?>
