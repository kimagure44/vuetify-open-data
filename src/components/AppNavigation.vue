<template>
  <div>
    <v-navigation-drawer fixed v-model="drawer" app>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inicio</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/buscar-gasolineras">
          <v-list-tile-action>
            <v-icon>local_gas_station</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Buscar gasolineras (España)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/buscar-playas">
          <v-list-tile-action>
            <v-icon>beach_access</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Buscar playas (España)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>OPEN DATA & VUETIFY</v-toolbar-title>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: 'app-navigation',
  data: () => ({
    drawer: null,
  }),
};
</script>
