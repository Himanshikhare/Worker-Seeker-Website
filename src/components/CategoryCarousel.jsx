import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Masonry work",
    "Painting houses or buildings",
    "Cooking and catering services",
    "Babysitting and nanny jobs",
    "Crop harvesting",
    "Appliance repair",
    "Mehendi Designing",
    "Event Decoration",
    "Carpenters",
    "Makeup Artists & Hair Stylists",
    "Photographers & Videographers ",
    "DJs & Live Musicians",
    "Security Guards & Bouncers",
    "Home Tutors",
    "Yoga & Fitness Trainers ",
    "Tailors & Fashion Designers "
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3">
                                <Button  onClick={()=>searchJobHandler(cat)} variant="outline" className="rounded-full bg-[black] text-[white] hover:bg-[red]" >{cat}</Button>
                            </CarouselItem>
                        ))  
                    }

                </CarouselContent>
                <CarouselPrevious className="hover:bg-[yellow]"/>
                <CarouselNext className="hover:bg-[yellow]"/>
            </Carousel>
        </div>
    )
}
export default CategoryCarousel