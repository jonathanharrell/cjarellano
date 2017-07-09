<?php


// Customize responsive sizes for content images
function cja_adjust_image_sizes_attr($sizes, $size)
{
    $sizes = '(max-width: 959px) 100vw, (max-width: 1489px) 80vw, 1200px';
    return $sizes;
}

add_filter('wp_calculate_image_sizes', 'cja_adjust_image_sizes_attr', 10 , 2);

// Customize responsive images for post thumbnails
function cja_post_thumbnail_sizes_attr($attr, $attachment, $size)
{
    if ('post-thumbnail' === $size) {
        $attr['sizes'] = '(max-width: 959px) 100vw, (max-width: 1489px) 50vw, 730px';
    }
    return $attr;
}

add_filter('wp_get_attachment_image_attributes', 'cja_post_thumbnail_sizes_attr', 10 , 3);