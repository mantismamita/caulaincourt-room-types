<?php
/*

*/

class caulaincourtRoomTypes {

  /*--------------------------------------------*
   * Constants
   *--------------------------------------------*/
  const name = 'caulaincourt Room Types';
  const slug = 'caulaincourt_room_types';
  
  /**
   * Constructor
   */
  function __construct() {
    //register an activation hook for the plugin
    register_activation_hook( __FILE__, array( &$this, 'install_caulaincourt_room_types' ) );

    //Hook up to the init action
    add_action( 'init', array( &$this, 'init_caulaincourt_room_types' ) );
  }
  
  /**
   * Runs when the plugin is activated
   */  
  function install_caulaincourt_room_types() {
    // do not generate any output here
  }
  
  /**
   * Runs when the plugin is initialized
   */
  function init_caulaincourt_room_types() {
    // Setup localization
    load_plugin_textdomain( self::slug, false, dirname( plugin_basename( __FILE__ ) ) . '/lang' );
    // Load JavaScript and stylesheets
    $this->register_scripts_and_styles();

  
    if ( is_admin() ) {
      //this will run when in the WordPress admin
    } else {
      //this will run when on the frontend
    }

    /*
     * TODO: Define custom functionality for your plugin here
     *
     * For more information: 
     * http://codex.wordpress.org/Plugin_API#Hooks.2C_Actions_and_Filters
     */
    add_action( 'your_action_here', array( &$this, 'action_callback_method_name' ) );
    add_filter( 'your_filter_here', array( &$this, 'filter_callback_method_name' ) );    
  }

  function action_callback_method_name() {
    // TODO define your action method here
  }

  function filter_callback_method_name() {
    // TODO define your filter method here
  }
  
  /**
   * Registers and enqueues stylesheets for the administration panel and the
   * public facing site.
   */
  private function register_scripts_and_styles() {
    if ( is_admin() ) {

    } else {
      $this->load_file( self::slug . '-script', '/js/widget.js', true );
      $this->load_file( self::slug . '-style', '/css/widget.css' );
    } // end if/else
  } // end register_scripts_and_styles
  
  /**
   * Helper function for registering and enqueueing scripts and styles.
   *
   * @name  The   ID to register with WordPress
   * @file_path   The path to the actual file
   * @is_script   Optional argument for if the incoming file_path is a JavaScript source file.
   */
  private function load_file( $name, $file_path, $is_script = false ) {

    $url = plugins_url($file_path, __FILE__);
    $file = plugin_dir_path(__FILE__) . $file_path;

    if( file_exists( $file ) ) {
      if( $is_script ) {
        wp_register_script( $name, $url, array('jquery') ); //depends on jquery
        wp_enqueue_script( $name );
      } else {
        wp_register_style( $name, $url );
        wp_enqueue_style( $name );
      } // end if
    } // end if

  } // end load_file
  
} // end class
new caulaincourtRoomTypes();

?>