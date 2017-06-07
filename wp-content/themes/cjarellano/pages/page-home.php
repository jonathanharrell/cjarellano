<?php
/**
 * Template Name: Home
 */

the_post();
get_header();
?>

    <div class="wrapper home">
        <main>
            <div class="container">
                <h1>C.J. Arellano</h1>
                <nav>
                    <a href="writer.php" class="writer-link">Writer</a>
                    <a href="" class="director-link">Director</a>
                    <a href="" class="editor-link">Editor</a>
                </nav>
            </div>
        </main>
        <footer role="contentinfo">
            <div class="container">
                <a href="mailto:cj@cjarellano.com">cj@cjarellano.com</a>
                <?php get_template_part( 'partials/content', 'social-links' ); ?>
            </div>
        </footer>
    </div>

<?php get_footer();