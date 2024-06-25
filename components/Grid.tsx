import React from 'react'
import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
    <section id='work'>
        <BentoGrid>
            {gridItems.map((item, i) => (
                <BentoGridItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid