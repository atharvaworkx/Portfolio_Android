import React, { useState, useRef, useEffect } from 'react';
import { portfolioConfig } from '../../config/portfolio';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';

interface TerminalOutput {
  id: string;
  command?: string;
  output: React.ReactNode;
  type: 'input' | 'output' | 'error' | 'system';
}

export const TerminalApp: React.FC = () => {
  const { developer, skills, projects, social } = portfolioConfig;
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalOutput[]>([
    {
      id: 'welcome-1',
      output: (
        <div>
          <p className="text-emerald-400 font-bold">DEV OS Shell [Version 2.6.4]</p>
          <p className="text-slate-400 text-[11px]">
            Type <span className="text-purple-300 font-semibold">'help'</span> to see available commands.
          </p>
        </div>
      ),
      type: 'system',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    const lower = cmd.toLowerCase();
    const newItems: TerminalOutput[] = [
      {
        id: `in-${Date.now()}`,
        command: cmd,
        output: null,
        type: 'input',
      },
    ];

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    } else if (lower === 'help') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <div className="space-y-1 text-slate-300">
            <p className="text-purple-300 font-bold mb-1">Available System Commands:</p>
            <div className="grid grid-cols-2 gap-y-1 text-[11px] font-mono">
              <div><span className="text-emerald-400 font-bold">help</span> - Show commands list</div>
              <div><span className="text-emerald-400 font-bold">about</span> - Developer summary</div>
              <div><span className="text-emerald-400 font-bold">skills</span> - List primary skills</div>
              <div><span className="text-emerald-400 font-bold">projects</span> - Active projects</div>
              <div><span className="text-emerald-400 font-bold">contact</span> - Contact channels</div>
              <div><span className="text-emerald-400 font-bold">date</span> - Current browser time</div>
              <div><span className="text-emerald-400 font-bold">whoami</span> - Display current user</div>
              <div><span className="text-emerald-400 font-bold">clear</span> - Clear terminal</div>
            </div>
          </div>
        ),
        type: 'output',
      });
    } else if (lower === 'about') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <div className="space-y-1 text-slate-300 text-xs">
            <p className="text-white font-bold">{developer.name} - {developer.title}</p>
            <p className="text-slate-400">{developer.location}</p>
            <p className="text-[11px] text-slate-300 mt-1">{developer.bio}</p>
          </div>
        ),
        type: 'output',
      });
    } else if (lower === 'skills') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-bold">Core Technologies:</p>
            {skills.map((c) => (
              <div key={c.title} className="text-[11px]">
                <span className="text-slate-400 font-mono">{c.title}: </span>
                <span className="text-slate-200">{c.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        ),
        type: 'output',
      });
    } else if (lower === 'projects') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <div className="space-y-1.5 text-xs">
            <p className="text-amber-300 font-bold">Featured Projects:</p>
            {projects.map((p) => (
              <div key={p.id} className="text-[11px] border-l-2 border-purple-500 pl-2">
                <span className="text-white font-bold">{p.title}</span> ({p.category})
                <p className="text-slate-400 text-[10px]">{p.shortDescription}</p>
              </div>
            ))}
          </div>
        ),
        type: 'output',
      });
    } else if (lower === 'contact') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-violet-300 font-bold">Channels:</p>
            <p className="text-slate-300">Email: <span className="text-white">{social.email}</span></p>
            <p className="text-slate-300">GitHub: <span className="text-white">{social.github}</span></p>
            <p className="text-slate-300">LinkedIn: <span className="text-white">{social.linkedin}</span></p>
          </div>
        ),
        type: 'output',
      });
    } else if (lower === 'date') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: <p className="text-slate-200 text-xs font-mono">{new Date().toString()}</p>,
        type: 'output',
      });
    } else if (lower === 'whoami') {
      newItems.push({
        id: `out-${Date.now()}`,
        output: (
          <p className="text-xs font-mono text-emerald-400">
            guest@portfolio-os: authorized visitor [session: active]
          </p>
        ),
        type: 'output',
      });
    } else if (lower.startsWith('echo ')) {
      const msg = cmd.slice(5);
      newItems.push({
        id: `out-${Date.now()}`,
        output: <p className="text-xs font-mono text-slate-200">{msg}</p>,
        type: 'output',
      });
    } else {
      newItems.push({
        id: `err-${Date.now()}`,
        output: (
          <p className="text-rose-400 text-xs font-mono">
            zsh: command not found: {cmd}. Type <span className="text-purple-300 underline">'help'</span> for list of commands.
          </p>
        ),
        type: 'error',
      });
    }

    setHistory((prev) => [...prev, ...newItems]);
    setInputVal('');
  };

  return (
    <div className="h-full flex flex-col font-mono text-xs pb-4">
      {/* Terminal Title / Action Bar */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 select-none">
        <div className="flex items-center gap-1.5 text-slate-400">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-[11px]">sh ~ guest@dev-os</span>
        </div>
        <button
          onClick={() => setHistory([])}
          className="flex items-center gap-1 text-[10px] text-slate-400 hover:text-white px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/10 transition-colors"
          title="Clear screen"
        >
          <Trash2 className="w-3 h-3" />
          <span>Clear</span>
        </button>
      </div>

      {/* Terminal Output Log */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1 select-text">
        {history.map((item) => (
          <div key={item.id}>
            {item.command && (
              <div className="flex items-center gap-1.5 text-slate-400 font-mono">
                <span className="text-emerald-400">➜</span>
                <span className="text-purple-300">~</span>
                <span className="text-white font-semibold">{item.command}</span>
              </div>
            )}
            {item.output && <div className="mt-1 pl-3">{item.output}</div>}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <form onSubmit={handleCommand} className="mt-2 pt-2 border-t border-white/10 flex items-center gap-1.5">
        <span className="text-emerald-400 font-bold shrink-0">➜</span>
        <span className="text-purple-300 shrink-0">~</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Type command (e.g. help, skills, projects)..."
          className="flex-1 bg-transparent border-none text-white text-xs font-mono focus:outline-none placeholder-slate-500"
          autoFocus
        />
        <button
          type="submit"
          className="p-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
          aria-label="Submit command"
        >
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
