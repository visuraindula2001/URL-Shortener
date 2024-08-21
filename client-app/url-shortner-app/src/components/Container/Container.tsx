import * as React from 'react';
import FromContainer from '../FormContainer/FormContainer';
import FormContainer from '../FormContainer/FormContainer';
interface IContainerProps {
}

const Container: React.FunctionComponent<IContainerProps> = () => {
  return (
    <>
       <FormContainer></FormContainer>
    </>
  );
};

export default Container;
