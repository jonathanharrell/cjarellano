<?php

function cja_add_custom_taxonomy()
{
    register_taxonomy('project_category', 'project',
        [
            'hierarchical' => true,
            'labels'       => [
                'name'                       => _x('Project Categories', 'taxonomy general name'),
                'singular_name'              => _x('Project Category', 'taxonomy singular name'),
                'search_items'               => __('Search Project Categories'),
                'popular_items'              => __('Popular Project Categories'),
                'all_items'                  => __('All Project Categories'),
                'parent_item'                => null,
                'parent_item_colon'          => null,
                'edit_item'                  => __('Edit Project Category'),
                'update_item'                => __('Update Project Category'),
                'add_new_item'               => __('Add New Project Category'),
                'new_item_name'              => __('New Project Category Name'),
                'separate_items_with_commas' => __('Separate project categories with commas'),
                'add_or_remove_items'        => __('Add or remove project categories'),
                'choose_from_most_used'      => __('Choose from the most used project categories'),
                'not_found'                  => __('No project categories found.'),
                'menu_name'                  => __('Project Categories')
            ]
        ]
    );
}

add_action('init', 'cja_add_custom_taxonomy');

