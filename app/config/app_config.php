<?php
$configurations = [
    "app_title" => "detasad",

    "app_conn_env" => "development",
    //'app_conn_env' => 'production',

    "app_conn" => [
        "development" => [
            "pages" => [
                
            ],
            "psqldb" => [
               
            ],

            "influxdb" => [
                
            ],

            "elasticSearch" => [
                
            ],

            "redis" => [
                
            ],

            "webServices" => [
                "127.0.0.1:9996",
                "127.0.0.1:8080",
                "127.0.0.1:6699"
            ],
        ],

        "production" => [
            "pages" => [
                
            ],
            "psqldb" => [
               
            ],

            "influxdb" => [
                
            ],

            "elasticSearch" => [
                
            ],

            "redis" => [
                
            ],

            "webServices" => [
                "127.0.0.1:9996",
                "127.0.0.1:8080",
                "127.0.0.1:6699"
            ],
        ],
    ],
];

?>
