import React from 'react';
import Class from './category.module.css'




export default function CategoryCard({data}) {
  return (
    <div className={Class.category}>
      <a href="">
        <span>
            <h2>{data.title}</h2>
        </span>
        <img src={data.image} alt={data.name } />
        <p>shope now</p>
      </a>
    </div>
  )
}
