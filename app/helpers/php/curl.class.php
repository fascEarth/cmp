<?php
	class curlPHPhelp {
    public function __construct(){}
    public function curl_GET_UNIQUE($total_timing,$get_url,$data){
        $get_ch = curl_init();
        $get_headers  = [
            'Content-Type: application/json'
        ];
        $url = $get_url;
        if($data){
            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
        }

        $get_curlConfig = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $get_headers
        );
        curl_setopt_array($get_ch, $get_curlConfig);
        $result = curl_exec($get_ch);
        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
        curl_close($get_ch);
        $return_msg = '';

        if($statusCode == 200){
          $result = json_decode($result,true);

          if($result['status'] == '200'){
            if($result['message']['code'] == 6115){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
            }else{
              $return_msg = array(
                'status' => 'error',
                'code' => $result['message']['code']
              );
              //captureLog(json_encode($return_msg));
            }
            return $return_msg;
          }else if($result['status'] == '102' || $result['status'] == '400'){
            setInterval(function() use($total_timing,$get_url,$data,$result) {
              $total_timing++;
              if($total_timing <= 5 ){
                  $this->curl_GET_UNIQUE($total_timing,$get_url,$data);
              }else{
                $return_msg = array(
                  'status' => 'error',
                  'code' => $result['message']['code']
                );
                //captureLog(json_encode($return_msg));
                return $return_msg;
              }
            }, 2000);
          }else{
            $return_msg = array(
              'status' => 'error',
              'code' => $result['message']['code']
            );
            //captureLog(json_encode($return_msg));
            return $return_msg;
          }
        }else{
          $return_msg = array(
            'status' => 'error',
            'code' => $statusCode,
            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
          );
          //captureLog(json_encode($return_msg));
          return $return_msg;
        }

      }
    public function curl_GET_PHP($total_timing,$get_url,$data){
        $get_ch = curl_init();
        $get_headers  = [
            'Content-Type: application/json'
        ];
        $url = $get_url;
        if($data){
            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
        }

        $get_curlConfig = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $get_headers
        );
        curl_setopt_array($get_ch, $get_curlConfig);
        $result = curl_exec($get_ch);
        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
        curl_close($get_ch);
        $return_msg = '';

        if($statusCode == 200){
          $result = json_decode($result,true);

          if($result['status'] == '200'){
            if($result['message']['code'] == 6115){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
              }else if($result['message']['code'] == 6116){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
            }else{
              $return_msg = array(
                'status' => 'error',
                'code' => $result['message']['code']
              );
              //captureLog(json_encode($return_msg));
            }
            return $return_msg;
            }else if($result['status'] == '102' || $result['status'] == '400'){
            setInterval(function() use($total_timing,$get_url,$data,$result) {
              $total_timing++;
              if($total_timing <= 5 ){
                  $this->curl_GET_PHP($total_timing,$get_url,$data);
              }else{
                $return_msg = array(
                  'status' => 'error',
                  'code' => $result['message']['code']
                );
                //captureLog(json_encode($return_msg));
                return $return_msg;
              }
            }, 2000);
          }else{
            $return_msg = array(
              'status' => 'error',
              'code' => $result['message']['code']
            );
            //captureLog(json_encode($return_msg));
            return $return_msg;
          }
        }else{
          $return_msg = array(
            'status' => 'error',
            'code' => $statusCode,
            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
          );
          //captureLog(json_encode($return_msg));
          return $return_msg;
        }

      }
    public function curl_GET_syslogExporter($get_url,$data){
        $get_ch = curl_init();
        $get_headers  = [
            'Content-Type: application/json'
        ];
        $url = $get_url;
        if($data){
            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
        }

        $get_curlConfig = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $get_headers
        );
        curl_setopt_array($get_ch, $get_curlConfig);
        $result = curl_exec($get_ch);
        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
        curl_close($get_ch);
        $return_msg = '';
        
        if($statusCode == 200){
          $result = json_decode($result,true);

          if($result['status'] == '200'|| $result['status'] == '400'){
            if($result['message']['code'] == 6115){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
              }else if($result['message']['code'] == 6116){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
            }else if($result['message']['code'] == 6114){
            $return_msg = array(
              'status' => 'success',
              'code' => $result['message']['code'],
              'data' => $result['message']
            );
          }else{
              $return_msg = array(
                'status' => 'error',
                'code' => $result['message']['code']
              );
              //captureLog(json_encode($return_msg));
            }
            }else if($result['status'] == '102' ){
              $return_msg = array(
                'status' => 'error',
                'code' => $result['status'],
                'data' => 'Still In Process'
              );
          }else{
            $return_msg = array(
              'status' => 'error',
              'code' => $result['message']['code']
            );
            //captureLog(json_encode($return_msg));
          }
        }else{
          $return_msg = array(
            'status' => 'error',
            'code' => $statusCode,
            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
          );
          //captureLog(json_encode($return_msg));
        }
        return $return_msg;

      }
    public function curl_GET($total_timing,$get_url,$data){
        $get_ch = curl_init();
        $get_headers  = [
            'Content-Type: application/json'
        ];
        $url = $get_url;
        if($data){
            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
        }

        $get_curlConfig = array(
            CURLOPT_URL            => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_HTTPHEADER => $get_headers
        );
        curl_setopt_array($get_ch, $get_curlConfig);
        $result = curl_exec($get_ch);
        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
        curl_close($get_ch);
        $return_msg = '';

        if($statusCode == 200){
          $result = json_decode($result,true);

          if($result['status'] == '200'){
            if($result['message']['code'] == 6115){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
						}else if($result['message']['code'] == 6100){
							$return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
              }else if($result['message']['code'] == 6116){
              $return_msg = array(
                'status' => 'success',
                'code' => $result['message']['code'],
                'data' => $result['message']
              );
            }else{
              $return_msg = array(
                'status' => 'error',
                'code' => $result['message']['code']
              );
              //captureLog(json_encode($return_msg));
            }
            echo json_encode($return_msg);exit;
            }else if($result['status'] == '102' || $result['status'] == '400'){
            setInterval(function() use($total_timing,$get_url,$data,$result) {
              $total_timing++;
              if($total_timing <= 30 ){
                  $this->curl_GET($total_timing,$get_url,$data);
              }else{
                $return_msg = array(
                  'status' => 'error',
                  'code' => $result['message']['code']
                );
                //captureLog(json_encode($return_msg));
                echo json_encode($return_msg);exit;
              }
            }, 1000);
          }else{
            $return_msg = array(
              'status' => 'error',
              'code' => $result['message']['code']
            );
            //captureLog(json_encode($return_msg));
            echo json_encode($return_msg);exit;
          }
        }else{
          $return_msg = array(
            'status' => 'error',
            'code' => $statusCode,
            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
          );
          //captureLog(json_encode($return_msg));
          echo json_encode($return_msg);exit;
        }

      }
    public function curl_POST($url,$postfields){
        $ch = curl_init();
        $headers  = [
            'Content-Type: application/json'
        ];
        $curlConfig = array(
            CURLOPT_URL            => $url,
            CURLOPT_POST           => true,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_POSTFIELDS     => json_encode($postfields),
            CURLOPT_HTTPHEADER => $headers
        );
				
        curl_setopt_array($ch, $curlConfig);
        $result = curl_exec($ch);
        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        $return_msg = '';
        $result = json_decode($result,true);
        if($statusCode == 200){
          if(isset($result['message']['code'])){
          if($result['message']['code'] == '6115'){
            $return_msg = array(
              'status' => 'success',
              'code' => $result['message']['code'],
              'data' => $result['message']
            );
          }else{
            $return_msg = array(
              'status' => 'error',
              'code' => $result['message']['code'],
              'data' => $result['message']
            );
            //captureLog(json_encode($return_msg));
          }
        }else{
          $return_msg = array(
            'status' => 'success',
            'code' => 0,
            'data' => $result['message']
          );
          //captureLog(json_encode($return_msg));
        }

        }else{
          $return_msg = array(
            'status' => 'error',
            'code' => $statusCode,
            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
          );
          //captureLog(json_encode($return_msg));
        }
        return $return_msg;
      }
			public function curl_GET_AUTH_SP($total_timing,$get_url,$data,$authval){
	        $get_ch = curl_init();
	        $get_headers  = [
	            'Content-Type: application/json',
							'Authorization:'.$authval
	        ];
	        $url = $get_url;
	        if($data){
	            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
	        }

	        $get_curlConfig = array(
	            CURLOPT_URL            => $url,
	            CURLOPT_RETURNTRANSFER => true,
	            CURLOPT_HTTPHEADER => $get_headers,
							CURLOPT_HTTPAUTH => CURLAUTH_BASIC
	        );
					
	        curl_setopt_array($get_ch, $get_curlConfig);
	        $result = curl_exec($get_ch);
	        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
	        curl_close($get_ch);
	        $return_msg = '';

	        if($statusCode == 200){
	          $result = json_decode($result,true);

	          if($result['status'] == '200'){
	            if($result['message']['code'] == 6115){
								session_unset();
								session_destroy();
	              $return_msg = array(
	                'status' => 'success',
	                'code' => $result['message']['code'],
	                'data' => $result['message']
	              );
	              }else if($result['message']['code'] == 6116){
	              $return_msg = array(
	                'status' => 'success',
	                'code' => $result['message']['code'],
	                'data' => $result['message']
	              );
	            }else{
	              $return_msg = array(
	                'status' => 'error',
	                'code' => $result['message']['code'],
	                'data' => $result['message']
	              );
	              //captureLog(json_encode($return_msg));
	            }
	            echo json_encode($return_msg);exit;
	            }else if($result['status'] == '102' || $result['status'] == '400'){
	            setInterval(function() use($total_timing,$get_url,$data,$result,$authval) {
	              $total_timing++;
	              if($total_timing <= 30 ){
	                  $this->curl_GET_AUTH_SP($total_timing,$get_url,$data,$authval);
	              }else{
	                $return_msg = array(
	                  'status' => 'error',
	                  'code' => $result['message']['code']
	                );
	                //captureLog(json_encode($return_msg));
	                echo json_encode($return_msg);exit;
	              }
	            }, 1000);
	          }else{
	            $return_msg = array(
	              'status' => 'error',
	              'code' => $result['message']['code']
	            );
	            //captureLog(json_encode($return_msg));
	            echo json_encode($return_msg);exit;
	          }
	        }else{
	          $return_msg = array(
	            'status' => 'error',
	            'code' => $statusCode,
	            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
	          );
	          //captureLog(json_encode($return_msg));
	          echo json_encode($return_msg);exit;
	        }

	      }
	    public function curl_POST_AUTH_SP($url,$postfields,$authval){
	        $ch = curl_init();
	        $headers  = [
	            'Content-Type: application/json',
							'Authorization:'.$authval
	        ];
	        $curlConfig = array(
	            CURLOPT_URL            => $url,
	            CURLOPT_POST           => true,
	            CURLOPT_RETURNTRANSFER => true,
	            CURLOPT_POSTFIELDS     => json_encode($postfields),
	            CURLOPT_HTTPHEADER => $headers,
							CURLOPT_HTTPAUTH => CURLAUTH_BASIC
	        );
					
	        curl_setopt_array($ch, $curlConfig);
	        $result = curl_exec($ch);
	        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	        curl_close($ch);
	        $return_msg = '';
					
	        $result = json_decode($result,true);
					
	        if($statusCode == 200){
						
	          if(isset($result['message']['code'])){

	          if($result['message']['code'] == '6115'){
	            $return_msg = array(
	              'status' => 'success',
	              'code' => $result['message']['code'],
	              'data' => $result['message']
	            );
	          }else{
	            $return_msg = array(
	              'status' => 'error',
	              'code' => $result['message']['code'],
	              'data' => $result['message']
	            );
	            //captureLog(json_encode($return_msg));
	          }
	        }else{
	          $return_msg = array(
	            'status' => 'error',
	            'code' => 0,
	            'data' => 'no repsonse error'
	          );
	          //captureLog(json_encode($return_msg));
	        }

	        }else{
	          $return_msg = array(
	            'status' => 'error',
	            'code' => $statusCode,
	            'data' => 'Unexpected HTTP code: ', $statusCode, "\n"
	          );
	          //captureLog(json_encode($return_msg));
	        }
	        return $return_msg;
	      }
        public function curl_GET_Auth($get_url,$data){
					$get_ch = curl_init();
	        $get_headers  = [
	            'Content-Type: application/json'
	        ];
	        $url = $get_url;
	        if($data){
	            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
	        }

	        $get_curlConfig = array(
	            CURLOPT_URL            => $url,
	            CURLOPT_RETURNTRANSFER => true,
	            CURLOPT_HTTPHEADER => $get_headers
	        );
					//print_r($get_curlConfig);
	        curl_setopt_array($get_ch, $get_curlConfig);
	        $result = curl_exec($get_ch);
			//print_r($result);
	        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
	        curl_close($get_ch);
	        $return_msg = '';
		        if($statusCode == 200){
							$return_msg = array(
								'status' => 'success',
								'code' => $statusCode,
								'data' => $result
							);

		        }else{
		          $return_msg = array(
		            'status' => 'error',
		            'code' => $statusCode,
		            
								'data' => $result
		          );
		          //captureLog(json_encode($return_msg));
		        }
		        return $return_msg;
		      }

			  public function curl_PUT_Auth_string($url,$data){
				$postfields = array();
			$ch = curl_init();
			$headers  = [
				'Content-Type: application/json'
			];
			$curlConfig = array(
				CURLOPT_URL            => $url,
				CURLOPT_CUSTOMREQUEST  => 'PUT',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_POSTFIELDS     => $data,
				CURLOPT_HTTPHEADER => $headers
							
			);
				//print_r($curlConfig);	
			curl_setopt_array($ch, $curlConfig);
			$result = curl_exec($ch);
			//print_r($result); exit;	
			$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

					

					
					
					
					
					
					
					
			curl_close($ch);
			$return_msg = '';
			$result = json_decode($result,true);
					
			if($statusCode == 200){
						$return_msg = array(
							'status' => 'success',
							'code' => $statusCode,
							'data' => $result
						);

			}else{
			  $return_msg = array(
				'status' => 'error',
				'code' => $statusCode,
				'data' => $result
			  );
			  //captureLog(json_encode($return_msg));
			}
			return $return_msg;
		  }
			  public function curl_PUT_Auth($url,$data){
				$postfields = array();
			$ch = curl_init();
			$headers  = [
				'Content-Type: application/json'
			];
			$curlConfig = array(
				CURLOPT_URL            => $url,
				CURLOPT_CUSTOMREQUEST  => 'PUT',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_POSTFIELDS     => json_encode($data),
				CURLOPT_HTTPHEADER => $headers
							
			);
				//print_r($curlConfig);	
			curl_setopt_array($ch, $curlConfig);
			$result = curl_exec($ch);
			//print_r($result); exit;	
			$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

					

					
					
					
					
					
					
					
			curl_close($ch);
			$return_msg = '';
			$result = json_decode($result,true);
					
			if($statusCode == 200){
						$return_msg = array(
							'status' => 'success',
							'code' => $statusCode,
							'data' => $result
						);

			}else{
			  $return_msg = array(
				'status' => 'error',
				'code' => $statusCode,
				'data' => $result
			  );
			  //captureLog(json_encode($return_msg));
			}
			return $return_msg;
		  }


		  public function curl_POST_Auth_json_sp($url,$postfields){
			//$postfields = array();
	$data = $postfields;
		$ch = curl_init();
		$headers  = [
			'Content-Type: application/json',
						//'Authorization:'.$authval
		];
		$curlConfig = array(
			CURLOPT_URL            => $url,
			CURLOPT_POST           => true,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POSTFIELDS     => $data,
			CURLOPT_HTTPHEADER => $headers,
						CURLOPT_HTTPAUTH => CURLAUTH_BASIC
		);
		//print_r($curlConfig);	
		curl_setopt_array($ch, $curlConfig);
		$result = curl_exec($ch);
		//print_r($result);	exit;
		$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

				$headerRes = curl_setopt($ch, CURLOPT_HEADER, 1);

				
				$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
				$header = substr($result, 0, $header_size);
				$body = substr($result, $header_size);
				
		curl_close($ch);
		$return_msg = '';
		$result = json_decode($result,true);
				
		if($statusCode == 200){

		$return_msg = array(
		  'status' => 'success',
		  'code' => $statusCode,
		  'data' => $result,
		  "config" =>$curlConfig
		);


				

		}else{
		  $return_msg = array(
			'status' => 'error',
			'code' => $statusCode,
			'data' => $result
		  );
		  //captureLog(json_encode($return_msg));
		}
		return $return_msg;
	  }

		  public function curl_POST_Auth_json($url,$postfields){
			//$postfields = array();
	$data = json_encode($postfields);
		$ch = curl_init();
		$headers  = [
			"Content-Type: application/json; charset=utf-8",
        "Content-Length: " .strlen($data),
			//'Content-Type: application/json',
						//'Authorization:'.$authval
		];
		$curlConfig = array(
			CURLOPT_URL            => $url,
			CURLOPT_POST           => true,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POSTFIELDS     => $data,
			CURLOPT_HTTPHEADER => $headers,
						CURLOPT_HTTPAUTH => CURLAUTH_BASIC
		);
		//print_r($curlConfig);	
		curl_setopt_array($ch, $curlConfig);
		$result = curl_exec($ch);
		//print_r($result);	exit;
		$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

				$headerRes = curl_setopt($ch, CURLOPT_HEADER, 1);

				
				$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
				$header = substr($result, 0, $header_size);
				$body = substr($result, $header_size);
				
		curl_close($ch);
		$return_msg = '';
		$result = json_decode($result,true);
				
		if($statusCode == 200){

		$return_msg = array(
		  'status' => 'success',
		  'code' => $statusCode,
		  'data' => $result,
		  "config" =>$curlConfig
		);


				

		}else{
		  $return_msg = array(
			'status' => 'error',
			'code' => $statusCode,
			'data' => $result
		  );
		  //captureLog(json_encode($return_msg));
		}
		return $return_msg;
	  }


			public function curl_POST_Auth($url,$postfields){
				//$postfields = array();
        $data = json_encode($postfields);
	        $ch = curl_init();
	        $headers  = [
	            'Content-Type: text/plain',
							//'Authorization:'.$authval
	        ];
	        $curlConfig = array(
	            CURLOPT_URL            => $url,
	            CURLOPT_POST           => true,
	            CURLOPT_RETURNTRANSFER => true,
	            CURLOPT_POSTFIELDS     => $data,
	            CURLOPT_HTTPHEADER => $headers,
							CURLOPT_HTTPAUTH => CURLAUTH_BASIC
	        );
			//print_r($curlConfig);	
	        curl_setopt_array($ch, $curlConfig);
	        $result = curl_exec($ch);
			//print_r($result);	
	        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

					$headerRes = curl_setopt($ch, CURLOPT_HEADER, 1);

					
					$header_size = curl_getinfo($ch, CURLINFO_HEADER_SIZE);
					$header = substr($result, 0, $header_size);
					$body = substr($result, $header_size);
					
	        curl_close($ch);
	        $return_msg = '';

	        $result = json_decode($result,true);

			//print_r($result);	exit;
					
	        if($statusCode == 200){

            $return_msg = array(
              'status' => 'success',
              'code' => $statusCode,
              'data' => $result,
			  "config" =>$curlConfig
            );


					

	        }else{
	          $return_msg = array(
	            'status' => 'error',
	            'code' => $statusCode,
	            'data' => $result
	          );
	          //captureLog(json_encode($return_msg));
	        }
	        return $return_msg;
	      }



		  public function curl_DELETE_Auth($url,$data){
					
			$ch = curl_init();
	$headers  = [
		'Content-Type: application/json'
	];
			
			$curlConfig = array(
					CURLOPT_URL            => $url,
					CURLOPT_CUSTOMREQUEST  => "DELETE",
					CURLOPT_RETURNTRANSFER => true,
					CURLOPT_HTTPHEADER => $headers,
					CURLOPT_POSTFIELDS     => json_encode($data)
			);
			curl_setopt_array($ch, $curlConfig);
			$result = curl_exec($ch);

			
			$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			curl_close($ch);
			$return_msg = '';
			$result = json_decode($result,true);
			
			if($statusCode == 200){
				$return_msg = array(
					'status' => 'success',
					'code' => $statusCode,
					'data' => $result
				);
				
			}else{
				$return_msg = array(
					'status' => 'error',
					'code' => $statusCode,
					
					'data' => $result
				);
				//captureLog(json_encode($return_msg));
			}
			return $return_msg;
		}


				public function curl_DELETE_Auth_Mod($url,$authval,$data){
					
					$ch = curl_init();
	        $headers  = [
	            'Content-Type: application/json',
							'Authorization:'.$authval
	        ];
					
					$curlConfig = array(
							CURLOPT_URL            => $url,
							CURLOPT_CUSTOMREQUEST  => "DELETE",
							CURLOPT_RETURNTRANSFER => true,
							CURLOPT_HTTPHEADER => $headers,
							CURLOPT_POSTFIELDS     => json_encode($data)
					);
					curl_setopt_array($ch, $curlConfig);
					$result = curl_exec($ch);

					
					$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
					curl_close($ch);
					$return_msg = '';
					$result = json_decode($result,true);
					
					if($statusCode == 200){
						$return_msg = array(
							'status' => 'success',
							'code' => $statusCode,
							'data' => $result
						);
						
					}else{
						$return_msg = array(
							'status' => 'error',
							'code' => $statusCode,
							
							'data' => $result
						);
						//captureLog(json_encode($return_msg));
					}
					return $return_msg;
				}
				public function curl_POST_Auth_Mod($url,$authval,$data){
					$postfields = array();
		        $ch = curl_init();
		        $headers  = [
		            'Content-Type: application/json',
								'Authorization:'.$authval
		        ];
		        $curlConfig = array(
		            CURLOPT_URL            => $url,
		            CURLOPT_POST           => true,
		            CURLOPT_RETURNTRANSFER => true,
		            CURLOPT_POSTFIELDS     => json_encode($data),
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
						
		        if($statusCode == 200){
							$return_msg = array(
								'status' => 'success',
								'code' => $statusCode,
								'data' => $result
							);

		        }else{
		          $return_msg = array(
		            'status' => 'error',
		            'code' => $statusCode,
		            
								'data' => $result
		          );
		          //captureLog(json_encode($return_msg));
		        }
		        return $return_msg;
		      }
					public function curl_PUT_Auth_Mod($url,$authval,$data){
						$postfields = array();
			        $ch = curl_init();
			        $headers  = [
			            'Content-Type: application/json',
									'Content-Length: ' . strlen(json_encode($data)),
									'Authorization:'.$authval
			        ];
			        $curlConfig = array(
			            CURLOPT_URL            => $url,
			            CURLOPT_CUSTOMREQUEST  => 'PUT',
			            CURLOPT_RETURNTRANSFER => true,
			            CURLOPT_POSTFIELDS     => json_encode($data),
			            CURLOPT_HTTPHEADER => $headers
									
			        );
							
			        curl_setopt_array($ch, $curlConfig);
			        $result = curl_exec($ch);
							
			        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

							

							
							
							
							
							
							
							
			        curl_close($ch);
			        $return_msg = '';
			        $result = json_decode($result,true);
							
			        if($statusCode == 200){
								$return_msg = array(
									'status' => 'success',
									'code' => $statusCode,
									'data' => $result
								);

			        }else{
			          $return_msg = array(
			            'status' => 'error',
			            'code' => $statusCode,
			            'data' => $result
			          );
			          //captureLog(json_encode($return_msg));
			        }
			        return $return_msg;
			      }
				public function curl_GET_Auth_Mod($get_url,$authval,$data){
					$get_ch = curl_init();
	        $get_headers  = [
	            'Content-Type: application/json',
							'Authorization:'.$authval
	        ];
	        $url = $get_url;
	        if($data){
	            $url = sprintf("%s?%s", $url, ($data)?http_build_query($data):'');
	        }

	        $get_curlConfig = array(
	            CURLOPT_URL            => $url,
	            CURLOPT_RETURNTRANSFER => true,
	            CURLOPT_HTTPHEADER => $get_headers
	        );
					print_r($get_curlConfig);
	        curl_setopt_array($get_ch, $get_curlConfig);
	        $result = curl_exec($get_ch);
			print_r($result);
	        $statusCode = curl_getinfo($get_ch, CURLINFO_HTTP_CODE);
	        curl_close($get_ch);
	        $return_msg = '';
		        if($statusCode == 200){
							$return_msg = array(
								'status' => 'success',
								'code' => $statusCode,
								'data' => $result
							);

		        }else{
		          $return_msg = array(
		            'status' => 'error',
		            'code' => $statusCode,
		            
								'data' => $result
		          );
		          //captureLog(json_encode($return_msg));
		        }
		        return $return_msg;
		      }

	}
?>