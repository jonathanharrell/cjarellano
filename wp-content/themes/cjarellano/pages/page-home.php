<?php
/**
 * Template Name: Home
 */

the_post();
get_header();
?>

<main class="main-content">
    <div class="container">
        <h1>C.J. Arellano</h1>
        <nav>
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