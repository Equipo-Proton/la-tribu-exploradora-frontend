<script>
    import { apiTeachers } from "../../services/apiTeachers.js";
    
    export default {
      name: "EditTeacher",
    
      data() {
        return {
          teacherId: this.teacher.id,
          form: {
            name: this.teacher.name,
            email: this.teacher.email,
            password: this.teacher.showPassword,
          },
          showModal: false,
        };
      },
    
      props: {
        teacher: {
          type: Object,
          required: true,
        },
      },
    
      methods: {
        async editTeacher() {
          await apiTeachers.updateTeacher(this.teacherId, this.form);
    
          alert(`${this.teacher.name} has been updated`);
    
          location.reload();
        },
      },
    };
    </script>

<template>
 
</template>