import styles from "./flashcards.module.css";

import Flashcard from "./flashcard/flashcard"
import { useState } from "react";


export default function Flashcards() {
    const flashcards = [
        {
            id: "1",
            questionEmoji: "😢",
            questionText: "Question 1",
            answerEmoji: "✋",
            answerText: "Answer 1",
        },
        {
            id: "2",
            questionEmoji: "✂️",
            questionText: "Question 2",
            answerEmoji: "©️",
            answerText: "Answer 2",
        },
        {
            id: "3",
            questionEmoji: "💵",
            questionText: "Question 3",
            answerEmoji: "😂",
            answerText: "Answer 3",
        }
    ];

    const [toggleButton, setToggleButton] = useState(false);
    function handleFlashcards() {
        setToggleButton(!toggleButton);
    }
    console.log(toggleButton)
    return (
        <>
            <h2>Flashcards</h2>

            {flashcards.map((flashcard) => {
                return (
                    <Flashcard key={flashcard.id}
                        onClick={handleFlashcards}
                        className={toggleButton ? styles.active : ""}
                        flashcard={flashcard}
                        emoji={flashcard.questionEmoji}
                        text={flashcard.questionText} />
                )
            })}
        </>
    )
}