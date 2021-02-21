<?php

use ClementCore\Controller\BlogController;

$blogController = Simply::get(BlogController::class);
if (is_category() || is_tag()) {
    $blogController->taxonomy();
} else {
    $blogController->index();
}

