import Link from "next/link";
import React from "react";

function Meals() {
  return (
    <main>
      <h1>Meals Page</h1>
      <Link href="/meals/meal-1">Meal 1</Link>
      <Link href="/meals/meal-2">Meal 2</Link>
      <Link href="/meals/share">Share Meals</Link>
      <p>
        <Link href="/">Go Back to Home</Link>
      </p>
    </main>
  );
}

export default Meals;
