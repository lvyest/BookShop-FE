import Button from "../components/common/Button";
import Title from "../components/common/Title";

function home() {
    return (
        <>
        <Title size="medium" color="background">
            제목 테스트
        </Title>
        <Button size="large" scheme="primary">
            버튼 테스트
        </Button>
        <div>Home</div>
        </>
    )
}

export default home;
