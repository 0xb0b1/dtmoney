import Logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface IProps {
    onOpenNewTransactionModal: () => void;
}

function Header(props: IProps) {
    return (
        <Container>
            <Content>
                <img src={Logo} alt="dtmoney" />
                <button type="button" onClick={props.onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    );
}

export default Header;
