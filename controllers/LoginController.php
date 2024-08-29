<?php

namespace Controllers;

use MVC\Router;
use Model\Usuario;

class loginController {
    public static function login(Router $router) {

        $router->render('auth/login');
    }

    public static function logout() {
        echo 'Desde el controlador de logout';
    }

    public static function olvide(Router $router) {

        $router->render('auth/olvide-password', [

        ]);
    }

    public static function recuperar() {
        echo 'Desde el controlador de recuperar';
    }

    public static function crear(Router $router) {
        $usuario = new Usuario;
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $usuario->sincronizar($_POST);
            $alertas = $usuario->validarNuevaCuenta();
            debuguear($alertas);
        }

        $router->render('auth/crear-cuenta', [
            'usuario' => $usuario
        ]);
    }
}