"use client";

import { useState } from "react";

function EllipsisIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

function EditIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}

function TrashIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3H4v2h16V7h-3z" />
    </svg>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

interface BoardCardProps {
  title: string;
  lastEdited: string;
  collaborators: Array<{ initials: string; color: string }>;
  thumbnail?: string;
}

export function BoardCard({ title, lastEdited, collaborators, thumbnail }: BoardCardProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="group relative h-40 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 fill-mode-both">
      {/* Thumbnail Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Card Content */}
      <div className="relative p-5 flex flex-col h-full">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1 line-clamp-2 text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground">{lastEdited}</p>
        </div>

        {/* Collaborators */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {collaborators.map((collab, idx) => (
              <div
                key={idx}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold border-2 border-card ${collab.color}`}
              >
                {collab.initials}
              </div>
            ))}
          </div>
          {collaborators.length > 0 && (
            <span className="text-xs text-muted-foreground ml-2">{collaborators.length} collaborators</span>
          )}
        </div>

        {/* Quick Actions - Visible on Hover */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card via-card/80 to-transparent pt-8 pb-4 px-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-xs font-medium">
            <ExternalLinkIcon className="w-4 h-4" />
            Open
          </button>
          <button className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground">
            <EditIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors text-muted-foreground hover:text-foreground relative"
          >
            <EllipsisIcon className="w-4 h-4" />

            {showMenu && (
              <div className="absolute bottom-full right-0 mb-2 w-40 bg-card border border-border rounded-lg shadow-lg p-1 z-50">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-foreground hover:bg-secondary rounded transition-colors">
                  <EditIcon className="w-4 h-4" />
                  Rename
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-warning hover:bg-secondary rounded transition-colors">
                  <TrashIcon className="w-4 h-4" />
                  Delete
                </button>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
