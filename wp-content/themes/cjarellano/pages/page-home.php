<?php
/**
 * Template Name: Home
 */

the_post();
get_header();
?>

<div class="home-background"></div>
<img src="<?php echo get_template_directory_uri(); ?>/img/home-image.jpg">
<main class="main-content">
    <div class="container">
        <h1><a href="<?php echo esc_url(home_url('/about')); ?>">C.J. Arellano</a></h1>
        <nav class="home-nav transition-in">
            <a href="<?php echo esc_url(home_url('/writing')); ?>" class="writer-link">Writer</a>
            <a href="<?php echo esc_url(home_url('/directing')); ?>" class="director-link">Director</a>
            <a href="<?php echo esc_url(home_url('/editing')); ?>" class="editor-link">Editor</a>
        </nav>
    </div>
</main>
<footer role="contentinfo">
    <div class="container">
        <a href="mailto:cj@cjarellano.com">cj@cjarellano.com</a>
        <?php get_template_part( 'partials/content', 'social-links' ); ?>
    </div>
</footer>

<?php get_footer();
