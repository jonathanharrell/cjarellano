<?php

function cja_youtube_player($html)
{
    return str_replace('?feature=oembed', '?feature=oembed&modestbranding=1&showinfo=0&rel=0', $html);
}

add_filter('oembed_result', 'cja_youtube_player', 10, 3);
