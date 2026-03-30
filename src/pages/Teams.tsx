import { Card } from "@/components/ui/card";
import { Linkedin, Loader2 } from "lucide-react";
import { useEffect } from 'react';
import { useTeamStore } from '../store/useTeamStore';
import { Link } from "react-router";
export default function Teams () {
    const { persons, teamDescriptions, loading, error, fetchTeams } = useTeamStore();

    useEffect(() => {
        fetchTeams();
    }, [fetchTeams]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-40">
              <Loader2 className="animate-spin text-amber-600" size={40} />
            </div>    
        )
    }
    
    if (error) return <p>{error}</p>;

    return (
        <>
            <section className="bg-slate-50">
                <div className="container grid max-w-3xl grid-cols-1 gap-3 px-8 py-12 mx-auto md:px-12">
                    <h1 className="text-2xl font-extrabold text-center lg:text-4xl">The Minds Behind the <span className="text-amber-400">Essence</span></h1>
                    <p className="text-sm text-center text-slate-600 lg:text-lg">Meet the artisans, chemists, and visionaries dedicated to bottling the sublime. Our team combines traditional craftsmanship with modern olfactory science.</p>
                </div>
            </section>

            <section className="bg-amber-50">
                <div className="container grid grid-cols-1 gap-3 px-8 py-12 mx-auto md:px-12 max-w-7xl md:grid-cols-2 lg:grid-cols-4">
                    {
                        persons.map((item, idx) => (
                            <div key={idx}>
                                <Card className="flex flex-col items-center justify-center h-full">
                                    <div className="flex items-center justify-center border rounded-full h-25 w-25">
                                        <img src={item.picture.large} alt={item.name.first} className="w-full rounded-full" />
                                    </div>
                                    <div className="flex flex-col items-center justify-center p-5 text-center">
                                        <span className="font-bold">{`${item.name.first} ${item.name.last}`}</span>
                                        <p className="text-amber-400">{teamDescriptions[idx].position}</p>
                                        <p className="h-10 mt-4 text-xs italic text-slate-500">{teamDescriptions[idx].description}</p>
                                        <Link to='#'>
                                            <Linkedin className="mt-4 text-slate-400 hover:text-amber-400"/>
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