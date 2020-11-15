<?php
/*
 * Template Name: Home
 */

use ClementCore\Controller\HomeController;

$homeController = Simply::get(HomeController::class);
$homeController->home();
