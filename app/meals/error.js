"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>
        We encountered an error while trying to fetch the meals. Please try
        again later.
      </p>
      <p>If the problem persists, contact support.</p>
    </main>
  );
}
