export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
    'x-rapidapi-host': `${process.env.NEXT_PUBLIC_RAPID_HOST}`,
  };

  const response = await fetch(
    `https://${process.env.NEXT_PUBLIC_RAPID_HOST}/v1/cars?model=corolla`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
