import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className='container animate__animated animate__fadeIn'>
            <div className='row gx-5 gy-3'>
                {
                    heroes.map(hero =>
                        <HeroCard key={hero.id} {...hero} />
                    )
                }
            </div>
        </div>
    );
}
