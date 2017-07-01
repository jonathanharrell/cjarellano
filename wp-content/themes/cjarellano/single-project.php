<?php
the_post();
get_header();
?>

<?php include 'partials/site-header.php'; ?>

<main class="main-content">
    <article class="single-project-content">
        <div class="container">
            <header class="project-header transition-in">
                <h1 class="project-title" data-title="<?php the_title(); ?>"><?php the_title(); ?></h1>
                <p class="project-type"><?php the_field('cja_project_type'); ?></p>
            </header>
            <div class="image-container">
                <div class="image transition-in" style="background-image: url(<?php the_post_thumbnail_url(); ?>);"></div>
                <?php if(get_field('cja_project_video')) : ?>
                    <button class="watch-video transition-in" data-video-id="reel-video">
                        <span class="video-lead">Play video</span>
                    </button>
                <?php endif; ?>
            </div>
            <div class="video-container" id="reel-video">
                <button class="close-video">×</button>
                <?php
                $embed = trim(get_field('cja_project_video'));

                preg_match('/src="(.+?)"/', $embed, $matches);
                $src = $matches[1];
                $params = ['enablejsapi'=> 1];

                $new_src = add_query_arg($params, $src);
                $embed = str_replace($src, $new_src, $embed);
                echo $embed;
                ?>
            </div>
            <section class="project-info transition-in">
                <?php the_content(); ?>
                <?php
                $contributions = get_the_terms($post, 'project_category');
                if($contributions) :
                    ?>
                    <ul class="project-contributions">
                        <?php foreach($contributions as $contribution) :
                            $noun = get_field('cja_project_category_noun_form', $contribution->taxonomy.'_'.$contribution->term_id); ?>
                            <li class="contribution-<?php echo strtolower($noun); ?>">
                                <?php echo $noun; ?>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                <?php endif; ?>
            </section>
            <?php if(have_rows('cja_project_award')) : ?>
                <aside class="project-awards transition-in">
                    <h2 class="visually-hidden">Awards</h2>
                    <ul>
                        <?php while(have_rows('cja_project_award')) : the_row();
                            $source = get_sub_field('source');
                            $link = get_sub_field('link');
                            ?>
                            <li class="award">
                                <h3 class="award-title">
                                    <?php the_sub_field('title'); ?>
                                </h3>
                                <?php if($source) : ?>
                                    <p class="award-source">
                                        <?php if($link) : ?>
                                            <a href="<?php the_sub_field('link'); ?>">
                                                <?php the_sub_field('source'); ?>
                                            </a>
                                        <?php else : ?>
                                            <?php the_sub_field('source'); ?>
                                        <?php endif; ?>
                                    </p>
                                <?php endif; ?>
                            </li>
                        <?php endwhile; ?>
                    </ul>
                </aside>
            <?php endif; ?>
        </div>
    </article>
    <?php
    $categories = get_terms('project_category');
    $categoryIds = [];

    foreach($categories as $category) {
        array_push($categoryIds, $category->term_id);
    }

    query_posts([
        'post_type' => 'project',
        'posts_per_page' => 3,
        'orderby' => 'rand',
        'order' => 'ASC',
        'tax_query' => [
            [
                'taxonomy' => 'project_category',
                'field'    => 'id',
                'terms'    => $categoryIds,
            ]
        ],
        'post__not_in' => array(get_the_ID())
    ]);

    if(have_posts()) : ?>
        <section class="related-projects">
            <div class="container">
                <h2 class="visually-hidden">Related Projects</h2>
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

<?php include 'partials/site-footer.php'; ?>

<?php get_footer();
