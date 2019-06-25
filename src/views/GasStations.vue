<template>
  <v-content>
    <v-container fluid>
      <v-layout justify-center align-top>
        <v-flex text-xs-center v-if="gasStations">
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
            :headers="gasStationsHeaders"
            :items="gasStations"
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
              <tr :data-id="props.item.properties.objectid">
                <td @click="geolocation(props)"><v-icon class="pointer">location_on</v-icon></td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.objectid"
                  :title="props.item.properties.objectid">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.provincia"
                  :title="props.item.properties.provincia">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.municipio"
                  :title="props.item.properties.municipio">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.localidad"
                  :title="props.item.properties.localidad">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.código_postal"
                  :title="props.item.properties.código_postal">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.dirección"
                  :title="props.item.properties.dirección">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.longitud"
                  :title="props.item.properties.longitud">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.latitud"
                  :title="props.item.properties.latitud">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gasolina_95)"
                  :title="price(props.item.properties.precio_gasolina_95)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gasóleo_a)"
                  :title="price(props.item.properties.precio_gasóleo_a)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gasóleo_b)"
                  :title="price(props.item.properties.precio_gasóleo_b)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_bioetanol)"
                  :title="price(props.item.properties.precio_bioetanol)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_nuevo_gasóleo_a)"
                  :title="price(props.item.properties.precio_nuevo_gasóleo_a)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_biodiesel)"
                  :title="price(props.item.properties.precio_biodiesel)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.f__éster_metílico)"
                  :title="price(props.item.properties.f__éster_metílico)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.f__bioalcohol)"
                  :title="price(props.item.properties.f__bioalcohol)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gasolina_98)"
                  :title="price(props.item.properties.precio_gasolina_98)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gas_natural_comprimido)"
                  :title="price(props.item.properties.precio_gas_natural_comprimido)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gas_natural_licuado)"
                  :title="price(props.item.properties.precio_gas_natural_licuado)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="price(props.item.properties.precio_gases_licuados_del_petr)"
                  :title="price(props.item.properties.precio_gases_licuados_del_petr)">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.horario"
                  :title="props.item.properties.horario">
                </td>
                <td
                  class="text-xs-left"
                  v-text="props.item.properties.horario00"
                  :title="props.item.properties.horario00">
                </td>
                <td
                  class="text-xs-left"
                  v-text="dateFormat(props.item.properties.fecha)"
                  :title="dateFormat(props.item.properties.fecha)">
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
        <v-flex text-xs-center v-if="gasStations">
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
import headers from '../utils/gasStationsHeaders';

export default {
  name: 'buscar-gasolineras',
  mixins: [Utils],
  data() {
    return {
      search: '',
      inputSearch: '',
      srcGoogleMaps: '',
      showGoogleMaps: false,
      gasStations: null,
      gasStationsHeaders: headers,
    };
  },
  methods: {
    searchFilter() {
      this.search = this.inputSearch;
    },
    successGasStations(response) {
      this.$store.commit('setGasStations', response.features);
      this.gasStations = Object.assign(this.$store.getters.getGasStations[0]);
      this.$bus.$emit('show-loading', false);
    },
    failureGasStations() {
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
    const gasStations = this.$store.getters.getGasStations;
    if (gasStations.length === 0) {
      ESRI.get('gasStation').then(this.successGasStations.bind(this), this.failureGasStations);
    } else {
      this.gasStations = Object.assign(this.$store.getters.getGasStations[0]);
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
