<template>
    <div>
      <h2>{{ isEditing ? 'Editar' : 'Agregar' }} Empleado</h2>
      <form @submit.prevent="guardarEmpleado">
        <div>
          <label>Nombre</label>
          <input v-model="empleado.nombre" required />
        </div>
        <div>
          <label>Área</label>
          <select v-model="empleado.area">
            <option value="Producción">Producción</option>
            <option value="Finanzas">Finanzas</option>
            <option value="Contabilidad">Contabilidad</option>
          </select>
        </div>
        <div>
          <label>Tipo de Vehículo</label>
          <select v-model="empleado.tipoVehiculo">
            <option value="Automóvil">Automóvil</option>
            <option value="Moto">Moto</option>
          </select>
        </div>
        <div>
          <label>Número de Placa</label>
          <input v-model="empleado.placa" required />
        </div>
        <div>
          <label>Color</label>
          <input v-model="empleado.color" required />
        </div>
        <button type="submit">{{ isEditing ? 'Actualizar' : 'Agregar' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        empleado: {
          nombre: '',
          area: '',
          tipoVehiculo: '',
          placa: '',
          color: ''
        },
        isEditing: false
      };
    },
    methods: {
      async guardarEmpleado() {
        try {
          if (this.isEditing) {
            await axios.put(
              `http://localhost:3000/empleados/${this.empleado.id}`,
              this.empleado
            );
          } else {
            await axios.post('http://localhost:3000/empleados', this.empleado);
          }
          this.$router.push('/');
        } catch (error) {
          console.error('Error al guardar el empleado', error);
        }
      },
      async obtenerEmpleado(id) {
        try {
          const response = await axios.get(`http://localhost:3000/empleados/${id}`);
          this.empleado = response.data;
          this.isEditing = true;
        } catch (error) {
          console.error('Error al obtener el empleado', error);
        }
      }
    },
    mounted() {
      if (this.$route.params.id) {
        this.obtenerEmpleado(this.$route.params.id);
      }
    }
  };
  </script>
  
  <style>
.form-container {
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: bold;
}

input, select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ddd;
}

button {
  width: 100px;
  padding: 10px;
  margin-top: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2c8a6f;
}
</style>