import React, { useMemo, useRef } from 'react';
import queryString from 'query-string';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroByNames } from '../../selectors/getHeroByNames';

export const SearchScreen = () => {

    const searchRef = useRef(null);
    const navigate = useNavigate();

    const { q = '' } = queryString.parse(useLocation().search); // parameter values
    const [formValues, handleInputChange] = useForm({ searchInput: q });
    const { searchInput } = formValues;

    const heroesFiltered = useMemo(() => getHeroByNames(q), [q]);

    const handleSubmit = (e) => {
        e.preventDefault();
        searchRef.current.select();
        navigate(`?q=${searchInput}`);
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr />


            <div className="row">
                <div className="col-md-8 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                autoFocus
                                type="text"
                                name='searchInput'
                                className='form-control'
                                placeholder='Find your hero'
                                value={searchInput}
                                ref={searchRef}
                                onChange={handleInputChange}
                            />
                            <span className="input-group-append">
                                <button type="submit" className="btn btn-outline-success" >
                                    Search...
                                </button>
                            </span>
                        </div>
                    </form>
                </div>
            </div>


            <div>
                <h4>Results</h4>
                <hr />

                {
                    // Mensaje de inicio para buscar un heroe
                    (q === '') &&
                    <div className="alert alert-info">
                        Search a hero
                    </div>
                }

                {
                    // Mensaje de error cuando no se encuentra ningun dato
                    (q !== '' && heroesFiltered.length === 0) &&
                    <div className="alert alert-danger">
                        There is no a hero with "{q}"
                    </div>
                }

                <div className='container animate__animated animate__fadeIn'>
                    <div className='row gx-5 gy-3'>
                        {
                            heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)
                        }
                    </div>
                </div>
            </div >
        </>
    );
}
