<?php

require 'classes/WHQAssets.php';

require_once 'functions/images.php';
require_once 'functions/menus.php';
require_once 'functions/misc.php';
require_once 'functions/post-types.php';
require_once 'functions/taxonomies.php';
require_once 'functions/videos.php';

$GLOBALS['assets'] = new WHQAssets(get_template_directory() . '/build/manifest.json');
