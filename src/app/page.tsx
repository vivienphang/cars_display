'use client';
import Image from 'next/image';
import { Hero, CustomFilter, SearchBar, CarCard } from './components';
import { fetchCars } from './utils';
import { useEffect, useState } from 'react';

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const cars = await fetchCars();
        setAllCars(cars);
      } catch (error: any) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [allCars]);

  // Check if data is empty
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div className="home__error-container">
        <h2 className="text-black text-xl font-bold">
          Oops, an error occurred!
        </h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like.</p>
        </div>

        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car, index) => (
                <CarCard key={index} car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results!</h2>
          </div>
        )}
      </div>
    </main>
  );
}
