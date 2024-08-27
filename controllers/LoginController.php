<?php

namespace Controllers;

use MVC\Router;

class loginController {
    public static function login(Router $router) {

        $router->render('auth/login');
    }

    public static function logout() {
        echo 'Desde el controlador de logout';
    }

    public static function olvide() {
        echo 'Desde el controlador de olvide';
    }

    public static function recuperar() {
        echo 'Desde el controlador de recuperar';
    }

    public static function crear(Router $router) {
        

        $router->render('auth/crear-cuenta', [
            
        ]);
    }
}