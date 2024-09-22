<template>
    <div>
      <h2>Lista de Empleados</h2>
      <div class="filter-container">
          <input v-model="search" placeholder="Buscar por nombre..." />
          <select v-model="filtroTipoVehiculo">
              <option value="">Todos</option>
              <option value="Automóvil">Automóvil</option>
              <option value="Moto">Moto</option>
            </select>
        </div>
  
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Área</th>
            <th>Tipo de Vehículo</th>
            <th>Número de Placa</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="empleado in empleadosFiltrados" :key="empleado.id">
            <td>{{ empleado.nombre }}</td>
            <td>{{ empleado.area }}</td>
            <td>{{ empleado.tipoVehiculo }}</td>
            <td>{{ empleado.placa }}</td>
            <td>{{ empleado.color }}</td>
            <td><button @click="editarEmpleado(empleado)">Editar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        empleados: [],
        search: '',
        filtroTipoVehiculo: ''
      };
    },
    computed: {
      empleadosFiltrados() {
        let filtrados = this.empleados;
  
        if (this.search) {
          filtrados = filtrados.filter((empleado) =>
            empleado.nombre.toLowerCase().includes(this.search.toLowerCase())
          );
        }
  
        if (this.filtroTipoVehiculo) {
          filtrados = filtrados.filter(
            (empleado) => empleado.tipoVehiculo === this.filtroTipoVehiculo
          );
        }
  
        return filtrados;
      }
    },
    methods: {
      async obtenerEmpleados() {
        try {
          const response = await axios.get('http://localhost:3000/empleados');
          this.empleados = response.data;
        } catch (error) {
          console.error('Error al obtener los empleados', error);
        }
      },
      editarEmpleado(empleado) {
        // Lógica para editar
        this.$router.push({ name: 'edit', params: { id: empleado.id } });
      }
    },
    mounted() {
      this.obtenerEmpleados();
    }
  };
  </script>
  
  <style>
.table-container {
  margin: 0 auto;
  width: 90%;
  max-width: 1000px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #42b983;
  color: white;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

button {
  padding: 8px 12px;
  margin: 0 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #42b983;
}

button:hover {
  background-color: #2c8a6f;
}

button:active {
  background-color: #20755d;
}

.filter-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

</style>