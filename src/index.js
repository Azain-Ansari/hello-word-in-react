import React from 'react';
import ReactDOM from 'react-dom';
import image from './715c0b01-e40f-4484-b847-db84176a122d.jpg'
import  './index.css'
function Hi() {
 return <div>
 <div className=" container">

  <img width={200} height={200} src={image} alt={123}/>


    <span>Hello World!</span>
    <strong>azain ansari</strong>
 <ul>
 < li><a href='https://github.com/Azain-Ansari'>github</a> </li>
 < li><a href='https://www.facebook.com/azain.ansari.1'>facebook</a></li>
 < li><a href='https://www.youtube.com/channel/UC9EaaVjU5izI3C9a6bRE5ag'>youtube</a></li>
 < li><a href='https://www.linkedin.com/in/azain-ansari-807022282/'>linkdin</a></li>

  </ul> 
    <div>

    </div>

    </div>;
    </div>
}


ReactDOM.render(<Hi/>, document.querySelector('#root'));