import create from 'zustand'
import {devtools, persist} from 'zustand/middleware'

interface ThemeState {
    themes: boolean
    changeTheme: () => void
}

export const useThemeStore = create<ThemeState>()(
    devtools(
        persist((set) => ({
            themes: false,
            changeTheme: () => set((state) => ({themes: !state.themes}))
        }))
    )
)