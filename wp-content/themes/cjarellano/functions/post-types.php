<?php

function cja_add_custom_post_types()
{
    register_post_type('project', [
        'labels'              => [
            'name'               => _x('Projects', 'post type general name'),
            'singular_name'      => _x('Project', 'post type singular name'),
            'menu_name'          => _x('Projects', 'admin menu'),
            'name_admin_bar'     => _x('Projects', 'add new on admin bar'),
            'add_new'            => _x('Add New', 'Project'),
            'add_new_item'       => __('Add New Project'),
            'new_item'           => __('New Project'),
            'edit_item'          => __('Edit Project'),
            'view_item'          => __('View Project'),
            'all_items'          => __('All Projects'),
            'search_items'       => __('Search Projects'),
            'not_found'          => __('No Projects found.'),
            'not_found_in_trash' => __('No Projects found in Trash.'),
        ],
        'public'              => true,
        'exclude_from_search' => true,
        'show_in_nav_menus'   => false,
        'supports'            => ['title', 'editor', 'thumbnail', 'excerpt'],
        'taxonomies'          => ['project_category']
    ]);
}

add_action('init', 'cja_add_custom_post_types');
