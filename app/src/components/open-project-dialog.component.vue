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
          Open project
        </v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
          <v-file-input accept=".json" label="Open project file" required v-model="file"></v-file-input>
          <v-btn primary right @click="openFile">Open File</v-btn>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "OpenProjectDialog",
  data() {
    return {
      dialog: false,
      file: null,
    };
  },
  methods: {
    openFile(){
      if (!this.file) {
        //TODO: Check file and file content
      }
      const reader = new FileReader();
      
      reader.readAsText(this.file);
      reader.
      reader.onload = () => {
        const data = JSON.parse(reader.result);
        if(data.app === 'esb' && data.version <= 1){
          this.$store.dispatch('projectStore/openProject', data.project);
        }
      }
    }
  }
};
</script>
