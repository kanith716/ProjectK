import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useState } from 'react';
import PostApi from './PostApi';

function BannerUpload() {


    const [formValues, setFormValues] = useState({
        bannerHeading: '',
        subHeading: '',
        buttonName: '',
        buttonLink: '',
        bannerImage: null, // Assuming you want to handle file uploads
    });
    

    const submitHandler = ( e) =>{
        e.preventDefault();
       
        //send data to post api component
        PostApi(formValues)
        

    }
   

    // Function to handle form input changes
    const handleInputChange = (e) => {
        console.log(e.target)
        const { name, value, filename } = e.target;

        // Update the formValues state based on the input name
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: name === 'bannerImage' ? filename[0] : value,
        }));
    };

  return (
    <div>
      <section>
              <div className='container mx-auto'>
            <h1 className='text-black text-3xl pb-5'>Banner Upload Area</h1>
                 
                  <Form onSubmit={submitHandler}>
                      <FloatingLabel
                          controlId="floatingInput"
                          label="Banner Heading"
                          className="mb-3"
                          
                          
                      >
                          <Form.Control
                           type="text" placeholder="name@example.com" 
                              name='bannerHeading'
                              value={formValues.bannerHeading}
                              onChange={handleInputChange}
                           />
                      </FloatingLabel>
                      <FloatingLabel
                          controlId="floatingInput"
                          label="Sub Heading"
                          className="mb-3"
                         
                      >
                          <Form.Control
                           type="text" placeholder="name@example.com"
                              name='subHeading'
                              value={formValues.subHeading}
                              onChange={handleInputChange}
                            />
                      </FloatingLabel>
                      <FloatingLabel
                          controlId="floatingInput"
                          label="Button Name"
                          className="mb-3"
                         
                      >
                          <Form.Control 
                          type="text" placeholder="name@example.com"
                              name='buttonName'
                              value={formValues.buttonName}
                              onChange={handleInputChange}
                           />
                      </FloatingLabel>
                      <FloatingLabel
                          controlId="floatingInput"
                          label="Button Link"
                          
                          className="mb-3"
                      >
                          <Form.Control 
                          type="url" placeholder="name@example.com"
                              name="buttonLink"
                              value={formValues.buttonLink}
                              onChange={handleInputChange}
                           />
                      </FloatingLabel>
                      <FloatingLabel
                          controlId="floatingInput"
                          label="Banner Image"
                          className="mb-3"
                          
                      >
                          <Form.Control
                            type="file"
                            value={formValues.bannerImage}
                              name='bannerImage'
                            onChange={handleInputChange} 
                            placeholder="name@example.com" 
                           />
                      </FloatingLabel>
                     
                      <Button variant="primary" className='' type="submit">
                          Submit
                      </Button>
                  </Form>
                  
                  
        </div>
      </section>
    </div>
  )
}

export default BannerUpload
