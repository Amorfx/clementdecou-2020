<?php

// Add theme supports
add_theme_support( 'post-thumbnails' );

// Twig config
add_filter('simply_views_directory', function($viewsDirectory) {
    $viewsDirectory[] = realpath(__DIR__ . '/views');
    return $viewsDirectory;
});
