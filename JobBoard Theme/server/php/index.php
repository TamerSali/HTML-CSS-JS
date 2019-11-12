<?php
/*
 * jQuery File Upload Plugin PHP Example
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 */

error_reporting(E_ALL | E_STRICT);
require('UploadHandler.php');
$options=['readfile_chunk_size' => 7 * 1024 * 1024, // 7 MiB,
    'accept_file_types' => '/\.(xls?x|doc?x|ppt?x|txt|pdf)$/i',
'inline_file_types' => '/\.(xls?x|doc?x|ppt?x|txt|pdf)$/i',
'upload_dir'  => "upload_for_save/"];
$upload_handler = new UploadHandler($options);
