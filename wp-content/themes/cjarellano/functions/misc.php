<?php

// Enable feature images
add_theme_support('post-thumbnails');

// Remove p tags from category description
remove_filter('term_description','wpautop');

// Remove p tags from post description
remove_filter( 'the_excerpt', 'wpautop' );