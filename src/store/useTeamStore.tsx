import { create } from 'zustand';
import axios from 'axios';


export type Name = { title: string; first: string; last: string; };
export type Picture = { large: string; medium: string; thumbnail: string; };
export type Person = { name: Name; picture: Picture; };
export type Team = { position: string; description: string; };

// Tipe untuk State di Zustand
interface TeamState {
  persons: Person[];
  teamDescriptions: Team[];
  loading: boolean;
  error: string | null;
  hasFetched: boolean; // Guard untuk mencegah re-fetching
  fetchTeams: () => Promise<void>;
}

export const useTeamStore = create<TeamState>((set, get) => ({
    persons: [],
    teamDescriptions: [
        {
            position:'Master Perfumer',
            description:'"Passionate about rare botanicals and the art of extraction."'
        },
        {
            position:'Head of Sourcing',
            description:'"Dedicated to finding the perfect balance between citrus and wood."'
        },
        {
            position:'Scent Scientist',
            description:'"Transforming memories into olfactory experiences for over a decade."'
        },
        {
            position:'Creative Director',
            description:'"An expert in molecular fragrance construction and longevity."'
        },
        {
            position:'Bottle Designer',
            description:'"Crafting aesthetic vessels that match the elegance of the scent."'
        },
        {
            position:'Chief Alchemist',
            description:'"Leading the industry in sustainable fragrance development."'
        },
        {
            position:'Fragrance Curator',
            description:'"Always on the hunt for the world\'s most unique scent profiles."'
        },
        {
            position:'Global Brand Lead',
            description:'"Believes that every perfume should be a personal journey."'
        },
    ],
    loading: false,
    error: null,
    hasFetched: false,

    fetchTeams: async () => {
        // Jika data sudah ada, jangan fetch lagi
        if (get().hasFetched) return;

        set({ loading: true, error: null });
        try {
            const response = await axios.get('https://randomuser.me/api/?inc=name,picture&results=8');
            set({ 
                persons: response.data.results, 
                hasFetched: true 
        });
        } catch (err) {
            set({ error: 'Gagal mengambil data' });
        } finally {
            set({ loading: false });
        }
    },
}));