import {TreeNode} from '../models/TreeNode';

export class ProjectStoreState {
    projectName :string = '';
    levelName :string = '';
    description :string = '';
    authors :string = '';
    nodes :Array<TreeNode> = [];
  }