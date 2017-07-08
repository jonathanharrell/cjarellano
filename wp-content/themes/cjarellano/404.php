<?php
the_post();
get_header();
?>

<?php get_template_part('partials/content', 'site-header'); ?>

    <div class="wrapper">
        <main class="main-content">
            <div class="container">
                <div class="not-found">
                    <h1>Not found</h1>
                    <p>Waahh sorry! No dice here. Try searching again, maybe?</p>
                </div>
            </div>
        </main>
    </div>

<?php get_template_part('partials/content', 'site-footer'); ?>

<?php get_footer();
