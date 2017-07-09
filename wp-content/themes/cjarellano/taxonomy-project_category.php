<?php
the_post();
get_header();
?>

<?php get_template_part( 'partials/content', 'site-header' ); ?>

<div class="wrapper">
    <main class="main-content">
        <section class="reel">
            <h1 class="visually-hidden">Writer</h1>
            <div class="image responsive-image">
                <?php
                $image = get_field('cja_project_category_featured_image');
                echo wp_get_attachment_image($image['id'], 'full');
                ?>
            </div>
            <div class="container">
                <p class="lead">
                    <span><?php echo term_description(); ?></span>
                </p>
                <?php if(get_field('cja_project_category_reel')) : ?>
                    <button class="watch-video" data-video-id="reel-video">
                        <span class="video-lead"><?php echo get_queried_object()->name; ?> reel</span>
                        <span class="watch-it">Watch it</span>
                    </button>
                <?php endif; ?>
            </div>
        </section>
        <?php if(get_field('cja_project_category_reel')) : ?>
            <div class="video-container" id="reel-video">
                <button class="close-video">×</button>
                <?php echo trim(get_field('cja_project_category_reel')); ?>
            </div>
        <?php endif; ?>
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
                            <article class="project">
                                <a href="<?php the_permalink(); ?>"></a>
                                <div class="project-thumbnail responsive-image">
                                    <?php the_post_thumbnail(); ?>
                                </div>
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

<?php get_template_part( 'partials/content', 'site-footer' ); ?>

<?php get_footer();
