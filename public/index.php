<?php

require_once __DIR__ . '/../includes/app.php';

use Controllers\AdminController;
use Controllers\APIController;
use MVC\Router;
use Controllers\loginController;
use Controllers\CitaController;
use Controllers\ServicioController;

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
$router->get('/admin', [AdminController::class, 'index']);

// API de citas
$router->get('/api/servicios', [APIController::class, 'index']);
$router->post('/api/citas', [APIController::class, 'guardar']);
$router->post('/api/eliminar', [APIController::class, 'eliminar']);

// CRUD de servicios
$router->get('/servicios', [ServicioController::class, 'index']);
$router->get('/servicios/crear', [ServicioController::class, 'crear']);
$router->post('/servicios/crear', [ServicioController::class, 'crear']);
$router->get('/servicios/actualizar', [ServicioController::class, 'actualizar']);
$router->post('/servicios/actualizar', [ServicioController::class, 'actualizar']);
$router->post('/servicios/eliminar', [ServicioController::class, 'eliminar']);

// Comprueba y valida las rutas, que existan y les asigna las funciones del Controlador
$router->comprobarRutas();
