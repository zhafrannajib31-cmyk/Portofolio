type Props = {
  name: string
  category: string
}

const CATEGORY_COLORS: Record<string, string> = {
  Language: "bg-purple-950 text-purple-300",
  Frontend: "bg-blue-950 text-blue-300",
  Backend: "bg-green-950 text-green-300",
  Database: "bg-orange-950 text-orange-300",
  Tools: "bg-muted text-muted-foreground",
}

export default function SkillBadge({ name, category }: Props) {
  const colorClass = CATEGORY_COLORS[category] ?? "bg-muted text-muted-foreground"

  return (
    <span
      className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium ${colorClass}`}
    >
      {name}
    </span>
  )
}
