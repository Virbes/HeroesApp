import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ id, superhero, alter_ego, first_appearance, characters }) => {
    return (
        <div className='col-md-4'>

            <div className='card'>

                <div className='row'>
                    <div className='col-md-4'>
                        <img src={`./assets/heroes/${id}.jpg`} alt="superhero" className='card-img' />
                    </div>

                    <div className='col-md-8'>
                        <div className='card-body p-0'>
                            <h5 className='card-title mt-1'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p>{characters}</p>
                            }

                            <p className='cart-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>Mas...</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
