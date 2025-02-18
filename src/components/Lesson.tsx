import { PlayCircle, Video } from "lucide-react";

interface LessonProps {
    title: string
    time: string
    onChangeLesson: () => void
    isCurrent?: boolean
}

export function Lesson({ time, title, onChangeLesson, isCurrent = false }: LessonProps) {
    return (
        <button 
            onClick={onChangeLesson}
            data-active={isCurrent}
            disabled={isCurrent}
            className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-400 enabled:hover:text-zinc-100"
        >
            {isCurrent ? (
                <PlayCircle className="w-4 h-4 text-emerald-400"/>
            ) : ( <Video className="w-4 h-4 text-zinc-500" /> )}
            <span>{title}</span>
            <span className="ml-auto font-mono text-sm text-zinc-500">{time}</span>
        </button>
    )
}