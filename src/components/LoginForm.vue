<script></script>

<template>
  
  <div class="d-flex justify-content-center align-items-center mt-5">
    <div class="card">
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="form px-4 pt-5">
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Nombre de Profesor"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="E-mail"
            />
            <button class="btn btn-dark btn-block">Registrarse</button>
          </div>
        </div>
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="form px-4">
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Name"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Email"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Phone"
            />

            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Password"
            />

            <button class="btn btn-dark btn-block">Signup</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/registerFormTeachers.css";
</style>
