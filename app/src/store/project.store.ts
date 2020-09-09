import { ProjectStoreState } from './projectStoreState';
import { TreeNode } from '@/models/TreeNode';
import { RootState } from './index';
import { Module, Mutation, Getter } from 'vuex';


const state: ProjectStoreState = new ProjectStoreState()

const openProject: Mutation<ProjectStoreState> = (state: ProjectStoreState, payload:any) => {
    state.pathToFile = payload.path;
    state.projectName = payload.project.projectName;
    state.levelName = payload.project.levelName;
    state.authors = payload.project.authors;
    state.description = payload.project.description;
    if(payload.project.nodes) {
        state.nodes = payload.project.nodes;
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
 
  
