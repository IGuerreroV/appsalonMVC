<?php

require_once __DIR__ . '/../includes/app.php';

use MVC\Router;
use Controllers\loginController;
use Controllers\CitaController;

$router = new Router();

// Iniciar Sesión
$router->get('/', [loginController::class, 'login']);
$router->post('/', [loginController::class, 'login']);

// Cerrar Sesión
$router->get('/logout', [loginController::class, 'logout']);

// Recuperar Password
$router->get('/olvide', [loginController::class, 'olvide']);
$router->post('/olvide', [loginController::class, 'olvide']);
$router->get('/recuperar', [loginController::class, 'recuperar']);
$router->post('/recuperar', [loginController::class, 'recuperar']);

// Crear Cuenta
$router->get('/crear-cuenta', [loginController::class, 'crear']);
$router->post('/crear-cuenta', [loginController::class, 'crear']);

// Confirmar Cuenta
$router->get('/confirmar-cuenta', [loginController::class, 'confirmar']);
$router->get('/mensaje', [loginController::class, 'mensaje']);

// AREA PRIVADA
$router->get('/cita', [CitaController::class, 'index']);


// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();