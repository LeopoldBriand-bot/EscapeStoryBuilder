<template>
  <v-app class="home">
    <v-img
      src="../../public/img/HomeLogo.png"
      aspect-ratio="4"
    ></v-img>

    <v-container fluid>
      <v-row dense>
        <v-col cols="6">
          <v-card class="card" color="#F0FAFF">
            <v-img
              class="small-logo"
              src="../../public/img/Add.png"
              height="194"
            >
            </v-img>
            <v-card-actions>
              <create-project-dialog />
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="card" color="#F0FAFF">
            <v-img
              class="small-logo"
              src="../../public/img/Open.png"
              height="194"
            ></v-img>
            <v-card-actions>
              <open-project-dialog />
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import CreateProjectDialog from "../components/create-project-dialog.component";
import OpenProjectDialog from "../components/open-project-dialog.component";
export default {
  name: "Home",
  components: { CreateProjectDialog, OpenProjectDialog },
  methods: {
    onCreateProject() {
      console.log("create");
    },
    onOpenProject() {
      console.log("open");
    },
  },
};
</script>

<style lang="css">
html,
body {
  height: 100%;
}

.home {
  background-color: #f0faff;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
}

.logo {
  display: block;
  margin: auto;
  width: 700px;
  height: 400px;
}

.card {
  display: block;
  margin: auto;
  width: 194px;
}

.small-logo {
  margin: 2px;
}
</style>
