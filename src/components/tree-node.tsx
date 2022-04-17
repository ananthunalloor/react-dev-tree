import { TreeNode as nodeData } from '../types/common';

interface TreeNodeProps {
    data: nodeData[];
}

function TreeNode(porps: TreeNodeProps) {
    const { data } = porps;

    return (
        <>
            {data.map(node =>
                <details key={node.id} className="ml-5">
                    <summary className="p-2 bg-white max-w-max">{node.title}</summary>
                    <TreeNode data={node.children} />
                </details>
            )}
        </>
    )
}

export default TreeNode;