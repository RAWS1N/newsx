import { ThreeDots } from "react-loader-spinner";
import { Container } from "./styles/MiniLoader";

function MiniLoader() {
  return (
    <Container>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#D1CDCE"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Container>
  );
}


export default MiniLoader
