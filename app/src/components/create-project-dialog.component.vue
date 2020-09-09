<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Create project
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Create project</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Project name" hint="This will be the name of the saved file" v-model="form.projectName" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Level name" hint="This will be the displayed name of the level" v-model="form.levelName" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Description" v-model="form.description"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Author(s)" v-model="form.authors"></v-text-field>
              </v-col>
            </v-row>
            <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="onSave">Save</v-btn>
        </v-card-actions>
          </v-container>
          
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "CreateProjectDialog",
  data() {
    return {
      dialog: false,
      form: {
          projectName: '',
          levelName: '',
          description: '',
          authors: '',
      }
    };
  },
  methods: {
      onSave(){
          this.dialog = false
          this.$store.dispatch('projectStore/openProject', {path: '', project:this.form});
          this.$router.push('Project')
      }
  }
};
</script>
