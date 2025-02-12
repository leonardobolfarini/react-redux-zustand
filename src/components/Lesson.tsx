import { Video } from "lucide-react";

interface LessonProps {
    title: string
    time: string
}

export function Lesson({ time, title }: LessonProps) {
    return (
        <button className="flex items-center gap-3 text-sm text-zinc-400">
            <Video className="w-4 h-4 text-zinc-500" />
            <span>{title}</span>
            <span className="ml-auto font-mono text-sm text-zinc-500">{time}</span>
        </button>
    )
}