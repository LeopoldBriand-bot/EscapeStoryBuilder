import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import {projectStore} from './project.store'
import { ProjectStoreState } from './projectStoreState';
Vue.use(Vuex);


export interface RootState {
  projectStore: ProjectStoreState,
}

const store: StoreOptions<RootState> = {
  modules: {
    projectStore,
  },
};

export default new Vuex.Store<RootState>(store);