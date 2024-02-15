<script setup lang="ts">

</script>

<template>
    
     <div id="container">

        <strong>Photo</strong>

        <form action="#" @submit.prevent="">
          <div>
            <label for="name">Titre: </label>
            <input type="text" id="name" />
          </div>
          <div>
            <label for="description">Description: </label>
            <textarea id="description" cols="5" rows="8" style="resize: none" maxlength="150"></textarea>
          </div>
          <div />
        
        </form>
      </div>
</template>

<style scoped>
#container {
  text-align: center;

  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;

  color: #8c8c8c;

  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>