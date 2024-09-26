<template>
    <div>
        <div>
            <h3>Project 8</h3>
        </div>

        <div v-for="feedback in projectFeedback">
            <h5>{{feedback.question}}</h5>
            <p>{{feedback.answer}}</p>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
    const projectFeedback = ref([
        {
            question: "Which teammates executed the project?",
            answer: "Team members: Olasunkanmi, and Samuel",
        },
        {
            question: "What made you smile?",
            answer: "Documentation was straightforward",
        },
        {
            question: "What did you find confusing? Did you encounter any issues?",
            answer: "No issue, nothing confusing",
        },
    ])
</script>