interface CurvedSectionProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export function CurvedSection({
  children,
  className = "",
  color = "bg-green-700",
}: CurvedSectionProps) {
  return (
    <section className={`relative ${color} ${className}`}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-background" style={{
          clipPath: "ellipse(70% 100% at 50% 100%)"
        }} />
      </div>
      <div className="relative container">{children}</div>
    </section>
  )
}

