import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Recipe() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [recipes, setRecipes] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/recipes/${id}`).then(res => {
            setRecipes(res.data);
            setLoading(false);
        });
    }, [id]);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <h1>{recipes.title}:</h1>
            <div className='recipe'>
                <text style={{ whiteSpace: "pre-line" }}>{recipes.description}{recipes.category}</text>
            </div>
        </>
    );
};

export default Recipe;