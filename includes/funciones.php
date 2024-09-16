<?php

function debuguear($variable): string
{
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
    exit;
}

// Escapa / Sanitizar el HTML
function s($html): string
{
    $s = htmlspecialchars($html);
    return $s;
}

function isSession(): void
{
    if (!isset($_SESSION)) {
        session_start();
    }
}

// Función que revisa que el usuario esté autenticado
function isAuth(): void {
    if(!isset($_SESSION['login'])) {
        header('Location: /');
    }
};
