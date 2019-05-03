<script src="<?php echo $GLOBALS['assets']->get(get_template_directory_uri() . '/build', 'vendor.js'); ?>"></script>
<script src="<?php echo $GLOBALS['assets']->get(get_template_directory_uri() . '/build', 'main.js'); ?>"></script>
<noscript>
    <style>
        .transition-in {
            opacity: 1;
            transform: none;
        }
    </style>
</noscript>
<?php get_template_part( 'partials/content', 'analytics-tracking' ); ?>
<?php wp_footer(); ?>
</body>
</html>
