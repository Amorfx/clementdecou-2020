<?php
require_once __DIR__ . '/vendor/autoload.php';

// Add theme supports
add_theme_support( 'post-thumbnails' );
add_theme_support( 'menus' );

// Twig config
add_filter('simply_views_directory', function($viewsDirectory) {
    $viewsDirectory[] = realpath(__DIR__ . '/views');
    return $viewsDirectory;
});

// assets config

