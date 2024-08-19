// import styles from "./flashcards.module.css";

import Flashcard from "./flashcard/flashcard"
import { useState } from "react";


export default function Flashcards() {
    const [toggleButton, setToggleButton] = useState(false);
    export function handleFlashcards() {
        setToggleButton(!toggleButton);
   }
    return (
        <>
            <h2>Flashcards</h2>
            < Flashcard className={`${toggleButton ? styles.active : ""}`} onClick={handleFlashcards}  />
        </>
    )
}