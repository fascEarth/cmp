<?php
	class Logging {
		private $logURI = '/opt/cmp/ui/system/logs/';
		private $log_file, $fp;
		public function lfile($path) {
			$this->log_file = $path;
		}
		public function lwrite($message) {
			if (!is_resource($this->fp)) {
				$this->lopen();
			}
			$script_name = pathinfo($_SERVER['PHP_SELF'], PATHINFO_FILENAME);
			$time = @date('[d/M/Y:H:i:s]');
			fwrite($this->fp, "$time ($script_name) $message" . PHP_EOL);
		}
		public function lclose() {
			fclose($this->fp);
		}
		private function lopen() {
			$file = date('Y-m-d').'-project.log';
			$lfile = $this->logURI.$file;
			if ( !file_exists($lfile) ) {
				$myfile = fopen($lfile, "w");
		  }
			$this->fp = fopen($lfile, 'a') or exit("Can't open $lfile!");
		}
	}
?>
