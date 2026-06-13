import {cn} from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
}

const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитка', 'Дисерты']
const activeIndex = 0

export const Categories: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('inline-flex gap-1 py-4 rounded-2xl', className)}>
            {
                cats.map((cat, i) => (
                    <a key={i} className={cn('flex items-center font-bold px-5 ', 
                        activeIndex === i && 'text-primary'
                    )}>
                        <button className='cursor-pointer'>
                            {cat}
                        </button>
                    </a>
                ))
            }
        </div>
    )
}