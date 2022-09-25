<template>
  <div class="home">
    <v-card v-if="!sendSuccess" class="pa-10" color="#FFFFFF">
      <v-text-field
        v-model="form.name"
        outlined
        @keyup="send()"
        label="الاسم الكامل"
      ></v-text-field>
      <v-text-field
        v-model="form.phone"
        @keyup="send()"
        outlined
        label="رقم الهاتف"
      ></v-text-field>
      <v-text-field
        v-model="form.location"
        outlined
        @keyup="send()"
        label="السكن"
      ></v-text-field>
      <v-text-field
        type="number"
        v-model="form.degree"
        outlined
        @keyup="send()"
        prefix="المعدل بعد الاضافة"
      ></v-text-field>
      <v-autocomplete
        v-model="form.section"
        label="القسم"
        :items="sections"
        outlined
        @change="send()"
      ></v-autocomplete>
      <v-btn @click="sendForm()" block color="primary" x-large>ارسال</v-btn>
      <br />
      <br />

      <div style="max-width: 100%">
        <h3>
          تسعى كلية دجلة الجامعة الأهلية إلى تقديم خدماتها التعليمية باستخدام
          الأساليب العلمية والتكنولوجيا الحديثة، وان تكون مناهجها الدراسية تواكب
          آخر التطورات العالمية وتطبيقاتها وانعكاساتها على المجتمع، وتهدف إلى
          تزويد الطلبة بالمعلومات اللازمة لهم في المجالات العلمية والتعليمية
          والبحثية كافة بالشكل الذي يحقق التواصل المستمر بين الجامعة والمجتمع،
          وبما يسهم في تحقيق أهداف التنمية الاقتصادية والاجتماعية في العراق.
        </h3>
        <br /><br />
        <center>
          <a target="_BLANK" href="https://duc.edu.iq"
            >موقع كلية دجلة الجامعة الرسمي</a
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
      "تقنيات صناعة الاسنان",
      "طب الاسنان",
      "بصريات",
      "اشعة وسونار",
      "تحليلات مرضية",
      "هندسة مدني",
      "هندسة التكييف والتبريد",
      "هندسة الاجهزة الطبية",
      "الاعلام",
      "تربية عربي",
      "اداب انكليزي",
      "علوم الحاسوب",
      "هندسة تقنيات الحاسوب",
      "التربية الرياضية",
      "القانون",
      "ادارة الاعمال",
      "المحاسبة",
      "المالية والمصرفية",
      "التخدير",
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