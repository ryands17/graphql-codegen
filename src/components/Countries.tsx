import React from 'react'
import { useFetchCountriesQuery } from 'generated/graphql'

export const Countries: React.FC = () => {
  const { loading, error, data } = useFetchCountriesQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
      <ul>
        {data.countries.slice(0, 10).map((country, index) => (
          <li key={index}>
            {country.name} ({country.emoji}) =&gt; {country.currency}
          </li>
        ))}
      </ul>
    </div>
  )
}
