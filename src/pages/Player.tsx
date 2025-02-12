import { MessageCircle } from "lucide-react";
import { Header } from "../components/Header";
import { VideoPlayer } from "../components/VideoPlayer";
import { Module } from "../components/Module";

export function Player() {
    return (
        <div className="h-screen bg-zinc-900 text-zinc-50 flex justify-center items-center">
            <div className="flex w-[1100px] flex-col gap-6">
                <div className="flex items-center justify-between">
                    <Header />

                    <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 font-medium text-white hover:bg-violet-600">
                        <MessageCircle className="h-4 w-4" />
                        Deixar feedback
                    </button>
                </div>

                <main className="relative pr-80 flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
                    <div className="flex-1">
                        <VideoPlayer />
                    </div>

                    <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll">
                        <Module title="Fundamentos do Redux" lessonsAmount={3} moduleIndex={0} />
                        <Module title="Fundamentos do Redux" lessonsAmount={3} moduleIndex={1} />
                        <Module title="Fundamentos do Redux" lessonsAmount={3} moduleIndex={2} />
                    </aside>
                </main>

            </div>
        </div>
    )
}