import React from 'react';
import ClientContext from '../../context/ClientContext';

const home = () => {
    return(
        <ClientContext.Consumer>
            {context => {
                return(
                    <div>
                        <h1>Home</h1>                        
                        {context.products.map((p)=>{
                            return <p key={p.id}>{p.name}</p>
                        })}
                    </div>
                );
            }}
        </ClientContext.Consumer>
    );
}

export default home;