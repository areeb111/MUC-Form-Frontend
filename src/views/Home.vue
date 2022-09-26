<template>
  <div class="home">
    <v-card v-if="!sendSuccess" class="pa-10" color="#FFFFFF">
      <v-text-field
        v-model="form.name"
        outlined

        label="الاسم الكامل"
      ></v-text-field>
      <v-text-field
        v-model="form.phone"

        outlined
        label="رقم الهاتف"
      ></v-text-field>
      <v-text-field
        v-model="form.location"
        outlined

        label="السكن"
      ></v-text-field>
      <v-text-field
        type="number"
        v-model="form.degree"
        outlined

        prefix="المعدل بعد الاضافة"
      ></v-text-field>
      <v-autocomplete
        v-model="form.section"
        label="القسم"
        :items="sections"
        outlined

      ></v-autocomplete>
      <v-btn @click="sendForm()" block color="primary" x-large>ارسال</v-btn>
      <br />
      <br />

      <div style="max-width: 100%">
        <h3>
          تعد كلیة المنصور الجامعة إحــــدى المؤسســــات الأكاديمية الخاصة
          للتعليم العالي ذات النفع العام...إذ أسستها عام 1988 في بــغداد الجمعية
          العراقية للمكتبـــات والمعلومات، وبوشـــر بالدراسة فیھا في 1/10/1988.
        </h3>
        <br /><br />
        <center>
          <a target="_BLANK" href="https://www.muc.edu.iq/"
            >موقع كلية المنصور الرسمي</a
          >
        </center>
      </div>
    </v-card>
    <v-card v-if="sendSuccess" color="success" class="text-center pa-10">
      تم ارسال الاستمارة بنجاح , سنتصل بك باقرب وقت
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    sendSuccess: false,
    form: {
      name: "",
      phone: "",
      location: "",
      degree: 0,
      section: "",
    },
    sections: [
      "الهندسة المدنية",
      "هندسة الحاسوب",
      "هندسة الأتصالات",
      "علوم الحاسوب ونظم المعلومات",
      "هندسة تقنيات الحاسوب",
      "هندسة تقنيات الاجهزة الطبية",
      "العلاج الطبيعي",
      "القانون",
      "العلوم المحاسبية والمصرفية",
      "ادارة الأعمال",
      "اللغة الانكليزية",
      "الاعلام الرقمي",
    ],
  }),
  methods: {
    send() {
      if (this.form.phone.length >= 11 && this.form.degree != null) {
        this.$http.post("forms", this.form).then((res) => {
          console.log(res.data);
        });
      }
    },
    sendForm() {
      if (
        this.form.phone.length >= 10 &&
        this.form.degree != null &&
        this.form.name != "" &&
        this.form.location != "" &&
        this.form.section != ""
      ) {
        this.$http.post("forms", this.form).then((res) => {
          console.log(res.data);
          this.sendSuccess = true;
        });
      } else {
        this.$toast.open({
          type: "warning",
          message: "يرجى ملئ جميع الحقول",
          duration: 3000,
        });
      }
    },
  },
};
</script>

<style>
.v-image__image {
  margin: 5px !important;
}
a {
  text-decoration: none;
}
</style>