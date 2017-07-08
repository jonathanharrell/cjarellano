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
        <a href="mailto:cj@cjarellano.com" class="link-email">
            <?php echo file_get_contents(get_template_directory_uri() . '/img/email.svg'); ?>
        </a>
    </nav>
    <span class="menu-mobile-background"></span>
</header>