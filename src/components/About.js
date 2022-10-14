import React from 'react';


export default function About(props) {
  return (
    <div className='container my-10'style={{color:props.mode==='light'?'black':'white'}}>
        <h2>About Us :</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        About Us
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':'#dee2e6'}}>
        <strong>Analyze your Text: </strong>
         Text Analyzer is going to give  you'll a way to analyze your text  with full accuracy that too with efficiently.
         < div className='container my-10'>
         <li>
          <strong> Free to use :  </strong>
          Text Analyzer is a free character counter tool that provides instant character count and word count stastics for a given text
          Text analyzer reports the number of words and characters.Thus it is suitable for writing text with word/character limits.
          </li> 
          </div>
          <div div className='container my-10'>
          <li>
          <strong> Browser compatibility  :  </strong>
          This word counter software works in any web browser such as chrome,Firefox,Internet Explorer,Safari,Opera.It suits to count characters in facebook,blog,books,excel documents,pdf documents,essays etc.
         
          </li> 
          </div>
      </div>
    </div>
  </div>
  
   </div>
   </div>
  
    
  )
}
