import { beforeEach, describe, expect, it } from "vitest"
import { useStore as store } from "."

const course = {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          { id: 'Jai8w6K_GnY', title: 'CSS Modules', duration: '13:45' },
          { id: 'w-DW4DhDfcw', title: 'Estilização do Post', duration: '10:05' },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          { id: 'gE48FQXRZ_o', title: 'Componente: Comment', duration: '13:45' },
          { id: 'Ng_Vk4tBl0g', title: 'Responsividade', duration: '10:05' },
        ],
      },
    ],
}

describe('player slice', () => {
    beforeEach(() => {
        store.setState(store.getInitialState())
    })

    it('should be able to play', () => {
        const { play } = store.getState()

        play([1, 2])

        const { currentLessonIndex, currentModuleIndex } = store.getState()

        expect(currentModuleIndex).toEqual(1)
        expect(currentLessonIndex).toEqual(2)
    })

    it('should be able to play the next lesson automatically', () => {
        store.setState({ course })

        const { next } = store.getState()

        next()

        const { currentLessonIndex, currentModuleIndex } = store.getState()

        expect(currentModuleIndex).toEqual(0)
        expect(currentLessonIndex).toEqual(1)
    })

    it('should be able to jump to the next module automatically', () => {
        store.setState({ 
            course,
            currentLessonIndex: 1 
        })

        const { next } = store.getState()

        next()

        const { currentLessonIndex, currentModuleIndex } = store.getState()

        expect(currentModuleIndex).toEqual(1)
        expect(currentLessonIndex).toEqual(0)
    })

    it('should not be able to update the current module and lesson index if there is no next lesson available', () => {
        store.setState({ 
            course,
            currentLessonIndex: 1,
            currentModuleIndex: 1
        })

        const { next } = store.getState()

        next()

        const { currentLessonIndex, currentModuleIndex } = store.getState()

        expect(currentModuleIndex).toEqual(1)
        expect(currentLessonIndex).toEqual(1)
    })
})