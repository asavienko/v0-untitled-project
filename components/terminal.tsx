interface TerminalProps {
  content: string
}

export function Terminal({ content }: TerminalProps) {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="ml-2 text-xs text-zinc-400 font-mono">kaas-cli</div>
      </div>
      <div className="terminal-content">
        <div className="animate-typing">
          <pre className="whitespace-pre-wrap">{content}</pre>
        </div>
        <div className="h-4 w-2 bg-emerald-400 inline-block animate-pulse-subtle ml-1"></div>
      </div>
    </div>
  )
}
