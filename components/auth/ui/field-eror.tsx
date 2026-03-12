export function FieldError({ message }: { message: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-red-500/50 bg-red-500/10">
      <svg
        className="w-4 h-4 text-red-500 shrink-0 mr-1.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
      <p className="text-sm">{message}</p>
    </div>
  );
}