import { cn } from '@/lib/utils';
import { Container } from './container';
import React from 'react'
import Image from 'next/image';
import { Button, Input } from '../ui';
import { ArrowBigRight, Search, ShoppingCart, User } from 'lucide-react';
import { Title } from './title';

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn('w-full py-6 px-10 bg-white border-b border-gray-200 flex items-center justify-evenly gap-24', className)}>
                <div className='flex items-center max-w-fit gap-3'>
                    <Image className='w-14 h-14 ' width={58} height={58} priority src="/logo.png" alt="logo"></Image>
                    <div className='w-full'>
                        <Title text='voidpizza' size='xl' className='text-4xl font-bold'/>
                        <p className='text-mist-600'>бесконечный вкус</p>
                    </div>
                </div>
                <div className='w-full relative'><Search size={22} className='absolute top-3.5 left-3 text-gray-500'/><Input className='h-13 pl-11 ' placeholder='Поиск пиццы'/></div>
                <div className='flex'>
                    <Button variant={"default"} className='relative group flex items-center gap-1 py-3 h-13 px-6 justify-center text-[17px] duration-300 transition-all'>
                        <b className='font-semibold'>2030 $</b>
                        <span className='h-full w-px bg-white/40 mx-1'></span>
                        <div className='flex gap-1.5 items-center transition duration-300 group-hover:opacity-0'>
                            <ShoppingCart size={16} className='relative'/>
                            <span className='font-medium'>2</span>
                        </div>
                        <ArrowBigRight className='absolute right-6 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'/>
                    </Button>
                </div>


        </header>
    )
}

