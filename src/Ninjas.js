import React from 'react'
import './Ninjas.css'


// const Ninjas = ({ninjas, deleteNinja}) =>{}  //destructuring if we write it like this we dont need to write const {ninjas} = props; it take it as a prop only while destructuring
const Ninjas = (props)=> {
    
        //use functional components when we dont need the state and if we are primilarily concerned with UI
        // console.log(this.props);
        // const ninjas = this.props.ninjas;
        //destructring
        // const { ninjas } = this.props;
        const { ninjas, deleteNinja } = props; //for a functional based components
        
        // const ninjaList = ninjas.map(ninja =>{
        //     if(ninja.age > 20){
        //         return (
        //             <div className="ninja" key={ninja.id}>
        //                 <div>name: {ninja.name}</div>
        //                 <div>Age: {ninja.age}</div>
        //                 <div>belt: {ninja.belt}</div>
        //             </div>
        //         )
        //     } else{
        //         return null
        //     }
        // })
        const ninjaList = ninjas.map(ninja => {
            // condition ? ():()
           return ninja.age >20 ? (
                <div className="ninja" key={ninja.id}>
                    <div>name: {ninja.name}</div>
                   <div>Age: {ninja.age}</div>
                   <div>belt: {ninja.belt}</div>
                   {/* anonymous function using arrow function, so this will not automatically involked now when the function surrounding it fires */}
                   <button onClick={ () => {deleteNinja(ninja.id)}}>Delete Ninja</button>
               </div>
            ) : null;
        })
        return (
            // <div className="ninja">
            //     <div>name: {this.props.name}</div>
            //     <div>Age: {this.props.age}</div>
            //     <div>belt: {this.props.belt}</div>

            //     destructuring    
            //     <div>name: {name}</div>
            //     <div>Age: {age}</div>
            //     <div>belt: {belt}</div>
                
            //     <div>name: {name}</div>
            //     <div>Age: {age}</div>
            //     <div>belt: {belt}</div>
            // </div>
            <div className="ninja-list">
                { ninjaList }
            </div>
        )
   
}

export default Ninjas
