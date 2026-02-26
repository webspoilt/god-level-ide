import { RefreshCw, Monitor, Download, Maximize2, Smartphone, MonitorSmartphone, LayoutTemplate } from 'lucide-react';
import { useState } from 'react';

export function ArtifactPreview() {
    const [env, setEnv] = useState<'web' | 'android' | 'ios' | 'windows'>('web');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0 }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-surface)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 600 }}>
                    <Monitor size={16} color="var(--cyan, #22d3ee)" />
                    Universal Preview
                </div>
                <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-dark)', padding: '2px', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                    <button onClick={() => setEnv('web')} style={{ background: env === 'web' ? 'var(--bg-surface)' : 'transparent', color: env === 'web' ? 'white' : 'var(--text-muted)', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                        <Monitor size={12} /> Web
                    </button>
                    <button onClick={() => setEnv('android')} style={{ background: env === 'android' ? 'var(--bg-surface)' : 'transparent', color: env === 'android' ? '#10b981' : 'var(--text-muted)', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                        <Smartphone size={12} /> Android
                    </button>
                    <button onClick={() => setEnv('ios')} style={{ background: env === 'ios' ? 'var(--bg-surface)' : 'transparent', color: env === 'ios' ? '#38bdf8' : 'var(--text-muted)', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                        <MonitorSmartphone size={12} /> iOS
                    </button>
                    <button onClick={() => setEnv('windows')} style={{ background: env === 'windows' ? 'var(--bg-surface)' : 'transparent', color: env === 'windows' ? '#8b5cf6' : 'var(--text-muted)', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px' }}>
                        <LayoutTemplate size={12} /> Windows
                    </button>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} title="Refresh">
                        <RefreshCw size={14} />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} title="Download Asset">
                        <Download size={14} />
                    </button>
                    <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }} title="Fullscreen">
                        <Maximize2 size={14} />
                    </button>
                </div>
            </div>

            {/* Claude-style Artifact Canvas */}
            <div style={{ flex: 1, backgroundColor: env === 'windows' ? '#f3f4f6' : '#ffffff', color: '#000000', display: 'flex', flexDirection: 'column', padding: '16px', overflowY: 'auto', alignItems: 'center', justifyContent: 'center' }}>

                {/* WEB PREVIEW */}
                {env === 'web' && (
                    <div style={{
                        border: '1px dashed #ccc', borderRadius: '12px', width: '100%', height: '100%',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        background: 'linear-gradient(to bottom right, #f8fafc, #e2e8f0)', position: 'relative'
                    }}>
                        {/* Browser Chrome */}
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '32px', background: '#e2e8f0', borderTopLeftRadius: '12px', borderTopRightRadius: '12px', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e' }} />
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f' }} />
                            <div style={{ background: 'white', fontSize: '10px', padding: '2px 8px', borderRadius: '4px', marginLeft: '12px', color: '#64748b' }}>localhost:3000</div>
                        </div>

                        <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', width: '80%', textAlign: 'center', marginTop: '32px' }}>
                            <div style={{ width: '48px', height: '48px', background: 'var(--accent)', borderRadius: '12px', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Sparkles size={24} color="white" />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>React Web Component</h3>
                            <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '24px' }}>Generated via Next.js and Tailwind CSS.</p>
                            <button style={{ background: '#0f172a', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>Click Me</button>
                        </div>
                    </div>
                )}

                {/* ANDROID/IOS PREVIEW */}
                {(env === 'android' || env === 'ios') && (
                    <div style={{
                        width: '320px', height: '600px', border: '12px solid #1a1a1a', borderRadius: '36px',
                        background: 'white', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                    }}>
                        {/* Notch/Dynamic Island */}
                        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: env === 'ios' ? '100px' : '20px', height: env === 'ios' ? '24px' : '20px', background: '#1a1a1a', borderBottomLeftRadius: '12px', borderBottomRightRadius: '12px', zIndex: 10 }} />

                        {/* Status Bar */}
                        <div style={{ height: '40px', background: env === 'android' ? '#10b981' : 'transparent', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 16px', color: env === 'android' ? 'white' : 'black', fontSize: '12px', fontWeight: 600 }}>
                            <span>12:00</span>
                            <div style={{ display: 'flex', gap: '4px' }}>
                                <span>5G</span>
                                <span>100%</span>
                            </div>
                        </div>

                        {/* App Content */}
                        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <h2 style={{ fontSize: '24px', margin: 0, color: env === 'android' ? '#10b981' : '#000' }}>
                                {env === 'android' ? 'Kotlin ComposeApp' : 'SwiftUI Views'}
                            </h2>
                            <div style={{ height: '120px', background: '#f1f5f9', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b' }}>
                                Native UI Block
                            </div>
                            <button style={{ background: env === 'android' ? '#10b981' : '#007AFF', color: 'white', border: 'none', padding: '16px', borderRadius: '24px', fontWeight: 600, width: '100%' }}>
                                Native Action
                            </button>
                        </div>
                    </div>
                )}

                {/* WINDOWS PREVIEW */}
                {env === 'windows' && (
                    <div style={{
                        width: '100%', maxWidth: '600px', height: '400px', background: '#faf9f8',
                        border: '1px solid #d1d1d1', borderRadius: '8px', overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}>
                        {/* Win11 Titlebar */}
                        <div style={{ height: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '12px' }}>
                            <div style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <LayoutTemplate size={14} color="#0078D4" />
                                WinUI 3 Desktop App
                            </div>
                            <div style={{ display: 'flex' }}>
                                <div style={{ width: '46px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px' }}>—</div>
                                <div style={{ width: '46px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>□</div>
                                <div style={{ width: '46px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>✕</div>
                            </div>
                        </div>
                        {/* Nav Pane and Content */}
                        <div style={{ display: 'flex', height: 'calc(100% - 32px)' }}>
                            <div style={{ width: '160px', background: 'rgba(255,255,255,0.5)', borderRight: '1px solid #e5e5e5', padding: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                <div style={{ padding: '6px 8px', background: 'rgba(0,0,0,0.05)', borderRadius: '4px', fontSize: '13px', fontWeight: 600 }}>Home</div>
                                <div style={{ padding: '6px 8px', fontSize: '13px' }}>Settings</div>
                            </div>
                            <div style={{ flex: 1, padding: '24px', background: 'white' }}>
                                <h1 style={{ fontSize: '28px', fontWeight: 400, marginBottom: '16px' }}>Dashboard</h1>
                                <button style={{ background: '#0078D4', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '4px', fontSize: '14px' }}>
                                    WPF Native Button
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                <div style={{ position: 'absolute', bottom: '16px', right: '16px', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '4px 8px', borderRadius: '4px', fontSize: '11px', fontFamily: 'monospace' }}>
                    Rendered in 42ms
                </div>
            </div>
        </div>
    );
}

// Simple internal icon so we don't need excessive imports
function Sparkles({ size, color }: { size: number, color: string }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a4.5 4.5 0 0 1 0-8.962L8.5 1.937A2 2 0 0 0 9.937.5l1.582-6.135a4.5 4.5 0 0 1 8.962 0L22.063 8.5A2 2 0 0 0 23.5 9.937l6.135 1.582a4.5 4.5 0 0 1 0 8.962l-6.135 1.582a2 2 0 0 0-1.437 1.437l-1.582 6.135a4.5 4.5 0 0 1-8.962 0z" />
        </svg>
    )
}
