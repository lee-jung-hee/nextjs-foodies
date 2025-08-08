"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>Something went wrong!</h1>
      <p>Failed to create the meal. Please check your input and try again.</p>
    </main>
  );
}
