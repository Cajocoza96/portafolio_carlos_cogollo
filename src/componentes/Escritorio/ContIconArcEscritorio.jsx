import React, { useState, useRef } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";
import { Rnd } from "react-rnd";

// Componentes de contenido específico para cada ventana
const ContenidoAcercaDe = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto4}
            </p>
        </div>

    </>
);

const ContenidoContacto = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.texto3LinkEnlace}
                className="inline break-words text-sm
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto3LinkEnlace}
            </a>
        </div>
    </>
);

const ContenidoHabilidades = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto5}
            </p>
        </div>

        <div>
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto6}
            </p>
        </div>
    </>
);

const ContenidoProyectos = ({ data }) => (
    <>
        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto6}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto7}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto8}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto9LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item1.texto9LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto9LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto10LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item1.texto10LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto10LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item1.texto11LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item1.texto11LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item1.texto11LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto4}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto6}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto7}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto8LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item2.texto8LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item2.texto8LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item2.texto9LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item2.texto9LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item2.texto9LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto4}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto6LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item3.texto6LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item3.texto6LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item3.texto7LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.item3.texto7LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item3.texto7LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto1}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto2}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto3}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto4}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto5}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto6LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.item4.texto6LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item4.texto6LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.item4.texto7LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.item4.texto7LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.item4.texto7LinkEnlace}
            </a>
        </div>
    </>
);

export default function ContIconArcEscritorio({
    toggleVerAcercaDe,
    verAcercaDe, setVerAcercaDe,
    toggleMinimizarVentanaAcercaDe, ventanaMinimizadaAcercaDe,
    infoAcercaDe,

    toggleVerContacto,
    verContacto, setVerContacto,
    toggleMinimizarVentanaContacto, ventanaMinimizadaContacto,
    infoContacto,

    toggleVerHabilidades,
    verHabilidades, setVerHabilidades,
    toggleMinimizarVentanaHabilidades, ventanaMinimizadaHabilidades,
    infoHabilidades,

    toggleVerProyectos,
    verProyectos, setVerProyectos,
    toggleMinimizarVentanaProyectos, ventanaMinimizadaProyectos,
    infoProyectos,

    ventanaZIndexes,
    bringToFront,

    // Nueva prop para el hover
    hoveredVentana
}) {

    // --- NUEVO: flag para diferenciar click vs drag (sirve mouse y touch)
    const draggingRef = useRef(false);
    const dragStartPos = useRef({ x: 0, y: 0, time: 0 });

    // Estado para posiciones de cada icono
    const [iconPositions, setIconPositions] = useState({
        acercaDe: { x: 24, y: 24 },
        contacto: { x: 24, y: 120 },
        habilidades: { x: 24, y: 216 },
        proyectos: { x: 24, y: 312 }
    });

    // Tamaño aproximado de cada icono (Archivo.jsx mide h-20 => 80px aprox)
    const ICON_WIDTH = 75;
    const ICON_HEIGHT = 72;

    // Función de colisión
    const checkCollision = (id, newPos) => {
        return Object.entries(iconPositions).some(([otherId, pos]) => {
            if (id === otherId) return false;
            return !(
                newPos.x + ICON_WIDTH < pos.x || // demasiado a la izquierda
                newPos.x > pos.x + ICON_WIDTH || // demasiado a la derecha
                newPos.y + ICON_HEIGHT < pos.y || // demasiado arriba
                newPos.y > pos.y + ICON_HEIGHT    // demasiado abajo
            );
        });
    };

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Acerca de
    const [ventanaStateAcercaDe, setVentanaStateAcercaDe] = useState(null);

    // Función para actualizar el estado de la ventana Acerca de
    const handleVentanaStateChangeAcercaDe = (newState) => {
        setVentanaStateAcercaDe(newState);
    };

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Contacto
    const [ventanaStateContacto, setVentanaStateContacto] = useState(null);

    // Función para actualizar el estado de la ventana Contacto
    const handleVentanaStateChangeContacto = (newState) => {
        setVentanaStateContacto(newState);
    };

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Habilidades
    const [ventanaStateHabilidades, setVentanaStateHabilidades] = useState(null);

    // Función para actualizar el estado de la ventana Habilidades
    const handleVentanaStateChangeHabilidades = (newState) => {
        setVentanaStateHabilidades(newState);
    };

    // Estado para conservar el tamaño, posición y estado de maximización de la ventana Proyectos
    const [ventanaStateProyectos, setVentanaStateProyectos] = useState(null);

    // Función para actualizar el estado de la ventana Proyectos
    const handleVentanaStateChangeProyectos = (newState) => {
        setVentanaStateProyectos(newState);
    };


    const handleClickArchivoAcercaDe = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verAcercaDe && ventanaMinimizadaAcercaDe) {
            toggleMinimizarVentanaAcercaDe();
        } if (verAcercaDe) {
            return
        }
        else {
            toggleVerAcercaDe();
        }
    }

    const handleClickArchivoContacto = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verContacto && ventanaMinimizadaContacto) {
            toggleMinimizarVentanaContacto();
        } if (verContacto) {
            return
        }
        else {
            toggleVerContacto();
        }
    }

    const handleClickArchivoHabilidades = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verHabilidades && ventanaMinimizadaHabilidades) {
            toggleMinimizarVentanaHabilidades();
        } if (verHabilidades) {
            return
        }
        else {
            toggleVerHabilidades();
        }
    }

    const handleClickArchivoProyectos = () => {
        if (draggingRef.current) {
            draggingRef.current = false;
            return;
        }
        if (verProyectos && ventanaMinimizadaProyectos) {
            toggleMinimizarVentanaProyectos();
        } if (verProyectos) {
            return
        }
        else {
            toggleVerProyectos();
        }
    }

    // Determinar si una ventana debe estar semitransparente
    const shouldBeTransparent = (ventanaType) => {
        // Si hay hover y esta ventana no es la que está siendo hovereada, debe estar semitransparente
        return hoveredVentana && hoveredVentana !== ventanaType;
    };

    // Helper para no repetir props de Rnd
    const rndCommon = {
        bounds: "parent",
        enableResizing: false,
        dragHandleClassName: "rnd-handle",
        onDragStart: (e, d) => {
            draggingRef.current = false;
            dragStartPos.current = {
                x: d.x,
                y: d.y,
                time: Date.now()
            };
        },
        onDrag: () => {
            draggingRef.current = true;
        },
        onDragStop: (e, d) => {
            const distX = Math.abs(d.x - dragStartPos.current.x);
            const distY = Math.abs(d.y - dragStartPos.current.y);
            const timeDiff = Date.now() - dragStartPos.current.time;

            // Si se movió muy poco (<5px) y fue rápido (<200ms) => tratar como "tap/click"
            if (distX < 5 && distY < 5 && timeDiff < 200) {
                draggingRef.current = false; // permitir click
            }
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/20
                        flex items-center justify-center gap-2">

            {verAcercaDe && !ventanaMinimizadaAcercaDe && (
                <VentanaPrincipal
                    titulo={infoAcercaDe.titulo}
                    toggleVerVentana={toggleVerAcercaDe}
                    ventanaState={ventanaStateAcercaDe}
                    handleVentanaStateChange={handleVentanaStateChangeAcercaDe}
                    toggleMinimizarVentana={toggleMinimizarVentanaAcercaDe}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.acercaDe}
                    onFocus={() => bringToFront('acercaDe')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('acercaDe')}

                    // Contenido específico
                    contenido={<ContenidoAcercaDe data={infoAcercaDe} />}
                />
            )}

            {verContacto && !ventanaMinimizadaContacto && (
                <VentanaPrincipal
                    titulo={infoContacto.titulo}
                    toggleVerVentana={toggleVerContacto}
                    ventanaState={ventanaStateContacto}
                    handleVentanaStateChange={handleVentanaStateChangeContacto}
                    toggleMinimizarVentana={toggleMinimizarVentanaContacto}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.contacto}
                    onFocus={() => bringToFront('contacto')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('contacto')}

                    // Contenido específico
                    contenido={<ContenidoContacto data={infoContacto} />}
                />
            )}

            {verHabilidades && !ventanaMinimizadaHabilidades && (
                <VentanaPrincipal
                    titulo={infoHabilidades.titulo}
                    toggleVerVentana={toggleVerHabilidades}
                    ventanaState={ventanaStateHabilidades}
                    handleVentanaStateChange={handleVentanaStateChangeHabilidades}
                    toggleMinimizarVentana={toggleMinimizarVentanaHabilidades}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.habilidades}
                    onFocus={() => bringToFront('habilidades')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('habilidades')}

                    // Contenido específico
                    contenido={<ContenidoHabilidades data={infoHabilidades} />}
                />
            )}

            {verProyectos && !ventanaMinimizadaProyectos && (
                <VentanaPrincipal
                    titulo={infoProyectos.titulo}
                    toggleVerVentana={toggleVerProyectos}
                    ventanaState={ventanaStateProyectos}
                    handleVentanaStateChange={handleVentanaStateChangeProyectos}
                    toggleMinimizarVentana={toggleMinimizarVentanaProyectos}

                    // Props para el sistema de z-index
                    zIndex={ventanaZIndexes.proyectos}
                    onFocus={() => bringToFront('proyectos')}

                    // Prop para el efecto semitransparente
                    isTransparent={shouldBeTransparent('proyectos')}

                    // Contenido específico
                    contenido={<ContenidoProyectos data={infoProyectos} />}
                />
            )}

            <Rnd
                {...rndCommon}
                position={iconPositions.acercaDe}
                onDragStop={(e, d) => {
                    const newPos = { x: d.x, y: d.y };
                    if (checkCollision("acercaDe", newPos)) {
                        // ❌ Colisión → revertir
                        setIconPositions((prev) => ({ ...prev }));
                    } else {
                        // ✅ Sin colisión → actualizar
                        setIconPositions((prev) => ({ ...prev, acercaDe: newPos }));
                    }
                }}
            >
                <Archivo
                    onClick={handleClickArchivoAcercaDe}
                    onTouchEnd={handleClickArchivoAcercaDe}
                    nombre={infoAcercaDe.titulo}
                />
            </Rnd>


            <Rnd
                {...rndCommon}
                position={iconPositions.contacto}
                onDragStop={(e, d) => {
                    const newPos = { x: d.x, y: d.y };
                    if (checkCollision("contacto", newPos)) {
                        // ❌ Colisión → revertir
                        setIconPositions((prev) => ({ ...prev }));
                    } else {
                        // ✅ Sin colisión → actualizar
                        setIconPositions((prev) => ({ ...prev, contacto: newPos }));
                    }
                }}
            >
                <Archivo
                    onClick={handleClickArchivoContacto}
                    onTouchEnd={handleClickArchivoContacto}
                    nombre={infoContacto.titulo}
                />
            </Rnd>


            <Rnd
                {...rndCommon}
                position={iconPositions.habilidades}
                onDragStop={(e, d) => {
                    const newPos = { x: d.x, y: d.y };
                    if (checkCollision("habilidades", newPos)) {
                        // ❌ Colisión → revertir
                        setIconPositions((prev) => ({ ...prev }));
                    } else {
                        // ✅ Sin colisión → actualizar
                        setIconPositions((prev) => ({ ...prev, habilidades: newPos }));
                    }
                }}
            >
                <Archivo
                    onClick={handleClickArchivoHabilidades}
                    onTouchEnd={handleClickArchivoHabilidades}
                    nombre={infoHabilidades.titulo}
                />
            </Rnd>


            <Rnd
                {...rndCommon}
                position={iconPositions.proyectos}
                onDragStop={(e, d) => {
                    const newPos = { x: d.x, y: d.y };
                    if (checkCollision("proyectos", newPos)) {
                        // ❌ Colisión → revertir
                        setIconPositions((prev) => ({ ...prev }));
                    } else {
                        // ✅ Sin colisión → actualizar
                        setIconPositions((prev) => ({ ...prev, proyectos: newPos }));
                    }
                }}
            >
                <Archivo
                    onClick={handleClickArchivoProyectos}
                    onTouchEnd={handleClickArchivoProyectos}
                    nombre={infoProyectos.titulo}
                />
            </Rnd>

        </div>
    );
}