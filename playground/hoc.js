import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props)=>{
   return (
      <div>
         <p>Here is your info</p>
         <h3>Info: {props.info}</h3>
      </div>
   )
}


//HOC

const IsAdmin = (WrappedContent)=>{
   return (props)=> 
         (<div>
            {props.isAdmin && <p>Hello World</p>}
            <WrappedContent {...props}></WrappedContent>
         </div>
      )
}

const requireAuthentication = (WrappedContent)=>{
   return(props)=>(
      <div> 
         {props.isAuthenticated ? <p>Welcome</p>:<p>Please Authenticate</p>}
         <WrappedContent {...props}></WrappedContent>
      </div>
   )
}

const AdminInfo = IsAdmin(Info)
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details"></AuthInfo>, document.getElementById('app'))
