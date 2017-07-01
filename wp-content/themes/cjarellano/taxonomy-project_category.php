<?php
the_post();
get_header();
?>

<?php include 'partials/site-header.php'; ?>

<div class="wrapper">
    <main class="main-content">
        <section class="reel">
            <h1 class="visually-hidden">Writer</h1>
            <div class="image transition-in" style="background-image: url(<?php echo get_field('cja_project_category_featured_image')['url']; ?>);"></div>
            <div class="container">
                <p class="lead transition-in">
                    <span><?php echo term_description(); ?></span>
                </p>
                <button class="watch-video transition-in" data-video-id="reel-video">
                    <span class="video-lead"><?php echo get_queried_object()->name; ?> reel</span>
                    <span class="watch-it">Watch it</span>
                </button>
            </div>
        </section>
        <div class="video-container" id="reel-video">
            <button class="close-video">×</button>
            <?php echo trim(get_field('cja_project_category_reel')); ?>
        </div>
        <?php
        query_posts([
            'post_type' => 'project',
            'posts_per_page' => 5,
            'orderby' => 'menu_order',
            'order' => 'ASC',
            'tax_query' => [
                [
                    'taxonomy' => 'project_category',
                    'field'    => 'id',
                    'terms'    => [get_queried_object()->term_id],
                ]
            ]
        ]);

        if(have_posts()) : ?>
            <section class="selected-projects">
                <div class="container">
                    <h2 class="visually-hidden">Selected Projects</h2>
                    <div class="projects">
                        <?php while(have_posts()) : the_post(); ?>
                            <article class="project transition-in">
                                <a href="<?php the_permalink(); ?>"></a>
                                <div class="project-thumbnail" style="background-image: url(<?php the_post_thumbnail_url(); ?>);"></div>
                                <div class="project-info">
                                    <h3 class="project-type"><?php the_field('cja_project_type'); ?></h3>
                                    <p class="project-lead"><?php the_excerpt(); ?></p>
                                </div>
                            </article>
                            <?php
                        endwhile;
                        wp_reset_query();
                        ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>
    </main>
</div>

<?php include 'partials/site-footer.php'; ?>

<?php get_footer();
