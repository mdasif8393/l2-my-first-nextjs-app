import { useRouter } from 'next/router';
const ErrorPage = () => {

    const router = useRouter();

    setTimeout(() => {
        router.push("/")
    }, 5000)

    return (
        <div>
            <img width="100%" src="https://www.pngkey.com/png/detail/147-1473883_404-error-404-not-found-png.png" alt="" />
        </div>
    );
};

export default ErrorPage;