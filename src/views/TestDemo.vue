<template>
  <div>
     <vs-input icon="search" placeholder="Search" v-model="value1" :InputNoBorder="true" InputBackground="#cccccc" />
  </div>
</template>

<script>
export default {
  data:()=>({
    selected:[],
    users:[
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "website": "hildegard.org",
      },
      {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "website": "anastasia.net",
      },
      {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "website": "ramiro.info",
      }
    ]
  }),
}
</script>