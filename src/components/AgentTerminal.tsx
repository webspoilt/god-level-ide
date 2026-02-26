import { Terminal, Activity, Cpu, AlertTriangle, Check, X, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';

export function AgentTerminal() {
    const [logs, setLogs] = useState<string[]>([]);
    const [showListenerPrompt, setShowListenerPrompt] = useState(false);
    const [activeTab, setActiveTab] = useState<'execution' | 'logcat'>('execution');

    useEffect(() => {
        // Mock streaming logs
        const mockLogs = [
            '[SYSTEM] Initializing Zynta Agentic Engine v2.0...',
            '[AEX] Combinatorial auction for task "Refactor UI" opened.',
            '[VFS] Snapshot captured: snap_4892_pre_refactor.',
            '[ORCHESTRATOR] Assigned FrontendAgent #44 to task.',
            '[AGENT_44] Executing: Analyzing DOM structure...',
            '[AGENT_44] Proposal generated: Add ArtifactPreview panel.',
            '[RedTeam] Sandbox execution check passed (0 vulnerabilities).',
            '[SYSTEM] Awaiting user approval for generated changes...',
            '',
            '> python build_script.py',
            'command not found: python',
            '[AUTO-FIX] Intercepting critical build failure...',
            '[AUTO-FIX] Analyzing stack trace: Missing Python interpreter.',
            '[AUTO-FIX] Generating cross-platform installation script.',
            '[AUTO-FIX] Retrying command...',
            '> python build_script.py',
            'Compilation successful. 0 errors, 0 warnings.'
        ];

        let current = 0;
        const interval = setInterval(() => {
            if (current < mockLogs.length) {
                setLogs(prev => [...prev, mockLogs[current]]);
                if (mockLogs[current] === 'command not found: python') {
                    setShowListenerPrompt(true);
                }
                current++;
            } else {
                clearInterval(interval);
            }
        }, 800);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="ide-panel" style={{ gridColumn: '2', borderTop: '1px solid var(--border-color)', background: '#0a0a0f', position: 'relative' }}>
            {/* Terminal Header */}
            <div style={{ display: 'flex', padding: '8px 16px', borderBottom: '1px solid var(--border-color)', fontSize: '12px', gap: '20px', color: 'var(--text-muted)' }}>
                <div
                    onClick={() => setActiveTab('execution')}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                        color: activeTab === 'execution' ? 'var(--text-main)' : 'var(--text-muted)',
                        borderBottom: activeTab === 'execution' ? '2px solid var(--accent)' : '2px solid transparent',
                        paddingBottom: '6px', marginBottom: '-9px'
                    }}>
                    <Terminal size={14} /> Execution Logs
                </div>
                <div
                    onClick={() => setActiveTab('logcat')}
                    style={{
                        display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer',
                        color: activeTab === 'logcat' ? '#10b981' : 'var(--text-muted)',
                        borderBottom: activeTab === 'logcat' ? '2px solid #10b981' : '2px solid transparent',
                        paddingBottom: '6px', marginBottom: '-9px'
                    }}>
                    <Smartphone size={14} /> Logcat / ADB Stream
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', borderBottom: '2px solid transparent', paddingBottom: '6px', marginBottom: '-9px' }}>
                    <Activity size={14} /> Telemetry
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', borderBottom: '2px solid transparent', paddingBottom: '6px', marginBottom: '-9px' }}>
                    <Cpu size={14} /> Agents (1 Active)
                </div>
                {/* Shadow Agents Echo Chamber Status */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--violet)' }}>
                    <Activity size={14} /> Shadow Agents: Reviewing security...
                </div>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 10px #10b981' }} />
                    Engine Online
                </div>
            </div>

            {/* Terminal Body */}
            <div style={{ flex: 1, padding: '12px 16px', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', overflowY: 'auto' }}>
                {activeTab === 'execution' && logs.map((log, i) => {
                    let color = '#a1a1aa';
                    if (log.includes('[SYSTEM]')) color = '#38bdf8';
                    if (log.includes('[AGENT_')) color = '#a78bfa';
                    if (log.includes('[RedTeam]')) color = '#f43f5e';
                    if (log.includes('[VFS]')) color = '#fbbf24';
                    if (log.includes('[AUTO-FIX]')) color = '#10b981'; // Green for the self-healing loop
                    if (log.startsWith('>')) color = 'white';
                    if (log.includes('command not found')) color = '#ef4444';
                    if (log.includes('Compilation successful')) color = 'white';

                    return (
                        <div key={i} style={{ marginBottom: '4px', color }}>
                            {log !== '' && !log.startsWith('>') && !log.includes('command not found') && (
                                <span style={{ opacity: 0.5, marginRight: '8px' }}>
                                    {new Date().toISOString().split('T')[1].substring(0, 8)}
                                </span>
                            )}
                            {log}
                        </div>
                    );
                })}
                {/* 11 original logs + 6 auto-fix logs = 17 total */}
                {activeTab === 'execution' && logs.length === 17 && (
                    <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
                        <span style={{ color: '#10b981' }}>❯</span>
                        <span style={{ color: 'white', animation: 'blink 1s infinite' }}>_</span>
                    </div>
                )}
                {activeTab === 'logcat' && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', opacity: 0.8 }}>
                        <div style={{ color: '#64748b' }}>12-14 10:22:15.123  1024  2048 I SystemServer: Entered the Android system server!</div>
                        <div style={{ color: '#64748b' }}>12-14 10:22:15.456  1024  2048 D ActivityManager: Start proc com.zyntastudio.dev for activity</div>
                        <div style={{ color: '#38bdf8' }}>12-14 10:22:16.789  4096  4096 V AndroidRuntime: Calling main entry com.zyntastudio.dev.MainActivity</div>
                        <div style={{ color: '#fbbf24' }}>12-14 10:22:17.001  4096  4096 W Choreographer: Skipped 45 frames!  The application may be doing too much work on its main thread.</div>
                        <div style={{ color: '#10b981' }}>12-14 10:22:17.555  4096  4096 I ZyntaMobileRunner: React Native / Compose bridge successfully bound.</div>
                        <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                            <span style={{ color: '#10b981' }}>❯</span>
                            <span style={{ color: 'white', animation: 'blink 1s infinite' }}>_</span>
                        </div>
                    </div>
                )}
            </div>

            {/* TERMINAL LISTENER PROMPT */}
            {showListenerPrompt && (
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    right: '24px',
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--accent)',
                    borderRadius: '8px',
                    padding: '16px',
                    width: '380px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                    animation: 'fadeInUp 0.3s ease-out'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: 600, fontSize: '13px' }}>
                        <AlertTriangle size={16} color="#fbbf24" />
                        Terminal Listener Intercepted Error
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        <strong>Zynta Assistant:</strong> "I noticed you don't have Python installed to run this project. Would you like me to run <code style={{ color: 'var(--cyan, #22d3ee)' }}>winget install python</code> for you?"
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                        <button onClick={() => setShowListenerPrompt(false)} style={{ flex: 1, padding: '6px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer', fontWeight: 600 }}>
                            <Check size={14} /> Yes, Install
                        </button>
                        <button onClick={() => setShowListenerPrompt(false)} style={{ flex: 1, padding: '6px', background: 'transparent', color: 'var(--text-main)', border: '1px solid var(--border-color)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', fontSize: '12px', cursor: 'pointer', fontWeight: 500 }}>
                            <X size={14} /> Dismiss
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
