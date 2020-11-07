<?php
/*
 * Template Name: Home
 */

use ClementCore\Controller\HomeController;

$homeController = Simply::getContainer()->get(HomeController::class);
$homeController->home();
