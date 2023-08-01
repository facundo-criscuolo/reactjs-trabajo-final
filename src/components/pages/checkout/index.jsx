import "./styles.css";
import Input from "../../Input";
import { useState } from "react";
import { useForm } from "../../../hooks/useForm";

const initialState = {
    name: {value: '', error: '', hasError: true, active: false, name: 'name'},
    last: {value: '', error: '', hasError: true, active: false, name: 'last'},
    email: {value: '', error: '', hasError: true, active: false, name: 'email'},
    birthday: {value: '', error: '', hasError: true, active: false, name: 'birthday'},
    address: {value: '', error: '', hasError: true, active: false, name: 'address'},
    document: {value: '', error: '', hasError: true, active: false, name: 'document'},
    postalcode: {value: '', error: '', hasError: true, active: false, name: 'postalcode'}
}

const Checkout = () => {

    const [formState, inputHandler, cleanInputs, inputFocus] = useForm(initialState)
    const [active, setActive] = useState(false)

    const onChange = (event) => {
        const { name, value } = event.target
        inputHandler({ name, value })
    }

    const onFocus = ({ name }) => {
        inputFocus({ name })
    }

    const onBlur = ({ name }) => {
        // inputBlur({ name })
    }

    console.log(formState);

 
    return (

        <div className="checkoutContainer">
            <div className='checkoutDetailContainer'>
                <div className='checkoutFormContainer'>
                    <h1 className='checkoutTitle'>Checkout</h1>
                    <form className="checkoutForm">
                        <div className="checkoutFormContent">
                            <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Name'
                                    id='name'
                                    required={true}
                                    label='name'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'name' })}
                                    onBlur={onBlur}
                                    active={formState.name.active}
                                    error={formState.name.error}
                                    hasError={formState.name.hasError}
                                />
                             </div>
                             <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Last'
                                    id='last'
                                    required={true}
                                    label='last'
                                    onChange={onChange}
                                    onFocus={() => onFocus({name: 'last' })}
                                    onBlur={onBlur}
                                    active={formState.last.active}
                                    error={formState.last.error}
                                    hasError={formState.last.hasError}
                                />
                             </div>                           
                              <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Email'
                                    id='email'
                                    required={true}
                                    label='email'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'email' })}
                                    onBlur={onBlur}
                                    active={formState.email.active}   
                                    error={formState.email.error}
                                    hasError={formState.email.hasError}                             />
                             </div>                            
                             <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Birthday'
                                    id='birthday'
                                    required={true}
                                    label='birthday'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'birthday' })}
                                    onBlur={onBlur}
                                    active={formState.birthday.active}        
                                    error={formState.birthday.error}
                                    hasError={formState.birthday.hasError}                        />
                             </div>                            
                             <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Address'
                                    id='address'
                                    required={true}
                                    label='address'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'address' })}
                                    onBlur={onBlur}
                                    active={formState.address.active}     
                                    error={formState.address.error}
                                    hasError={formState.address.hasError}                           />
                             </div>                            
                             <div className='inputContainer'>
                                <Input 
                                    placeholder='Your ID Number'
                                    id='document'
                                    required={true}
                                    label='document'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'document' })}
                                    onBlur={onBlur}
                                    active={formState.document.active}                                    
                                                               />
                                    
                             </div>
                             <div className='inputContainer'>
                                <Input 
                                    placeholder='Your Postal Code'
                                    id='postalcode'
                                    required={true}
                                    label='postalcode'
                                    onChange={onChange}
                                    onFocus={() => onFocus({ name: 'postalcode' })}
                                    onBlur={onBlur}
                                    active={formState.postalcode.active}                                />
                             </div>                   
                        </div>
                    </form>
                </div>
            </div>
        </div>
                            


    )
}


export default Checkout;