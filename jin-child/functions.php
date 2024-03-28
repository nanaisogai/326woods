<?php

add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' ); 
function theme_enqueue_styles() { 
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
  wp_enqueue_style( 'front-style', get_stylesheet_directory_uri() . '/css/style.css',array('child-style'));

  // script
	wp_enqueue_script( 'script-name', get_stylesheet_directory_uri() . '/js/base.js', array(), '1.0.0', true );
}
