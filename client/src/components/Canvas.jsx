import {
    ReactFlow,
    MiniMap,
    Background,
    BackgroundVariant,
    Controls,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import ResizableNode from './Resizable';
import ResizableNodeSelected from './Selected';
import CustomResizerNode from './Resizer';
import { useState } from 'react';

const nodeTypes = {
    ResizableNode,
    ResizableNodeSelected,
    CustomResizerNode,
};

const initialEdges = [];

export default function Canvas() {

    const [nodeId, setNodeId] = useState(4);

    const [nodes, setNodes] = useState([
        {
            id: '1',
            type: 'CustomResizerNode',
            data: { label: 'NodeResizer' },
            position: { x: 0, y: 0 },
            style: {
                background: 'black',
                border: '1px solid black',
                borderRadius: 15,
                fontSize: 12,
            },
        },
        {
            id: '2',
            type: 'CustomResizerNode',
            data: { label: 'NodeResizer when selected' },
            position: { x: 100, y: 300 },
            style: {
                background: 'black',
                border: '1px solid black',
                borderRadius: 15,
                fontSize: 12,
                padding: 5,
            },
        },
        {
            id: '3',
            type: 'CustomResizerNode',
            data: { label: 'Custom Resize Icon' },
            position: { x: 150, y: 150 },
            style: {
                background: 'black',
                fontSize: 12,
                border: '1px solid black',
                padding: 5,
                borderRadius: 15,
                height: 100,
            },
        },
    ]);

    const [text, setText] = useState('')

    const handleAddClick = () => {
        const newId = (nodeId + 1).toString();
        const newNode = {
            id: newId,
            type: 'CustomResizerNode',
            data: { label: text },
            position: { x: 150, y: 150 },
            style: {
                background: 'black',
                fontSize: 12,
                border: '1px solid black',
                padding: 5,
                borderRadius: 15,
                height: 100,
            },
        }
        setNodes(prevNodes => [...prevNodes, newNode]);
        setText('')
        setNodeId(nodeId+1)
    }

    return (
        <div>
            <input type='text' placeholder='Enter text' onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddClick}>Add</button>
            <div style={{ height: '100vh', width: '100vw' }}>
                <ReactFlow
                    defaultNodes={nodes}
                    defaultEdges={initialEdges}
                    className="react-flow-node-resizer-example"
                    minZoom={0.2}
                    maxZoom={4}
                    fitViewOnLoad
                    nodeTypes={nodeTypes}
                >
                    <Background variant={BackgroundVariant.Dots} />
                    <MiniMap />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    );
}
