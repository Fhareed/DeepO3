export default function Loading() {
  return (
    <div
      className="page-loading"
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <div className="page-loading-ring" aria-hidden />
      <p className="page-loading-label">Loading…</p>
    </div>
  );
}
