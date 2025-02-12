import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";

interface ModuleProps {
    moduleIndex: number
    title: string
    lessonsAmount: number
}

export function Module({ lessonsAmount, moduleIndex, title }: ModuleProps) {
    return (
        <Collapsible.Root className="group">
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
                    <Lesson title="Fundamentos do Redux" time="09:17" />
                    <Lesson title="Fundamentos do Redux" time="09:17" />
                    <Lesson title="Fundamentos do Redux" time="09:17" />
                </nav>
            </Collapsible.Content>
        </Collapsible.Root>
    )
}