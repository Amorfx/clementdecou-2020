<?php

use ClementCore\Controller\BlogController;

$blogController = Simply::get(BlogController::class);
$blogController->index();
