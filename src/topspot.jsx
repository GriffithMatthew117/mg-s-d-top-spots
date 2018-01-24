import React from 'react';

export default props => (
    <div className='well'>
    <h4>{props.name}</h4>
    <p>{props.description}</p>
    {/* <a href="https://maps.google.com/?q=${props.location[0]},${props.location[1]}" class="btn btn-primary btn-lg disabled" role="button" aria-disabled="true">Primary link</a> */}
        <a href={`https://maps.google.com/?q=${props.location[0]},${props.location[1]}`} className='btn btn-primary btn-lg'>Check it Out!</a> 
</div>
);