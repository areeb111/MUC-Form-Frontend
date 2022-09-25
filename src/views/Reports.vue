<template>
  <div id="reports">
    <v-data-table :items="data" :headers="dataHeader"></v-data-table>
  </div>
</template>

<script>
export default {
  data: () => ({
    data: [],
    dataHeader: [
      { text: "رقم الهاتف", value: "phone" },
      { text: "الاسم الكامل", value: "name" },
      { text: "السكن", value: "location" },
      { text: "المعدل بعد الاضافة", value: "degree" },
      { text: "القسم", value: "section" },
    ],
  }),
  created: function () {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("forms").then((res) => {
        this.data = res.data;
      });
    },
  },
};
</script>

<style>
</style>