<?php
/*
Plugin Name: Caulaincourt Room Types
Plugin URI:
Description: Creates room types for the caulaincourt custom theme
Version: 0.1
Author: Kirsten Cassidy
Author Email: mantismamita@gmail.com
Text Domain: caulaincourt_room_types
Domain Path: /languages
License:

  Copyright 2014 Kirsten Cassidy (mantismamita@gmail.com)

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License, version 2, as
  published by the Free Software Foundation.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

*/

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

/*if ( ! function_exists( 'load_textdomain' ) ) {
    function load_textdomain() {
        load_plugin_textdomain( 'caulaincourt_room_types', false, basename( __DIR__ ) . '/languages' );
    }
}


add_action( 'init', 'load_textdomain' );*/

add_action('init', 'caulaincourt_register_room_type', 0);

function caulaincourt_register_room_type() {

    register_taxonomy(
        'room_category',
        'room_type',
        array(
            'label' => ' Room Category',
            'query_var' => true,
            'rewrite' => true,
            'hierarchical' => true,
            'show_in_rest' => true
        )
    );

    $labels = array(
        'name' => __('Room Types', 'caulaincourt_room_types'),
        'singular_name' => __('Room Type', 'caulaincourt_room_types'),
        'add_new' => __('Add New', 'caulaincourt_room_types'),
        'add_new_item' => __('Add New Room Type', 'caulaincourt_room_types'),
        'edit_item' => __('Edit Room Type', 'caulaincourt_room_types'),
        'new_item' => __('New Room Type', 'caulaincourt_room_types'),
        'view_item' => __('View Room Type', 'caulaincourt_room_types'),
        'search_items' => __('Search Room Types', 'caulaincourt_room_types'),
        'not_found' => __('No room types found', 'caulaincourt_room_types'),
        'not_found_in_trash' => __('No room types found in Trash', 'caulaincourt_room_types'),
        'parent_item_colon' => __('Parent Room Type:', 'caulaincourt_room_types'),
        'menu_name' => __('Room Types', 'caulaincourt_room_types'),
    );

    $args = array(
        'labels' => $labels,
        'hierarchical' => true,
        'supports' => array('title', 'thumbnail', 'editor', 'custom-fields'),
        'taxonomies' => array('_category'),
        'public' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'menu_position' => 20,
        'menu_icon' => plugins_url('lamp.svg', __FILE__),
        'show_in_nav_menus' => true,
        'publicly_queryable' => true,
        'exclude_from_search' => false,
        'has_archive' => true,
        'query_var' => true,
        'can_export' => true,
        'rewrite' => true,
        'capability_type' => 'page',
        'show_in_rest' => true
    );

    register_post_type('room_type', $args);
}


/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */


/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function caulaincourt_room_types_block_assets() {

    wp_enqueue_style(
        'caulaincourt-cgb-style-css',
        plugins_url('dist/blocks.style.build.css', __FILE__),
        array('wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/blocks.style.build.css')
    );
}

add_action('enqueue_block_assets', 'caulaincourt_room_types_block_assets');

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function caulaincourt_room_types_editor_assets() {

    wp_enqueue_script(
        'caulaincourt-cgb-block-js',
        plugins_url('/dist/blocks.build.js', __FILE__),
        array('wp-blocks', 'wp-i18n', 'wp-element'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/blocks.build.js'),
        true
    );

    wp_enqueue_style(
        'caulaincourt-cgb-block-editor-css',
        plugins_url('dist/blocks.editor.build.css', __FILE__),
        array('wp-edit-blocks'),
        filemtime(plugin_dir_path(__FILE__) . 'dist/blocks.editor.build.css')
    );

    //$textdomain-$locale-$handle.json caulaincourt_room_types-fr_FR-caulaincourt-cgb-block-js.json
    wp_set_script_translations( 'caulaincourt-cgb-block-js' );
}


add_action('enqueue_block_editor_assets', 'caulaincourt_room_types_editor_assets');


function caulaincourt_register_meta() {
    register_meta('post', 'myguten_meta_block_field', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));

    register_meta('post', 'max_number_persons', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'integer',
    ));

    register_meta('post', 'listed_price', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'integer',
    ));

    register_meta('post', 'price_scope', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));

    register_meta('post', 'bed_icon_image', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));

    register_meta('post', 'bed_type', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => true,
        'type' => 'string',
    ));

    register_meta('post', 'extras_list', array(
        'object_subtype' => 'room_type',
        'show_in_rest' => true,
        'single' => false,
        'type' => 'string',
    ));
}

add_action('init', 'caulaincourt_register_meta');

function caulaincourt_show_room_features($prefix) {
    $extras_list = get_post_meta(get_the_ID(), 'extras_list', false);

    if ($extras_list) : ?>
        <div class="<?php echo $prefix ?>-features">
            <p class="<?php echo $prefix ?>-featureTitle"><?php _e('Special Features', 'caulaincourt_room_types') ?></p>
            <ul class="<?php echo $prefix ?>-extras">
                <?php foreach ($extras_list as $key => $value) { ?>
                    <li class="<?php echo $prefix ?>-extras-listItem"><?php echo $value ?></li>
                <?php } ?>
            </ul>
        </div>
    <?php endif;
}

add_action('show_room_features', 'caulaincourt_show_room_features');

function caulaincourt_show_room_meta($show_features) {
    if (function_exists('wpml_object_id')) {
        $pid= apply_filters( 'wpml_object_id', get_the_ID(), 'room_type' );
    } else {
        $pid= get_the_ID();
    }

    $max_persons = get_post_meta($pid, 'max_number_persons', true);
    $list_price = get_post_meta($pid, 'listed_price', true);
    $price_scope = get_post_meta($pid, 'price_scope', true);
    $bed_type = get_post_meta($pid, 'bed_type', true);
    $bed_icon_image = get_post_meta($pid, 'bed_icon_image', true);
    $img = plugins_url('src/img/perso.svg', __FILE__); ?>

    <div class="roomMeta">
        <?php
        if ($img && $max_persons) : ?>
            <p class="roomMeta-people">
                <img src="<?php echo $img; ?>" height="20" width="20">
                <span><?php echo $max_persons;
                    _e(' people per room', 'caulaincourt_room_types') ?></span>
            </p>
        <?php endif;

        if ($bed_type && $bed_icon_image) : ?>
            <p class="roomMeta-beds">
                <img src="<?php echo $bed_icon_image; ?>" height="20" width="20">
                <span><?php echo $bed_type; ?></span>
            </p>
        <?php endif;

        if ($list_price && $price_scope) : ?>
            <p class="roomMeta-price"><?php printf( __( '<span class="roomMeta-priceLabel">Listed price:</span><span class="roomMeta-priceAmount"> %d€</span><span class="roomMeta-pricePer"> per %s</span>', 'caulaincourt_room_types' ), $list_price, $price_scope ); ?></p>
        <?php endif;

        if ($show_features) {
            do_action('show_room_features', $prefix='roomMeta');
        } ?>

    </div> <?php
}

add_action('show_room_meta', 'caulaincourt_show_room_meta');

