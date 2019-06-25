<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center align-top>
        <v-flex text-xs-center v-if="beaches">
          <v-card-title>
            <v-text-field
              @keyup.enter="searchFilter"
              append-icon="search"
              label="Buscar"
              single-line
              hide-details
              v-model="inputSearch">
            </v-text-field>
          </v-card-title>
          <v-data-table
            :headers="beachesHeaders"
            :items="beaches"
            class="elevation-10"
            :search="search"
            :custom-sort="customSort"
            :custom-filter="customFilter">
            <template v-slot:no-data>
              <v-alert :value="true" color="error" icon="warning" class="text-xs-left">
                No se ha podido cargar la información en la tabla
              </v-alert>
            </template>

            <template v-slot:items="props">
              <tr :data-id="props.item.properties.OBJECTID">
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.OBJECTID"
                  :title="props.item.properties.OBJECTID">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Comunidad_"
                  :title="props.item.properties.Comunidad_">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Provincia"
                  :title="props.item.properties.Provincia">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Isla"
                  :title="props.item.properties.Isla">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Código_INE"
                  :title="props.item.properties.Código_INE">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Término_Mu"
                  :title="props.item.properties.Término_Mu">
                </td>
                <td class="text-xs-left">
                  <a :href="props.item.properties.Web_munici" target="_blank">WEB</a>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.identifica"
                  :title="props.item.properties.identifica">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Nombre"
                  :title="props.item.properties.Nombre">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Nombre_alt"
                  :title="props.item.properties.Nombre_alt">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Nombre_a_1"
                  :title="props.item.properties.Nombre_a_1">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Descripció"
                  :title="props.item.properties.Descripció">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Longitud"
                  :title="props.item.properties.Longitud">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Anchura"
                  :title="props.item.properties.Anchura">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Variación_"
                  :title="props.item.properties.Variación_">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Grado_ocup"
                  :title="props.item.properties.Grado_ocup">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Grado_urba"
                  :title="props.item.properties.Grado_urba">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Paseo_marí">
                    <i
                      class="material-icons"
                      v-text="icon(props.item.properties.Paseo_marí)">
                    </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Tipo_paseo"
                  :title="props.item.properties.Tipo_paseo">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Tipo_de_art"
                  :title="props.item.properties.Tipo_de_art">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Condicione"
                  :title="props.item.properties.Condicione">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Zona_fonde">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Zona_fonde)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Nudismo">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Nudismo)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Vegetación">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Vegetación)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Vegetaci_1"
                  :title="props.item.properties.Vegetaci_1">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Actuacione">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Actuacione)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Actuacio_1"
                  :title="props.item.properties.Actuacio_1">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Bandera_az">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Bandera_az)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Auxilio_y_">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Auxilio_y_)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Auxilio_y1"
                  :title="props.item.properties.Auxilio_y1">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Señalizaci">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Señalizaci)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Señaliza_1"
                  :title="props.item.properties.Señaliza_1">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Forma_de_a"
                  :title="props.item.properties.Forma_de_a">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Señaliza_2">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Señaliza_2)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Acceso_dis">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Acceso_dis)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Carretera_"
                  :title="props.item.properties.Carretera_">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Autobús">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Autobús)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Autobús_ti"
                  :title="props.item.properties.Autobús_ti">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Aparcamien">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Aparcamien)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Aparcami_1"
                  :title="props.item.properties.Aparcami_1">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Aparcami_2"
                  :title="props.item.properties.Aparcami_2">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Aseos">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Aseos)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Lavapies">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Lavapies)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Duchas">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Duchas)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Teléfonos">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Teléfonos)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Papelera">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Papelera)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Servicio_I"
                  :title="props.item.properties.Servicio_I">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Alquiker_s"
                  :title="props.item.properties.Alquiker_s">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Alquiler_h">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Alquiler_h)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Alquiler_n">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Alquiler_n)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Oficina_tu">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Oficina_tu)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Establecim">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Establecim)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Establec_1">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Establec_1)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Zona_infan">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Zona_infan)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Zona_depor">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Zona_depor)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Club_naúti">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Club_naúti)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Submarinis">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Submarinis)">
                  </i>
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Zona_Surf">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Zona_Surf)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Observacio"
                  :title="props.item.properties.Observacio">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Coordenada"
                  :title="props.item.properties.Coordenada">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Coordenada_1"
                  :title="props.item.properties.Coordenada_1">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Huso"
                  :title="props.item.properties.Huso">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Coordenada_2"
                  :title="props.item.properties.Coordenada_2">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Coordenada_3"
                  :title="props.item.properties.Coordenada_3">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Puerto_dep"
                  :title="props.item.properties.Puerto_dep">
                </td>
                <td class="text-xs-left">
                  <a :href="props.item.properties.Web_puerto" target="_blank">WEB</a>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Distancia_"
                  :title="props.item.properties.Distancia_">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Hospital"
                  :title="props.item.properties.Hospital">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Direción_"
                  :title="props.item.properties.Direción_">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Teléfono_H"
                  :title="props.item.properties.Teléfono_H">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Distancia1"
                  :title="props.item.properties.Distancia1">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Composició"
                  :title="props.item.properties.Composició">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Fachada_Li"
                  :title="props.item.properties.Fachada_Li">
                </td>
                <td
                  class="text-xs-center"
                  :title="props.item.properties.Espacio_pr">
                  <i
                    class="material-icons"
                    v-text="icon(props.item.properties.Espacio_pr)">
                  </i>
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.Espacio__1"
                  :title="props.item.properties.Espacio__1">
                </td>
                <td class="text-xs-left">
                  <a :href="props.item.properties.URL_MAGRAM" target="_blank">WEB</a>
                </td>
              </tr>
            </template>

            <template v-slot:no-results>
              <v-alert :value="true" color="error" icon="warning" class="text-xs-left">
                La búsqueda de "{{ search }}" no ha devuelto ningún resultado
              </v-alert>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container v-show="showGoogleMaps" fluid>
      <v-layout justify-center align-top>
        <v-flex text-xs-center v-if="beaches">
          <v-card elevation="10">
            <v-card-title>
              <iframe
                width="100%"
                height="550"
                :src="srcGoogleMaps"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                allowfullscreen>
              </iframe>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import ESRI from '../services/API/ESRI';
import Utils from '../mixins/utils';
import headers from '../utils/beachesHeaders';

export default {
  name: 'buscar-beaches',
  mixins: [Utils],
  data() {
    return {
      search: '',
      inputSearch: '',
      srcGoogleMaps: '',
      showGoogleMaps: false,
      beaches: null,
      beachesHeaders: headers,
    };
  },
  methods: {
    searchFilter() {
      this.search = this.inputSearch;
    },
    successBeaches(response) {
      this.$store.commit('setBeaches', response.features);
      this.beaches = Object.assign(this.$store.getters.getBeaches[0]);
      this.$bus.$emit('show-loading', false);
    },
    failureBeaches() {
      this.$bus.$emit('show-loading', false);
    },
    customSort(items, index, isDescending) {
      items.sort((a, b) => {
        const valueA = a.properties[index];
        const valueB = b.properties[index];
        if (typeof a.properties[index] === 'string' || typeof b.properties[index] === 'string') {
          return isDescending ? 1 : -1;
        }
        return isDescending ? valueB - valueA : valueA - valueB;
      });
      return items;
    },
    price(item) {
      return item ? `${item}€` : item;
    },
    customFilter(items, search) {
      if (search.length > 0) {
        return items.filter(item => Object.values(item.properties).filter((dataFilter) => {
          const prop = (dataFilter || '').toString().toUpperCase();
          const status = prop.includes(search.toUpperCase());
          return status;
        }).length > 0);
      }
      return items;
    },
    geolocation(props) {
      let geolocation = false;
      const selectedRow = document.querySelector('.selected-row');
      if (selectedRow) {
        if (selectedRow.getAttribute('data-id') === props.item.properties.objectid.toString()) {
          document.querySelector(`[data-id="${props.item.properties.objectid}"]`).classList.remove('selected-row');
        } else {
          document.querySelectorAll('[data-id]').forEach(el => el.classList.remove('selected-row'));
          document.querySelector(`[data-id="${props.item.properties.objectid}"]`).classList.add('selected-row');
          geolocation = true;
        }
      } else {
        document.querySelector(`[data-id="${props.item.properties.objectid}"]`).classList.add('selected-row');
        geolocation = true;
      }
      if (geolocation) {
        const url = 'https://www.google.com/maps/embed/v1/place?';
        const q = `q=${props.item.properties.latitud},${props.item.properties.longitud}&`;
        const key = 'key=AIzaSyAP353XqzSRqXEP4BjgUqgltj9gHOJ4PS4&';
        this.srcGoogleMaps = `${url}${q}${key}`;
        this.showGoogleMaps = true;
      }
    },
  },
  created() {
    this.$bus.$emit('show-loading', true);
    const beaches = this.$store.getters.getBeaches;
    if (beaches.length === 0) {
      ESRI.get('beaches').then(this.successBeaches.bind(this), this.failureBeaches);
    } else {
      this.beaches = Object.assign(this.$store.getters.getBeaches[0]);
      this.$bus.$emit('show-loading', false);
    }
  },
};
</script>

<style scoped>
  td {
    max-width: 300px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .selected-row {
    background-color: #3f51b5 !important;
    color: #ffffff !important;
  }
  .pointer {
    cursor: pointer;
  }
</style>
