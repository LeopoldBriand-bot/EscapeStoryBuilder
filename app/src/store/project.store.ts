import { ProjectStoreState } from './projectStoreState';
import { TreeNode } from '@/models/TreeNode';
import { RootState } from './index';
import { Module, Mutation, Getter } from 'vuex';


const state: ProjectStoreState = new ProjectStoreState()

const openProject: Mutation<ProjectStoreState> = (state: ProjectStoreState, payload:any) => {
    state.projectName = payload.projectName;
    state.levelName = payload.levelName;
    state.authors = payload.authors;
    state.description = payload.description;
    if(payload.nodes) {
        state.nodes = payload.nodes;
    } else {
        state.nodes.push( new TreeNode({type:'initial'}));
    }
}


export const projectStore: Module<ProjectStoreState, RootState> = {
    state,
    getters: {
        getNodes: (state) => {
            return state.nodes;
        }
    },
    mutations: {
        openProject,
    },
    actions: {
        openProject(context, payload) {
          context.commit('openProject', payload);
        },
    },
    
    namespaced: true
}
 
  
