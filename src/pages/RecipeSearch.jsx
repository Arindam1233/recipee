import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import "../recipes.css"
import 'react-loading-skeleton/dist/skeleton.css'
import Grow from '@mui/material/Grow';




const RANDOM_API_URL = 'https://www.themealdb.com/api/json/v1/1/random.php';
const SEARCH_API_URL = 'https://www.themealdb.com/api/json/v1/1/search.php';
const recipee =["chicken" , "paneer"]
const RecipeSearch = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchRandomRecipes();
  }, []);

  const fetchRandomRecipes = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newRecipes = [];
      for (let i = 0; i < 10; i++) {
        const response = await fetch(RANDOM_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.meals && data.meals.length > 0) {
          newRecipes.push(data.meals[0]);
        }
      }
      setRecipes(newRecipes);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Failed to fetch recipes. Please try again later.');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  const searchRecipes = async () => {
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`${SEARCH_API_URL}?s=${searchTerm}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.meals) {
        setRecipes(data.meals);
      } else {
        setRecipes([]);
        
      }
    } catch (error) {
      console.error('Error searching recipes:', error);
      setError('Failed to search recipes. Please try again later.');
      setRecipes([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='container'>
      <h2 className='recipetitle'><span>Rec</span>ipe Search</h2>
      <div style={{ marginBottom: '20px' }}>
        <Autocomplete
  disablePortal
  options={recipee}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Recipee" onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Enter a meal name"
  style={{ marginRight: '10px' }}
  onKeyDown={searchRecipes}/>} 
  sx={{
    width:"100%", 
    justifyContent: 'center', // Set the width here
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
        borderRadius:'20px',
         // Default border color
      },
      '&:hover fieldset': {
        borderColor: 'green',
          // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'pink',  // Border color when focused
      },
    },
  }}
/>

      </div>
      {error && (
        <div style={{ color: 'red', margin: '10px 0' }}>
          {error}
        </div>
      )}
      
      {isLoading ? <Skeleton count={30} />: recipes.length > 0 ? (
        
        <div className="cards-container " style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {recipes.map((recipe) => (
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}
            {...(true ? { timeout: 1500 } : {})}> 
            <div className="card" key={recipe.idMeal} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
              <div style={{ padding: '10px' }}>
                <h4>{recipe.strMeal}</h4>
                <p>Category: {recipe.strCategory}</p>
                <p>Area: {recipe.strArea}</p>
                <button className='cardbutton' onClick={() => window.open(recipe.strYoutube, '_top')}>Watch Video</button>
              </div>
            </div>
            </Grow>
          ))}
        </div>
      ) : (
        <h1 className='errormessage'>Oops! <br />No recipes found.</h1>
      )}
    </div>
  );
};

export default RecipeSearch;