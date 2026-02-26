import { Smartphone, Play, Square, Loader, Settings, Plus } from 'lucide-react';
import { useState } from 'react';

export function DeviceManager() {
    const [running, setRunning] = useState(false);
    const [status, setStatus] = useState('Offline');

    const handlePower = () => {
        if (!running) {
            setStatus('Booting...');
            setTimeout(() => {
                setRunning(true);
                setStatus('Online (Pixel 7 Pro)');
            }, 1500);
        } else {
            setStatus('Shutting down...');
            setTimeout(() => {
                setRunning(false);
                setStatus('Offline');
            }, 800);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, borderTop: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
                    <Smartphone size={16} color="#10b981" />
                    Device Manager
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} title="Add Device">
                        <Plus size={14} />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} title="Settings">
                        <Settings size={14} />
                    </button>
                </div>
            </div>

            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', flex: running ? 'none' : 1 }}>
                <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: running ? '1px solid #10b981' : '1px solid var(--border-color)',
                    background: running ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-surface)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Pixel 7 Pro API 34</span>
                            <span style={{ fontSize: '11px', color: running ? '#10b981' : 'var(--text-muted)' }}>{status}</span>
                        </div>
                        <button
                            onClick={handlePower}
                            style={{
                                background: running ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                                border: 'none',
                                color: running ? '#ef4444' : '#10b981',
                                width: '32px', height: '32px', borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                cursor: 'pointer', transition: 'all 0.2s'
                            }}
                        >
                            {status.includes('Booting') || status.includes('Shutting') ?
                                <Loader size={16} style={{ animation: 'spin 1s linear infinite' }} /> :
                                (running ? <Square size={14} fill="currentColor" /> : <Play size={16} fill="currentColor" />)
                            }
                        </button>
                    </div>

                    {running && (
                        <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
                            <button style={{ flex: 1, padding: '6px', background: 'var(--accent)', color: 'white', border: 'none', borderRadius: '4px', fontSize: '12px', fontWeight: 600, cursor: 'pointer' }}>
                                Deploy APK
                            </button>
                            <button style={{ flex: 1, padding: '6px', background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', borderRadius: '4px', fontSize: '12px', cursor: 'pointer' }}>
                                Mirror UI
                            </button>
                        </div>
                    )}
                </div>

                <div style={{
                    padding: '12px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-dark)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    opacity: 0.6
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)' }}>Galaxy S23 Ultra</span>
                        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Offline • API 33</span>
                    </div>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                        <Play size={16} fill="currentColor" />
                    </button>
                </div>
            </div>

            {running && (
                <div style={{ flex: 1, background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                        <Smartphone size={32} opacity={0.5} />
                        Device Screen Mirrored
                    </div>
                    <div style={{ position: 'absolute', top: '8px', right: '8px', background: 'rgba(0,0,0,0.5)', padding: '4px 6px', borderRadius: '4px', fontSize: '10px', color: '#10b981', fontWeight: 700 }}>
                        <div style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', marginRight: '4px', boxShadow: '0 0 4px #10b981' }} />
                        60 FPS
                    </div>
                </div>
            )}
        </div>
    );
}
