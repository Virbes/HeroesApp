import React, { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroById';

export const HeroeScreen = () => {

    const { heroeId } = useParams();

    const [hero] = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!hero) return <Navigate to='marvel' />;

    const navigate = useNavigate();
    const { superhero, publisher, alter_ego, first_appearance, characters } = hero;

    const handleBack = () => {
        navigate(-1);
    }

    return (
        <div className='row mt-5'>
            <div className="col-4">
                <img
                    className='img-thumbnail animate__animated animate__fadeInLeft'
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                />
            </div>

            <div className="col-8">
                <h3>{superhero}</h3>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b> {publisher}</li>
                    <li className="list-group-item"><b>First Apperance: </b> {first_appearance}</li>
                </ul>

                <hr />

                <h4>Characters</h4>
                <p>{characters}</p>

                <button
                    className='btn btn-outline-success'
                    onClick={handleBack}
                >
                    Return
                </button>
            </div>
        </div>
    );
}
