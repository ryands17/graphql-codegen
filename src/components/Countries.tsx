import React from 'react'
import { useFetchCountriesQuery } from 'generated/graphql'

export const Countries: React.FC = () => {
  const { data, loading, error } = useFetchCountriesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error fetching countries</p>

  return (
    <div>
      <ul>
        {data?.countries?.slice(0, 10).map((country, index) => (
          <li key={index}>
            {country?.name} ({country?.emoji})
          </li>
        ))}
      </ul>
    </div>
  )
}
