<?php

use ClementCore\Admin\ThemeSettings;
use Theme2020\Utils\ThemeUtils;

require_once __DIR__ . '/vendor/autoload.php';

// Add theme supports
add_theme_support( 'post-thumbnails' );
add_theme_support( 'html5', array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption', 'style', 'script' ) );add_theme_support( 'menus' );

// Twig config
add_filter('simply_views_directory', function($viewsDirectory) {
    $viewsDirectory[] = realpath(__DIR__ . '/views');
    return $viewsDirectory;
});

add_filter('simply_template_configuration', function (\Twig\Environment $twig) {
    $twig->addFunction(new \Twig\TwigFunction('isLive', ThemeSettings::class . '::isLive'));
    $twig->addGlobal('theme', new ThemeUtils());
    return $twig;
});

// image sizes
add_image_size('grid', 350);

