import ReactPlayer from "react-player";
import { useCurrentLesson, useStore } from "../zustand-store";
import { Loader } from "lucide-react";

export function VideoPlayer() {
    const { currentLesson } = useCurrentLesson()
    const { isLoading, next } = useStore(store => {
        return {
            isLoading: store.isLoading,
            next: store.next
        }
    })

    function handlePlayNext() {
        next()
    }

    if (!currentLesson) {
        return null
    }

    return (
        <div className="w-full bg-zinc-950 aspect-video">
                  {isLoading ? (
                        <div className="flex h-full items-center justify-center">
                        <Loader className="w-6 h-6 text-zinc-400 animate-spin" />
                        </div>
                    ) : (
                        <ReactPlayer
                        width="100%"
                        height="100%"
                        controls
                        playing
                        onEnded={handlePlayNext}
                        url={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
                        />
                    )
                }
        </div>
    )
}