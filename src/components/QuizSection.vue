<template>
  <div class="bg-primary p-6 rounded-lg mx-6">
    <div v-if="number <= quiz.length - 1">
      <h4 class="text-white font-bold">{{ quiz[number].question }}</h4>
      <label
        v-for="(option, index) in quiz[number].options"
        :key="index"
        class="inline-block p-2 w-full bg-bgSecondary rounded-lg text-left my-4 cursor-pointer"
        :class="
          answer === true &&
          index == selectedAnswer &&
          selectedAnswer + 1 == quiz[number].ans
            ? 'bg-color1 text-white font-bold border-4'
            : answer === true && index == selectedAnswer
            ? 'bg-red-500 text-white font-bold border-4'
            : answer === true
            ? 'bg-secondary text-white cursor-default'
            : ''
        "
      >
        <input
          type="radio"
          :id="index"
          class="hidden"
          :value="index"
          v-model="selectedAnswer"
          :disabled="answer"
          @change="setAnswer(quiz[number].ans)"
        />
        {{ option }}
      </label>
      <button
        v-if="answer && number !== quiz.length - 1"
        class="block text-white font-bold bg-black px-3 py-1 hover:text-black hover:bg-transparent border-4 border-black"
        @click="newQuestion"
      >
        Next Question
      </button>
      <button
        v-if="answer && number === quiz.length - 1"
        class="block text-white font-bold bg-black px-3 py-1 hover:text-black hover:bg-transparent border-4 border-black"
        @click="newQuestion"
      >
        Finsh
      </button>

      <span class="text-white font-bold">
        {{ number + 1 + "/" + quiz.length }}
      </span>
    </div>
    <div v-if="number === quiz.length">
      <h3 class="text-white font-bold text-2xl">SCORE</h3>
      <div
        ref="progress"
        class="flex items-center justify-center relative w-[250px] h-[250px] mx-auto mt-10 rounded-full before:bg-primary before:absolute before:w-[80%] before:h-[80%] before:rounded-full before:content-[''] before:left-[10%] before:top-[10%]"
        :style="
          'background-image: conic-gradient(white ' +
          score * 3.6 +
          'deg, black ' +
          0 +
          'deg)'
        "
      >
        <h3 class="text-4xl z-10 font-bold text-white" ref="progressValue">
          {{ score.toFixed(2) }}%
        </h3>
      </div>
      <button
        v-if="takeAgain"
        class="block mt-10 w-full text-white font-bold bg-black px-3 py-1 hover:text-black hover:bg-transparent border-4 border-black"
        @click="
          ($event) => {
            number = 0;
            score = 0;
            takeAgain = false;
          }
        "
      >
        Take it again
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "QuizSection",
  data() {
    return {
      number: 0,
      score: 0,
      progressStartValue: 0,
      selectedAnswer: "",
      answer: false,
      quizCompleted: false,
      progressAnimation: undefined,
      takeAgain: false,
    };
  },
  props: ["quiz"],
  methods: {
    setAnswer(ans) {
      this.answer = true;
      if (ans == this.selectedAnswer + 1) {
        this.score = this.score + 100 / this.quiz.length;
      }
    },
    newQuestion() {
      this.number++;
      this.answer = false;
      this.selectedAnswer = "";
    },
  },
  unmounted() {
    clearInterval(this.progressAnimation);
  },
  updated() {
    if (this.number == this.quiz.length && this.takeAgain === false) {
      this.progressStartValue = 0;
      this.progressAnimation = setInterval(() => {
        if (this.progressStartValue >= Math.round(this.score)) {
          clearInterval(this.progressAnimation);
          this.takeAgain = true;
        }
        this.$refs.progressValue.innerHTML = `${this.progressStartValue}%`;
        this.$refs.progress.style.backgroundImage = `conic-gradient(white ${
          this.progressStartValue * 3.6
        }deg, black  0deg)`;
        this.progressStartValue++;
      }, 30);
    }

    if (this.number < this.quiz.length) {
      clearInterval(this.progressAnimation);
    }
  },
};
</script>
<style></style>
