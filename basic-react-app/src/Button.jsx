function printHello() {
    console.log("Hello");
}

export default function Button() {
    return (
        <button onClick={printHello}>Click me!</button>
    );
}