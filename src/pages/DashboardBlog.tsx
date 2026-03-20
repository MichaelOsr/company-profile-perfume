import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import wood from "@/assets/wood.png"
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
export default function DashboardBlog () {
    return (
        <>
            <section className="bg-amber-50">
                <div className="container px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-5">
                    <div className="text-center space-y-3">
                        <h1 className="font-bold text-2xl lg:text-4xl">Dashboard Blog</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className="container px-8 py-12 mx-auto max-w-7xl md:px-12 grid grid-cols-1 gap-5">
                    <div>
                        <Button>
                            <Link to='/create-blog'>+ New</Link>
                        </Button>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <img src={wood} alt="wood" />
                            <CardHeader>
                                <p className="text-slate-400/70 text-xs">October 24, 2023 <span className="mx-1 text-2xl align-text-bottom">.</span> By Marcelle Vance</p>
                                <h1 className=" font-bold">The Sacred Golden Wood: Sourcing Our Sandalwood</h1>
                            </CardHeader>
                            <CardContent>
                                <p className="line-clamp-3 text-xs text-slate-500">In the heart of Mysore, we discovered a sustainable plantation committed to the ancient art of sandalwood cultivation. Learn how this buttery, warm base note defines the soul of our Midnight Bloom collection.</p>
                            </CardContent>
                            <CardFooter className="flex justify-center items-center gap-3">
                                <Button>
                                    <Link to='/blog/1' target="_blank">
                                        View
                                    </Link>
                                </Button>
                                <Button variant={"destructive"}>
                                    Delete
                                </Button>
                                <Button className="bg-blue-500">
                                    Edit
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    )
}