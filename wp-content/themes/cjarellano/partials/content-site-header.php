<header class="site-header transition-in">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="brand">C.J. Arellano</a>
    <div class="logo">
        <?php echo file_get_contents(get_template_directory_uri() . '/img/logo.svg'); ?>
    </div>
    <nav class="primary-nav">
        <?php
        wp_nav_menu([
            'theme_location' => 'primary_nav',
            'container'      => false,
            'items_wrap'     => '%3$s'
        ]);
        ?>
<!--        <a href="" class="link-email">em</a>-->
        <span class="underline"></span>
    </nav>
    <button class="menu-mobile-close">
        <span></span>
        <span></span>
    </button>
</header>