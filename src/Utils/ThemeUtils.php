<?php

namespace Theme2020\Utils;

use ClementCore\Admin\ThemeMenu;
use Theme2020\Models\Menu\Menu;

class ThemeUtils {
    public function getStylesheets($name) {
        return get_template_directory_uri() . '/dist/css/' . $name;
    }

    public function getJavascript($name) {
        return get_template_directory_uri() . '/dist/js/' . $name;
    }

    private function getMenuItems($location) {
        $menu = new Menu($location);
        return $menu->getItems();
    }

    public function getMenuHeaderItems() {
        return $this->getMenuItems(ThemeMenu::$headerNavSlug);
    }
}
