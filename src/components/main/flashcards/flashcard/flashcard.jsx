import styles from "./flashcard.module.css";
import { useState } from "react";

export default function Flashcard({ emoji, text }) {
    return (
        <>
            <div className={styles.flashcard_container}>
                <h1>{emoji}</h1>
                <h3>{text}</h3>
            </div>
        </>
    )
}


