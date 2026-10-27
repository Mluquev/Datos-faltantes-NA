import React from 'react';
import {AbsoluteFill, Composition} from 'remotion';

import {FORMATO} from './styles/formato';
import {DURACION_MARCADOR_SEGUNDOS} from './styles/tiempos';
import {TOKENS_GUIA} from './styles/tokens';
import {ZONAS_SEGURAS} from './styles/zonasSeguras';

type InfograficoProps = {
  mostrarZonasSeguras?: boolean;
};

const ZonasSeguras: React.FC = () => (
  <>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: ZONAS_SEGURAS.margenSuperior,
        backgroundColor: TOKENS_GUIA.colorZonaSegura,
        borderBottom: `${TOKENS_GUIA.grosorBordeZonaSegura}px dashed ${TOKENS_GUIA.colorBordeZonaSegura}`,
        color: TOKENS_GUIA.colorEtiquetaZonaSegura,
        fontFamily: TOKENS_GUIA.familiaTipografica,
        fontSize: TOKENS_GUIA.tamanoEtiquetaZonaSegura,
        padding: TOKENS_GUIA.espacioEtiquetaZonaSegura,
        boxSizing: 'border-box',
      }}
    >
      Zona reservada para la interfaz superior
    </div>
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: ZONAS_SEGURAS.margenInferior,
        backgroundColor: TOKENS_GUIA.colorZonaSegura,
        borderTop: `${TOKENS_GUIA.grosorBordeZonaSegura}px dashed ${TOKENS_GUIA.colorBordeZonaSegura}`,
        color: TOKENS_GUIA.colorEtiquetaZonaSegura,
        fontFamily: TOKENS_GUIA.familiaTipografica,
        fontSize: TOKENS_GUIA.tamanoEtiquetaZonaSegura,
        padding: TOKENS_GUIA.espacioEtiquetaZonaSegura,
        boxSizing: 'border-box',
      }}
    >
      Zona reservada para la interfaz inferior
    </div>
  </>
);

const Infografico: React.FC<InfograficoProps> = ({mostrarZonasSeguras = false}) => (
  <AbsoluteFill
    style={{
      alignItems: 'center',
      backgroundColor: TOKENS_GUIA.colorFondo,
      color: TOKENS_GUIA.colorTexto,
      display: 'flex',
      fontFamily: TOKENS_GUIA.familiaTipografica,
      justifyContent: 'center',
    }}
  >
    <div style={{fontSize: TOKENS_GUIA.tamanoTextoMarcador, textAlign: 'center'}}>
      Infográfico: pendiente
    </div>
    {mostrarZonasSeguras ? <ZonasSeguras /> : null}
  </AbsoluteFill>
);

export const RemotionRoot: React.FC = () => (
  <Composition
    id="Infografico"
    component={Infografico}
    durationInFrames={DURACION_MARCADOR_SEGUNDOS * FORMATO.fps}
    fps={FORMATO.fps}
    width={FORMATO.ancho}
    height={FORMATO.alto}
    defaultProps={{mostrarZonasSeguras: false}}
  />
);
