<?php

namespace Theme2020\Utils;

class ThemeUtils {
    static function getStylesheets($name) {
        return get_template_directory_uri() . '/dist/css/' . $name;
    }
}
