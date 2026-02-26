import { Sidebar } from './components/Sidebar';
import { EditorArea } from './components/EditorArea';
import { ArtifactPreview } from './components/ArtifactPreview';
import { AgentTerminal } from './components/AgentTerminal';
import { DeviceManager } from './components/DeviceManager';

function App() {
    return (
        <div className="ide-layout">
            {/* 260px Sidebar */}
            <Sidebar />

            {/* Center Top: Editor Region */}
            <EditorArea />

            {/* Bottom: Terminal Region spanning under the editor */}
            <AgentTerminal />

            {/* 300px Right Panel: Preview and Device Manager split vertically */}
            <div className="ide-panel" style={{ gridRow: '1 / span 2', borderLeft: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <ArtifactPreview />
                <DeviceManager />
            </div>
        </div>
    );
}

export default App;
