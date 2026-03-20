import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useState, useEffect } from 'react';
import axios from 'axios';
export default function Teams () {
    type Name = {
        title:string;
        first:string;
        last:string;
    }

    type Picture = {
        large:string;
        medium:string;
        thumbnail:string;
    }

    type Person = {
        name:Name;
        picture:Picture;
    }

    type Team = {
        position:string;
        description:string;
    }

    const teamDescription:Team[] = [
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

    ]

    const [persons, setPersons] = useState<Person[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('https://randomuser.me/api/?inc=name,picture&results=8');
                setPersons(response.data.results);
            } catch (err) {
                setError('Gagal mengambil data');
            } finally {
                setLoading(false);
            }
        };
    
        fetchPosts();
      }, []);
    
      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

    return (
        <>
            <section className="bg-slate-50">
                <div className="container px-8 py-12 mx-auto md:px-12 grid grid-cols-1 gap-3 max-w-3xl">
                    <h1 className="text-2xl font-extrabold text-center lg:text-4xl">The Minds Behind the <span className="text-amber-400">Essence</span></h1>
                    <p className="text-slate-600 text-sm text-center lg:text-lg">Meet the artisans, chemists, and visionaries dedicated to bottling the sublime. Our team combines traditional craftsmanship with modern olfactory science.</p>
                </div>
            </section>

            <section className="bg-amber-50">
                <div className="container px-8 py-12 mx-auto md:px-12 grid grid-cols-1 gap-3 max-w-7xl md:grid-cols-2 lg:grid-cols-4">
                    {
                        persons.map((item, idx) => (
                            <div key={idx}>
                                <Card className="flex flex-col justify-center items-center">
                                    <div className="h-25 w-25 border rounded-full flex justify-center items-center">
                                        <img src={item.picture.large} alt={item.name.first} className="rounded-full w-full" />
                                    </div>
                                    <div className="text-center p-5 flex flex-col justify-center items-center">
                                        <span className="font-bold">{`${item.name.first} ${item.name.last}`}</span>
                                        <p className="text-amber-400">{teamDescription[idx].position}</p>
                                        <p className="text-xs italic text-slate-500 mt-4">{teamDescription[idx].description}</p>
                                        <Linkedin className="text-slate-400 hover:text-amber-400 mt-4"/>
                                    </div>
                                </Card>
                            </div>
                        ))
                    }
                    
                </div>
            </section>
        </>
    )
}