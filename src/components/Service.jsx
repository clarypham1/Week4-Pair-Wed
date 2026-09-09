import {useState} from 'react';

const Service = ({ id, icon, title, text, onRemove }) => {
  return (
    <article className='service'>
      <span className={icon}></span>
      <div className='service-info'>
        <h4 className='service-title'>{title}</h4>
        <p className='service-text'>{text}</p>
      </div>
      <button 
        className='btn' 
        onClick={() => onRemove(id)}
        style={{ marginTop: '1rem' }}
      >
        Remove Service
      </button>
    </article>
  )
}
export default Service