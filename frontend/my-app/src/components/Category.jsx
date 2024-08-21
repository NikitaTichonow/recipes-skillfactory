import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


function Category() {

    const category = useParams().category;
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/categories/${category.id}`).then(res => {
            setRecipe(res.data);
            setLoading(false);
        });
    }, [category]);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{category.id}:</h1>
            <div className='recipe'>
                {recipe.map((title) => (
                <p key={title.id}><a className="r" href={`/recipe/${title.id}`}>{title.name}</a></p>
                ))}
            </div>
        </div>
    );
};

export default Category;