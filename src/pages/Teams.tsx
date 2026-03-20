import { Card } from "@/components/ui/card";
import { Linkedin } from "lucide-react";
import { useEffect } from 'react';
import { useTeamStore } from '../store/useTeamStore';
import { Link } from "react-router";
export default function Teams () {
    const { persons, teamDescriptions, loading, error, fetchTeams } = useTeamStore();

    useEffect(() => {
        fetchTeams();
    }, [fetchTeams]);

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
                                <Card className="flex flex-col justify-center items-center h-full">
                                    <div className="h-25 w-25 border rounded-full flex justify-center items-center">
                                        <img src={item.picture.large} alt={item.name.first} className="rounded-full w-full" />
                                    </div>
                                    <div className="text-center p-5 flex flex-col justify-center items-center">
                                        <span className="font-bold">{`${item.name.first} ${item.name.last}`}</span>
                                        <p className="text-amber-400">{teamDescriptions[idx].position}</p>
                                        <p className="text-xs italic text-slate-500 mt-4 h-10">{teamDescriptions[idx].description}</p>
                                        <Link to='#'>
                                            <Linkedin className="text-slate-400 hover:text-amber-400 mt-4"/>
                                        </Link>
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