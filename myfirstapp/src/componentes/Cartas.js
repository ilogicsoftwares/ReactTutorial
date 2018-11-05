import React from 'react';

class Cartas extends React.Component {
  constructor() {
    super();
    
  }

  render() {
    console.log("Aqui");
    console.log(this.props.dato);
     const carticas=this.props.dato.map((item,index)=>{
       return (
           <div className="col-md-4 mt-4">
           <div className="card">
               <div className="card-header text-dark">
               <h3>{item.tittle}</h3>
               </div>
               <div className="card-body text-dark">
               {item.tarea}
               </div>
           </div>     
           </div>
          

       )
     }
     );
    return carticas;
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Cartas;
