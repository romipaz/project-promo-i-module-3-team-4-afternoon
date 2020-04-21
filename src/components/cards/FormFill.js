import React from 'react';
import Input from './Input';
import GetAvatar from '../GetAvatar';

const FormFill = (props) => {

  const getUserInfoName = () => {
    let name = props.userInfo.name;
    if (name === 'Nombre Apellido') {
      name = '';
    }
    return name;
  };

  const getUserInfoJob = () => {
    let job = props.userInfo.job;
    if (job === 'Front-end developer') {
      job = '';
    }
    return job;
  };

  return (
    <div className="form__fill">

      <div className="fill--bottom fill--bottom--visible">
        <div className="fillform bottom-1">
          <Input
            id='name'
            input='Nombre completo'
            required='required'
            requiredIcon='*'
            placeholder='Sally Jill'
            value={getUserInfoName()}
            type='text'
            textError='text-error'
            errorMessage='*Dinos tu nombre por favor.'
            handleClick={props.updateUserInfo}
            validateForm={props.validateForm}
            // inputRef={props.inputRef}
            // inputErrorMsg={props.inputErrorMsg}
          />
          <Input
            id='job'
            input='Puesto'
            required='required'
            requiredIcon='*'
            placeholder='Front-end unicorn'
            value={getUserInfoJob()}
            type='text'
            textError='text-error'
            errorMessage='*Tu trabajo también, gracias.'
            handleClick={props.updateUserInfo}
            validateForm={props.validateForm}
            // inputRef={props.inputRef}
            // inputErrorMsg={props.inputErrorMsg}
          />
        </div>
        <div className="fillform bottom-2">
          <label className="label-fill" htmlFor="addimage">Imagen de perfil<span className="required">*</span></label>
          <div className="bottom-2-box">
            <GetAvatar
              avatar={props.avatar}
              isAvatarDefault={props.isAvatarDefault}
              updateAvatar={props.updateAvatar}
              validateForm={props.validateForm}
              inputRef={props.inputThumbnail}
              // inputErrorMsg={props.inputErrorMsg}
            />
          </div>
          <Input
            id='email'
            input='Email'
            required='required'
            requiredIcon='*'
            placeholder='sally-hill@gmail.com'
            value={props.userInfo.email}
            type='email'
            textError='text-error'
            errorMessage='*Deja un email correcto para que puedan contactarte.'
            handleClick={props.updateUserInfoIcon}
            validateForm={props.validateForm}
            inputRef={props.inputEmail}
            inputErrorMsg={props.inputErrorEmail}
          />
          <Input
            id='phone'
            input='Teléfono'
            required=''
            placeholder='660632407'
            value={props.userInfo.phone}
            type='tel'
            handleClick={props.updateUserInfoIcon}
            validateForm={props.validateForm}
          />
          <Input
            id='linkedin'
            input='Linkedin'
            required='required'
            requiredIcon='*'
            placeholder='unicornfront'
            value={props.userInfo.linkedin}
            type='text'
            textError='text-error'
            errorMessage='*Por favor introduce tu Linkedin.'
            handleClick={props.updateUserInfoIcon}
            validateForm={props.validateForm}
            inputRef={props.inputRef}
            // inputErrorMsg={props.inputErrorMsg}
          />
          <Input
            id='github'
            input='Github'
            required='required'
            requiredIcon='*'
            placeholder='sallyhill'
            value={props.userInfo.github}
            type='text'
            textError='text-error'
            errorMessage='*Agradecerán ver tu trabajo.'
            handleClick={props.updateUserInfoIcon}
            validateForm={props.validateForm}
            inputRef={props.inputRef}
            // inputErrorMsg={props.inputErrorMsg}
          />
        </div>
      </div>
    </div>
  );
}

export default FormFill;