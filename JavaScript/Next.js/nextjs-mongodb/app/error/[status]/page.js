export default function Error(props) {
    return (
        <>
            <h1 className="title">ERROR : {props.params.status}</h1>
            <p>try it again later</p>
        </>
    );
}
