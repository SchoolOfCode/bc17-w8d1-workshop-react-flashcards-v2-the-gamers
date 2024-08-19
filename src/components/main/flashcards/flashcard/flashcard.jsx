import styles from "./flashcard.module.css";
import { useState } from "react";
import handleFlashcard from "./flashcards"

export default function Flashcard() {
    return (
        <>
            <h3 className={`${toggleButton ? styles.active : ""}`} onClick={handleFlashcards}>Flashcard 1 </h3>
            <h3>Flashcard 2</h3>
            <h3>Flashcard 3</h3>
        </>
    )
}


