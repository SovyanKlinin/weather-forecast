<template>
  <div class="loader_wrapper">
    <span class="loader"></span>
  </div>
</template>

<style scoped>
.loader_wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 48px;
  height: 48px;
  border: 5px solid #6ebeff;
  border-bottom-color: #337AB7;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>