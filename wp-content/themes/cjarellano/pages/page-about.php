<?php
/**
 * Template Name: About
 */

the_post();
get_header();
?>

<?php get_template_part('partials/content', 'site-header'); ?>

    <div class="wrapper">
        <main class="main-content">
            <div class="about-wrapper">
                <figure class="about-image">
                    <?php the_post_thumbnail(); ?>
                </figure>
                <div class="about-info">
                    <h1 class="about-title"><?php the_title(); ?></h1>
                    <p class="about-lead">Writer. Director. Editor.</p>
                    <div class="about-description">
                        <?php the_content(); ?>
                    </div>
                    <?php if (have_rows('cja_about_quote')) : ?>
                        <section class="about-quotes">
                            <span class="line"></span>
                            <?php while (have_rows('cja_about_quote')) : the_row(); ?>
                                <div class="quote about-quote">
                                    <blockquote>
                                        <?php the_sub_field('quote'); ?>
                                        <?php if (get_sub_field('source')) : ?>
                                            <cite><?php the_sub_field('source'); ?></cite>
                                        <?php endif; ?>
                                    </blockquote>
                                </div>
                            <?php endwhile; ?>
                        </section>
                    <?php endif; ?>
                </div>
            </div>
        </main>
    </div>

<?php get_template_part('partials/content', 'site-footer'); ?>

<?php get_footer();
