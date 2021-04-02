import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';

class RegisterForm extends React.Component {
    setInputValue(property, val) {
        val=val.trim();
        if(val.length >12) {
            return;
        }
        this.setState({
            [property]:val
        })
    }
    
    render() {
        return (
            <div className="registerForm">
                <div className='title'>
                Registration form:
                </div>
                <div className='form-inputs'>
                <label htmlFor='firstname' className='form-label' >
                    First name: 
                </label>
                <InputField 
                    id='username'
                    type='text'
                    name='username'
                    className='form-input'
                    placeholder='Enter your first name'
                   
                /> 
                </div>
                <div className='form-inputs'>
                <label htmlFor='lastname' className='form-label'>
                    Last name: 
                </label>
                <InputField 
                    type='text'
                    id='lastname'
                    name='lastname'
                    className='form-input'
                    placeholder='Enter your last name'
                   
                />
                </div>
                <div className='form-inputs'>
                <label htmlFor='email' className='form-label'>
                    E-mail:
                </label>
                <InputField 
                    type='text'
                    id='email'
                    name='email'
                    className='form-input'
                    placeholder='Enter your E-mail'
                    
                />
                </div>
            </div> 
        )
    }
}

export default RegisterForm;

            
