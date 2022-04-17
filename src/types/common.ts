export type TreeNode = {
    id?: number;
    title?: string;
    astClass?: string;
    level?: number;
    parentId?: number;
    plantObjId?: number;
    desig?: string;
    desigLocal?: string;
    activeStatus?: boolean;
    parentName?: string;
    plantId?: number;
    children: TreeNode[];
    equipActive?: boolean;
    equipId?: number;
}