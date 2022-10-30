import { Oval } from 'react-loader-spinner';
import { Container } from './Loader.styled';

const Loader = () => {
  return (
    <Container>
      <Oval
        height={80}
        width={80}
        color="blue"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </Container>
  );
};

export default Loader;
