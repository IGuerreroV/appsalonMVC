<h1 class="nombre-pagina">Panel de Administración</h1>

<?php
include_once __DIR__ . '/../templates/barra.php';
?>

<h2>Buscar Citas</h2>
<div class="busqueda">
    <form class="formulario">
        <div class="campo">
            <label for="fecha">Fecha</label>
            <input
                type="date"
                id="fecha"
                name="fecha">
        </div>
    </form>
</div>

<div id="citas-admin">
    <ul class="citas">
        <?php $idCita = null; ?>
        <?php foreach ($citas as $cita): ?>
            <?php if ($idCita !== $cita->id): ?>
                <li>
                    <p>ID: <span><?php echo $cita->id; ?></span></p>
                    <p>Hora: <span><?php echo $cita->hora; ?></span></p>
                    <p>Cliente: <span><?php echo $cita->cliente; ?></span></p>
                    <p>Email: <span><?php echo $cita->email; ?></span></p>
                    <p>Telefono: <span><?php echo $cita->telefono; ?></span></p>

                    <h3>Servicios</h3>

                <?php $idCita = $cita->id; ?> <!-- Actualizar $idCita -->
            <?php endif; ?> <!-- Fin If -->
                    <p class="servicio"><?php echo $cita->servicio . ' ' . $cita->precio; ?></p> <!-- Mostrar Servicio y Precio -->
                </li>
        <?php endforeach; ?><!-- Fin Foreach -->
    </ul>
</div>