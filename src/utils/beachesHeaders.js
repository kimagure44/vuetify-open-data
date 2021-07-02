const headers = [
  {
    text: 'Object ID', value: 'OBJECTID', align: 'left',
  },
  {
    text: 'Comunidad', value: 'Comunidad_', align: 'left',
  },
  {
    text: 'Provincia', value: 'Provincia', align: 'left',
  },
  {
    text: 'Isla', value: 'Isla', align: 'left',
  },
  {
    text: 'Código INE', value: 'código_INE', align: 'left',
  },
  {
    text: 'Término municipal', value: 'Término_Mu', align: 'left', sortable: false,
  },
  {
    text: 'Web', value: 'Web_munici', align: 'left', sortable: false,
  },
  {
    text: 'Identifica', value: 'Identifica', align: 'left', sortable: false,
  },
  {
    text: 'Nombre', value: 'Nombre', align: 'left',
  },
  {
    text: 'Nombre alternativo 1', value: 'Nombre_alt', align: 'left',
  },
  {
    text: 'Nombre alternativo 2', value: 'Nombre_a_1', align: 'left',
  },
  {
    text: 'Descripción', value: 'Descripció', align: 'left',
  },
  {
    text: 'Longitud', value: 'Longitud', align: 'left',
  },
  {
    text: 'Anchura', value: 'Anchura', align: 'left',
  },
  {
    text: 'Variación', value: 'Variación_', align: 'left',
  },
  {
    text: 'Grado ocupación', value: 'Grado_ocup', align: 'left',
  },
  {
    text: 'Grado urbanizable', value: 'Grado_urba', align: 'left',
  },
  {
    text: 'Paseo marítimo', value: 'Paseo_marí',
  },
  {
    text: 'Tipo de paseo', value: 'Tipo_paseo',
  },
  {
    text: 'Tipo de Ar', value: 'Tipo_de_ar', align: 'left',
  },
  {
    text: 'Condiciones', value: 'Condicione', align: 'left', sortable: false,
  },
  {
    text: 'Zona fonde', value: 'Zona_fonde', align: 'left', sortable: false,
  },
  {
    text: 'Nudismo', value: 'Nudismo', align: 'left',
  },
  {
    text: 'Vegetación', value: 'Vegetación', align: 'left',
  },
  {
    text: 'Vegetación 1', value: 'Vegetaci_1', align: 'left',
  },
  {
    text: 'Actuaciones', value: 'Actuacione', align: 'left',
  },
  {
    text: 'Actuaciones 1', value: 'Actuacio_1', align: 'left',
  },
  {
    text: 'Bandera', value: 'Bandera_az', align: 'left',
  },
  {
    text: 'Auxilio Y', value: 'Auxilio_y_', align: 'left',
  },
  {
    text: 'Auxilio Y 1', value: 'Auxilio_y1', align: 'left',
  },
  {
    text: 'Señalización', value: 'Señalizaci', align: 'left',
  },
  {
    text: 'Señalización 1', value: 'Señaliza_1', align: 'left',
  },
  {
    text: 'Forma de A', value: 'forma_de_a', align: 'left',
  },
  {
    text: 'Señalización 2', value: 'Señaliza_2', align: 'left',
  },
  {
    text: 'Acceso discapacitados', value: 'acceso_dis', align: 'left',
  },
  {
    text: 'Carretera', value: 'Carretera_', align: 'left',
  },
  {
    text: 'Autobús', value: 'Autobús', align: 'left',
  },
  {
    text: 'Autobús TI', value: 'Autobús_ti', align: 'left',
  },
  {
    text: 'Aparcamiento', value: 'Aparcamien', align: 'left',
  },
  {
    text: 'Aparcamiento 1', value: 'Aparcami_1', align: 'left',
  },
  {
    text: 'Aparcamiento 2', value: 'Aparcami_2', align: 'left',
  },
  {
    text: 'Aseos', value: 'Aseos', align: 'left',
  },
  {
    text: 'Lavapies', value: 'Lavapies', align: 'left',
  },
  {
    text: 'Duchas', value: 'Duchas', align: 'left',
  },
  {
    text: 'Teléfonos', value: 'Teléfonos', align: 'left',
  },
  {
    text: 'Papeleras', value: 'Papelera', align: 'left',
  },
  {
    text: 'Servicio I', value: 'Servicio_I', align: 'left',
  },
  {
    text: 'Alquiler S', value: 'Alquiler_s', align: 'left',
  },
  {
    text: 'Alquiler H', value: 'Alquiler_h', align: 'left',
  },
  {
    text: 'Alquiler N', value: 'Alquiler_n', align: 'left',
  },
  {
    text: 'Oficina de turismo', value: 'Oficina_tu', align: 'left',
  },
  {
    text: 'Establecimiento', value: 'Establecim', align: 'left',
  },
  {
    text: 'Establecimiento 1', value: 'Establec_1', align: 'left',
  },
  {
    text: 'Zona infantil', value: 'Zona_infan', align: 'left',
  },
  {
    text: 'Zona deportiva', value: 'Zona_depor', align: 'left',
  },
  {
    text: 'Club naútico', value: 'Club_naúti', align: 'left',
  },
  {
    text: 'Submarinismo', value: 'Submarinis', align: 'left',
  },
  {
    text: 'Zona de Surf', value: 'Zona_Surf', align: 'left',
  },
  {
    text: 'Observaciones', value: 'Observacio', align: 'left',
  },
  {
    text: 'Coordenada', value: 'Coordenada', align: 'left',
  },
  {
    text: 'Coordenada 1', value: 'Coordenada_1', align: 'left',
  },
  {
    text: 'Huso', value: 'Huso', align: 'left',
  },
  {
    text: 'Coordenada 2', value: 'Coordenada_2', align: 'left',
  },
  {
    text: 'Coordenada 3', value: 'Coordenada_3', align: 'left',
  },
  {
    text: 'Puerto deportivo', value: 'Puerto_dep', align: 'left',
  },
  {
    text: 'WEB puerto', value: 'Web_puerto', align: 'left',
  },
  {
    text: 'Distancia', value: 'Distancia_', align: 'left',
  },
  {
    text: 'Hospital', value: 'Hospital', align: 'left',
  },
  {
    text: 'Dirección', value: 'Dirección_', align: 'left',
  },
  {
    text: 'Teléfono', value: 'Teléfono_H', align: 'left',
  },
  {
    text: 'Distancia 1', value: 'Distancia1', align: 'left',
  },
  {
    text: 'Composición', value: 'Composició', align: 'left',
  },
  {
    text: 'Fachada Li', value: 'Fachada_Li', align: 'left',
  },
  {
    text: 'Espacio pr', value: 'Espacio_pr', align: 'left',
  },
  {
    text: 'Espacio 1', value: 'Espacio__1', align: 'left',
  },
  {
    text: 'Mas información', value: 'URL_MAGRAM', align: 'left',
  },
];

export default headers;
