<?php
the_post();
get_header();
?>

<?php include 'partials/site-header.php'; ?>

<main class="main-content">
    <article class="single-project-content">
        <div class="container">
            <header class="project-header">
                <h1 class="project-title" data-title="<?php the_title(); ?>"><?php the_title(); ?></h1>
                <p class="project-type"><?php the_field('cja_project_type'); ?></p>
            </header>
            <div class="image-container">
                <div class="image" style="background-image: url('img/mind-over-marriage.jpg');"></div>
                <button class="watch-video">
                    <span class="video-lead">Play video</span>
                </button>
            </div>
            <section class="project-info">
                <?php the_content(); ?>
                <?php
                $contributions = get_terms('project_category');
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
                <aside class="project-awards">
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
    <section class="related-projects">
        <div class="container">
            <h2 class="visually-hidden">Related Projects</h2>
            <div class="projects">
                <article class="project">
                    <a href=""></a>
                    <div class="project-thumbnail"></div>
                    <div class="project-info">
                        <h3 class="project-type">Feature Screenplay</h3>
                        <p class="project-lead">Teen rom com with a heist-y twist</p>
                    </div>
                </article>
                <article class="project">
                    <a href=""></a>
                    <div class="project-thumbnail"></div>
                    <div class="project-info">
                        <h3 class="project-type">Commercial Parody</h3>
                        <p class="project-lead">Project lead</p>
                    </div>
                </article>
                <article class="project">
                    <a href=""></a>
                    <div class="project-thumbnail"></div>
                    <div class="project-info">
                        <h3 class="project-type">Commercial Parody</h3>
                        <p class="project-lead">Project lead</p>
                    </div>
                </article>
            </div>
        </div>
    </section>
</main>

<?php include 'partials/site-footer.php'; ?>

<?php get_footer();
