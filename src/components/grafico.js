
import { Line } from "vue-chartjs";

export default {
  
  extends: Line,
  data() {
    return {
      chartdata: {
        labels: ['Enero', 'febrero', 'marzo', 'abril', 'Mayo', 'Junio', 'Julio', "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
            label: 'Asistencia Promedio mensual',
            backgroundColor: 'rgb(19, 106, 237)',
            borderColor: 'rgb(19, 106, 237)',
            data: [2, 10, 5, 2, 20, 30, 45,20, 55,32,80,15]
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }

       
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
