import { Bot, RotateCcw, X } from "lucide-react";
import { chatbotConfig } from "../config";

export default function ChatHeader({
  onClose,
  onReset,
  busy,
}: {
  onClose: () => void;
  onReset: () => void;
  busy: boolean;
}) {
  return (
    <header className="flex items-center gap-3 border-b border-secondary/25 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.18),transparent_42%),linear-gradient(135deg,#111_0%,#080808_100%)] px-4 py-3.5">
      <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary-1 to-secondary text-black shadow-[0_10px_26px_rgba(255,75,0,0.25)]">
        <Bot className="h-5 w-5" strokeWidth={2.2} />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-[#0b0b0b] bg-emerald-400" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h2 id="nexora-chat-title" className="text-[13px] font-bold text-white">
            {chatbotConfig.assistantName} from {chatbotConfig.brandName}
          </h2>
          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide text-emerald-300">
            Online
          </span>
        </div>
        <p className="mt-0.5 text-[11px] text-white/45">
          {chatbotConfig.headerSubtitle}
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        disabled={busy}
        className="flex h-9 w-9 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/5 hover:text-secondary disabled:opacity-40"
        aria-label="Start a new conversation"
        title="Start over"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={onClose}
        className="flex h-9 w-9 items-center justify-center rounded-full text-white/45 transition-colors hover:bg-white/5 hover:text-white"
        aria-label="Close chat"
      >
        <X className="h-5 w-5" />
      </button>
    </header>
  );
}
