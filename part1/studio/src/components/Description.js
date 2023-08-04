import styles from './Description.module.css';
import React from 'react';

export function RecipeAuthor() {
    let authorLink = "https://www.foodnetwork.com/recipes/tyler-florence/pan-seared-tuna-with-avocado-soy-ginger-and-lime-recipe-1914316";
    let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/tyler-florence/FN-TalentAvatar-Tyler-Florence-colorblock.jpg.rend.hgtvcom.126.126.suffix/1531174611134.jpeg";
    let authorName = "Tyler Florence";

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Food Network</a> 
           </div>
        </div>
     );
}

class RecipeDescription extends React.Component {
    render() {
        return(
        <div> 
        <div>
            <h1>Pan-Seared Tuna with Avocado, Soy, Ginger, and Lime</h1>
            <p>A tasty description.</p>
        </div>
        <RecipeAuthor />
    </div>
        )
    }
}

export default RecipeDescription;