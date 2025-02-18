import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";
import { useStore } from "../zustand-store";

interface ModuleProps {
    moduleIndex: number
    title: string
    lessonsAmount: number
}

export function Module({ lessonsAmount, moduleIndex, title }: ModuleProps) {
    const { currentLessonIndex, currentModuleIndex, lessons, play } = useStore(store => {
        return {
            currentLessonIndex: store.currentLessonIndex,
            currentModuleIndex: store.currentModuleIndex,
            lessons: store.course?.modules[moduleIndex].lessons,
            play: store.play
        }
    })
    
    return (
        <Collapsible.Root className="group" defaultOpen={moduleIndex === 0}>
            <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                    {moduleIndex + 1}
                </div>

                <div className="flex flex-col gap-1 text-left">
                    <strong className="text-sm">{title}</strong>
                    <span className="text-xs text-zinc-400">{lessonsAmount} aulas</span>
                </div>

                <ChevronDown className="w-4 h-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180"/>
            </Collapsible.Trigger>

            <Collapsible.Content>
                <nav className="relative flex flex-col gap-4 p-6">
                    {lessons && lessons.map((lesson, lessonIndex) => {
                        return (
                            <Lesson 
                                key={lesson.title} 
                                title={lesson.title} 
                                time={lesson.duration}
                                onChangeLesson={() => play([moduleIndex, lessonIndex])}
                                isCurrent={currentModuleIndex === moduleIndex && currentLessonIndex === lessonIndex}
                            />
                        )
                    } )}
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}