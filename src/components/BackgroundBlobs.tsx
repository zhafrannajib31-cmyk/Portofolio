const BLOBS = [
  {
    size: "55rem",
    top: "-18%",
    left: "-12%",
    background:
      "radial-gradient(circle, rgba(59,130,246,0.12) 0%, rgba(34,211,238,0.1) 40%, transparent 70%)",
    animation: "blobFloat 24s ease-in-out infinite",
  },
  {
    size: "48rem",
    top: "28%",
    right: "-16%",
    background:
      "radial-gradient(circle, rgba(34,211,238,0.11) 0%, rgba(96,165,250,0.08) 45%, transparent 72%)",
    animation: "blobFloat 30s ease-in-out infinite reverse",
  },
  {
    size: "40rem",
    top: "55%",
    left: "28%",
    background:
      "radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(59,130,246,0.07) 50%, transparent 72%)",
    animation: "blobFloat 36s ease-in-out infinite",
  },
  {
    size: "52rem",
    top: "82%",
    right: "-10%",
    background:
      "radial-gradient(circle, rgba(34,211,238,0.11) 0%, rgba(14,165,233,0.08) 42%, transparent 70%)",
    animation: "blobFloat 28s ease-in-out infinite 2s",
  },
]

export default function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {BLOBS.map((b, i) => (
        <div
          key={i}
          className="blob"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            right: b.right,
            background: b.background,
            animation: b.animation,
          }}
        />
      ))}
    </div>
  )
}
