const RecipeAuthor = () => {
   let authorLink = "https://www.seriouseats.com/scallop-crudo-recipe-7566506";
   let authorPhoto = "https://www.seriouseats.com/thmb/9xDG5M_CKMdIIlFTOrGTxu5t_qU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/daniel-gritzer-095af850d50f4cd593487117353243fd.jpg";
   let authorName = "Daniel Gritzer";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%", height: "250px"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["sea scallops","Olive Oil","Lemon Juice","Sea Salt","Red Pepper Flakes"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Scallop Crudo</h1>
            <p>Pristine raw scallops, done up Italian-style with little more than olive oil, salt, and a few drops of lemon juice.</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.seriouseats.com/thmb/-o_qto06qedS5U4fYKnA5ldeLvw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230728-SEA-ScallopCrudo-AmandaSuarez-hero-87e0b59a07524eee846322a130ab9590.jpg" alt="Scallop Crudo" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}