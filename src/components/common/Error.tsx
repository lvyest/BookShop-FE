import { useRouteError } from "react-router-dom";
import Layout from "../layout/Layout";

interface RouteError {
    statusText?: string;
    message?: String;
}
function Error() {
    const error = useRouteError() as RouteError;
    return (
        <Layout>
            <h1>오류가 발생했습니다.</h1>
            <p>다음과 같은 오류가 발생했습니다. </p>
            <p>{error.statusText || error.message}</p>
        </Layout>
    )
}

export default Error;