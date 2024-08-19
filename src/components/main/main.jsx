import styles from "./main.module.css";
import Form from "./form/form";
import Flashcards from "./flashcards/flashcards";

export default function Main() {
    return (
        <>
            <h1>Main</h1>
            <Form />
            <Flashcards />
        </>
    )
}