import React, { useState } from 'react';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 

function MyForm() {
  const [questionBank, setQuestionBank] = useState(''); 
  const [questionType, setQuestionType] = useState(''); 
  const [subTopic, setSubTopic] = useState(''); 
  const [difficulty, setDifficulty] = useState(''); 
  const [questionShortTitle, setQuestionShortTitle] = useState(''); 
  const [question, setQuestion] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const alerts = [];
  
    if (questionBank === '') {
      alerts.push('Please Select the Question Bank');
    }
  
    if (questionType === '') {
      alerts.push('Please Select the Question Type');
    }
  
    if (subTopic === '') {
      alerts.push('Please Select the Sub Topic');
    }
  
    if (difficulty === '') {
      alerts.push('Please Select the Difficulty');
    }
  
    if (alerts.length > 0) {
      alert(alerts.join('\n')); 
      return; 
    }
  
    const alertMessage = `
      Question Bank: ${questionBank}
      Question Type: ${questionType}
      Sub Topic: ${subTopic}
      Difficulty: ${difficulty}
      Question Short Title: ${questionShortTitle}
      Question: ${question}
    `;
  
    alert(alertMessage);
    
    const formData = {
      questionBank,
      questionType,
      subTopic,
      difficulty,
      questionShortTitle,
      question,
    };
    
    console.log('Form data:', JSON.stringify(formData, null, 2));
  };
  

  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff'
    }}>

    <form onSubmit={handleSubmit}>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginLeft: '10px' }}>
        <label htmlFor="questionBank">Question Bank:</label>
        <select
          id="questionBank"
          value={questionBank}
          onChange={(e) => setQuestionBank(e.target.value)} 
          style={{ height: '40px', marginLeft: '20px', marginTop: '10px', marginRight:'20px' }} 
        >
          <option value="" disabled>Select Question Bank</option>
          <option value="bank1">Question Bank 1</option>
          <option value="bank2">Question Bank 2</option>
          <option value="bank3">Question Bank 3</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginLeft: '10px' }}>
        <label htmlFor="questionType">Question Type:</label>
        <select
          id="questionType"
          value={questionType}
          onChange={(e) => setQuestionType(e.target.value)}
          style={{ height: '40px', marginLeft: '20px', marginTop: '10px', marginRight:'20px' }} 
        >
            <option value="" disabled>Choose Mode of Exam</option>
          <option value="Multi Correct MCQ">Multi Correct MCQ</option>
          <option value="Fill in the Blanks">Fill in the Blanks</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginLeft: '10px' }}>
        <label htmlFor="questionBank">Sub Topic:</label>
        <select
          id="subTopic"
          value={subTopic}
          onChange={(e) => setSubTopic(e.target.value)} 
          style={{ height: '40px', marginLeft: '20px', marginTop: '10px', marginRight:'20px' }} 
        >
            <option value="" disabled>Select Sub Topic</option>
          <option value="topic1">Soft skills</option>
          <option value="topic2">Aptitude</option>
          <option value="topic3">Reasoning</option>
          <option value="topic4">Technical</option>
        </select>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginLeft: '10px' }}>
        <label>Difficulty:</label>
        <div style={{ marginLeft: '20px', marginTop: '10px' }}>
          {['EASY', 'MEDIUM', 'HARD', 'EXPERT'].map((level) => (
            <button
              key={level}
              type="button"
              onClick={() => setDifficulty(level)}
              style={{
                width: '180PX',
                marginRight: '10px',
                padding: '10px',
                backgroundColor: difficulty === level ? '#007BFF' : '#f0f0f0',
                color: difficulty === level ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '20px', marginLeft: '10px' }}>
        <label htmlFor="questionShortTitle">Question Short Title:</label>
        <input
          type="text"
          id="questionShortTitle"
          value={questionShortTitle}
          onChange={(e) => setQuestionShortTitle(e.target.value)}
          style={{ height: '40px', marginLeft: '20px', marginTop: '10px' , marginRight:'20px'}} 
        />
      </div>

     <div 
      style={{ display: 'flex', flexDirection: 'column', marginBottom: '30px', marginLeft: '10px' }}>
      <label htmlFor="question">Question:</label>
      <div style={{ marginLeft: '20px', marginRight: '20px', marginTop: '10px' }}>
      <ReactQuill
       id="question"
       value={question}
       onChange={setQuestion}
       style={{ height: '200px' }} 
     />
   </div>
   </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button type="submit" style={{ 
        padding: '10px 20px', 
        marginTop: '20px',
        width: '180px', 
        borderRadius: '20px', 
        backgroundColor: 'navy', 
        color: 'white', 
        border: 'none', 
        cursor: 'pointer'
    }}>Next &gt; </button>
      </div>
    </form>
    </div>
  );
}

export default MyForm;
