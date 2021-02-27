<?php

namespace Theme2020\Utils;

use ClementCore\Admin\ThemeMenu;
use ClementCore\Admin\ThemeSettings;
use Theme2020\Models\Menu\Menu;

class ThemeUtils {
    static $menus = [];
    static $rs = null;

    public function getStylesheets($name) {
        $time = filemtime(get_template_directory() . '/dist/css/' . $name);
        return get_template_directory_uri() . '/dist/css/' . $name . '?v=' . $time;
    }

    public function getJavascript($name) {
        $time = filemtime(get_template_directory() . '/dist/js/' . $name);
        return get_template_directory_uri() . '/dist/js/' . $name . '?v=' . $time;
    }

    private function getMenuItems($location) {
        if (!array_key_exists($location, self::$menus)) {
            $menu = new Menu($location);
            self::$menus[$location] = $menu->getItems();
        }
        return self::$menus[$location];
    }

    public function getMenuHeaderItems() {
        return $this->getMenuItems(ThemeMenu::$headerNavSlug);
    }

    public function getLink($path) {
        return home_url() . $path;
    }

    public function getSocialNetworks() {
        if (is_null(self::$rs)) {
            self::$rs = ThemeSettings::getRs();
        }
        return self::$rs;
    }

    public function getClassHeader() {
        if (is_home() || is_single()) {
            return 'dark';
        }
        return '';
    }
}
