import React, { useState } from "react";
import Archivo from "./Archivos_accesos_directos/Archivo";
import VentanaPrincipal from "../Ventanas/VentanaPrincipal";

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

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto6}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto7}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto8}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto9LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.texto9LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto9LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto10LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.texto10LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto10LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto11LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.texto11LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto11LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto12}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto13}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto14}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto15}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto16}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto17}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto18}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto19LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.texto19LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto19LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto20LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.texto20LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto20LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto21}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto22}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto23}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto24}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto25}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto26LinkTexto}
            </p>
        </div>

        <div className="mb-4">
            <a href={data.texto26LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto26LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto27LinkTexto}
            </p>
        </div>

        <div className="mb-7">
            <a href={data.texto27LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto27LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto28}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto29}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto30}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto31}
            </p>
        </div>

        <div className="mb-4">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto32}
            </p>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto33LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.texto33LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto33LinkEnlace}
            </a>
        </div>

        <div className="mb-2">
            <p className="text-black dark:text-white text-sm whitespace-pre-wrap">
                {data.texto34LinkTexto}
            </p>
        </div>

        <div className="mb-2">
            <a href={data.texto34LinkEnlace}
                className="inline break-words text-sm 
                        text-black dark:text-white whitespace-pre-wrap"
                target="_blank"
                rel="noopener noreferrer"
            >
                {data.texto34LinkEnlace}
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

            <Archivo
                onClick={handleClickArchivoAcercaDe}
                nombre={infoAcercaDe.titulo}
            />

            <Archivo
                onClick={handleClickArchivoContacto}
                nombre={infoContacto.titulo}
            />

            <Archivo
                onClick={handleClickArchivoHabilidades}
                nombre={infoHabilidades.titulo}
            />

            <Archivo
                onClick={handleClickArchivoProyectos}
                nombre={infoProyectos.titulo}
            />

        </div>
    );
}