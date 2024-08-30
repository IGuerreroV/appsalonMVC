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

        // Alertas vacias
        $alertas = [];
        if($_SERVER['REQUEST_METHOD'] === 'POST') {
            $usuario->sincronizar($_POST);
            $alertas = $usuario->validarNuevaCuenta();

            // Revisar si no hay errores en el arreglo de alertas
            if(empty($alertas)) {
                // Verificar si el usuario ya existe
                $resultado = $usuario->existeUsuario();

                if($resultado->num_rows) {
                    $alertas = Usuario::getAlertas();
                } else {
                    // Hashear el password
                    $usuario->hashPassword();

                    // Generar un token unico
                    $usuario->crearToken();

                    debuguear($usuario);
                }
            }
        }

        $router->render('auth/crear-cuenta', [
            'usuario' => $usuario,
            'alertas' => $alertas
        ]);
    }
}