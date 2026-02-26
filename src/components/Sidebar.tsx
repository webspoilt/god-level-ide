import { Folder, Search, MessageSquare, Settings, ChevronRight, FileCode2, TerminalSquare, Github, Puzzle, Globe, RefreshCw, Plus, Download } from 'lucide-react';
import { useState } from 'react';

export function Sidebar() {
  const [activeView, setActiveView] = useState<'explorer' | 'search' | 'github' | 'plugins' | 'scraper'>('explorer');

  return (
    <div style={{ display: 'flex', gridRow: '1 / -1', height: '100%', borderRight: '1px solid var(--border-color)' }}>

      {/* Narrow Activity Bar (VS Code Style) */}
      <div style={{ width: '48px', background: 'var(--bg-dark)', borderRight: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '12px 0' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
          <button onClick={() => setActiveView('explorer')} style={{ background: 'transparent', border: 'none', color: activeView === 'explorer' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
            {activeView === 'explorer' && <div style={{ position: 'absolute', left: '-12px', top: '0', bottom: '0', width: '2px', background: 'var(--accent)' }} />}
            <Folder size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => setActiveView('search')} style={{ background: 'transparent', border: 'none', color: activeView === 'search' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
            {activeView === 'search' && <div style={{ position: 'absolute', left: '-12px', top: '0', bottom: '0', width: '2px', background: 'var(--accent)' }} />}
            <Search size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => setActiveView('github')} style={{ background: 'transparent', border: 'none', color: activeView === 'github' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
            {activeView === 'github' && <div style={{ position: 'absolute', left: '-12px', top: '0', bottom: '0', width: '2px', background: 'var(--accent)' }} />}
            <Github size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => setActiveView('plugins')} style={{ background: 'transparent', border: 'none', color: activeView === 'plugins' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
            {activeView === 'plugins' && <div style={{ position: 'absolute', left: '-12px', top: '0', bottom: '0', width: '2px', background: 'var(--accent)' }} />}
            <Puzzle size={24} strokeWidth={1.5} />
          </button>
          <button onClick={() => setActiveView('scraper')} style={{ background: 'transparent', border: 'none', color: activeView === 'scraper' ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', position: 'relative' }}>
            {activeView === 'scraper' && <div style={{ position: 'absolute', left: '-12px', top: '0', bottom: '0', width: '2px', background: 'var(--accent)' }} />}
            <Globe size={24} strokeWidth={1.5} />
          </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <MessageSquare size={24} strokeWidth={1.5} />
          </button>
          <button style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <Settings size={24} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Expansive Sidebar Content Area */}
      <div className="ide-panel" style={{ flex: 1, borderTop: 'none', borderBottom: 'none', borderLeft: 'none', borderRight: 'none', background: 'var(--bg-panel)' }}>

        {/* EXPLORER VIEW */}
        {activeView === 'explorer' && (
          <div style={{ padding: '12px', flex: 1, overflowY: 'auto' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px', letterSpacing: '1px' }}>
              Explorer
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '13px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px', borderRadius: '4px' }}>
                <ChevronRight size={14} /> <Folder size={14} color="var(--accent)" /> src
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px 4px 4px 20px', borderRadius: '4px', background: 'var(--bg-surface)' }}>
                <FileCode2 size={14} color="#e34c26" /> App.tsx
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px 4px 4px 20px', borderRadius: '4px' }}>
                <FileCode2 size={14} color="#2965f1" /> styles.css
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: '4px 4px 4px 20px', borderRadius: '4px' }}>
                <TerminalSquare size={14} color="#f7df1e" /> main.tsx
              </div>
            </div>
          </div>
        )}

        {/* GITHUB VIEW */}
        {activeView === 'github' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Source Control</span>
              <RefreshCw size={12} cursor="pointer" />
            </div>
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
                <Github size={32} color="var(--text-main)" style={{ margin: '0 auto 12px' }} />
                <div style={{ fontSize: '13px', fontWeight: 600, marginBottom: '8px' }}>GitHub Integration</div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>
                  Clone, pull, and push directly to GitHub without using the terminal.
                </div>
                <button style={{ width: '100%', background: 'var(--text-main)', color: 'var(--bg-dark)', border: 'none', padding: '8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Github size={14} /> Connect to GitHub
                </button>
              </div>
            </div>
          </div>
        )}

        {/* PLUGINS VIEW */}
        {activeView === 'plugins' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Extensions</span>
              <Plus size={14} cursor="pointer" />
            </div>
            <div style={{ padding: '12px' }}>
              <input type="text" placeholder="Search VS Code Extensions..." style={{ width: '100%', padding: '6px 8px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', color: 'white', borderRadius: '4px', fontSize: '12px', outline: 'none', marginBottom: '16px' }} />

              <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Installed Native Hosts</div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', gap: '12px', background: 'var(--bg-surface)', padding: '12px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                  <div style={{ width: '32px', height: '32px', background: '#007ACC', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800 }}>VS</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 600 }}>VS Code Extension Host</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>Runs .vsix extensions natively in Tauri</div>
                  </div>
                  <Settings size={14} color="var(--text-muted)" style={{ cursor: 'pointer' }} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SCRAPER VIEW */}
        {activeView === 'scraper' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ padding: '12px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px', borderBottom: '1px solid var(--border-color)' }}>
              Agentic Web Scraper
            </div>
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Drop a URL here. A background agent will invisibly navigate to the page, parse the layout tree, and inject the UI elements directly into your codebase.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                <input type="text" placeholder="https://dribbble.com/..." style={{ width: '100%', padding: '8px', background: 'var(--bg-dark)', border: '1px solid var(--accent)', color: 'white', borderRadius: '4px', fontSize: '12px', outline: 'none' }} />
                <button style={{ width: '100%', background: 'var(--accent)', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', fontSize: '12px', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Download size={14} /> Scrape & Import Design
                </button>
              </div>

              <div style={{ marginTop: '24px', borderTop: '1px dashed var(--border-color)', paddingTop: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase' }}>Recent Extractions</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', padding: '8px', background: 'var(--bg-surface)', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                  <span style={{ color: 'var(--cyan)' }}>Tailwind_Navbar.tsx</span>
                  <span style={{ color: 'var(--text-muted)' }}>Yesterday</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
