import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { locations } from '#constants/index'

interface Location {
    id: number;
    name: string;
    icon: string;
    kind: string;
    type?: string;
    children?: any[];
    [key: string]: any;
}

type LocationStore = {
    activeLocation: Location,
    setActiveLocation: (location: Location) => void,
    resetLocation: () => void
}

const DEFAULT_LOCATION = locations.work

const useLocationStore = create<LocationStore>()(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location) => set((state) => {
        state.activeLocation = location
    }),

    resetLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })

})))

export default useLocationStore;  