import React from "react";

function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details</h1>
      <p> {params.mealSlug} </p>
    </>
  );
}

export default MealDetailsPage;
