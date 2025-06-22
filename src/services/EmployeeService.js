import axios from 'axios';

class EmployeeService {
    SPRING_BACK_API_URL = "http://localhost:8080/employee";

    saveEmployee(employee) {
        return axios.post(this.SPRING_BACK_API_URL, employee);
    }

    getAllEmployees(){
        return axios.get(this.SPRING_BACK_API_URL);
    }

    getEmployeeById(id){
        return axios.get(this.SPRING_BACK_API_URL + "/" + id);
    }

    deleteEmployee(id){
        return axios.delete(this.SPRING_BACK_API_URL + "/" + id);
    }

    updateEmployee(employee,id){
      return axios.put(this.SPRING_BACK_API_URL + "/" + id,employee);
    }


}

const employeeServiceInstance = new EmployeeService();
export default employeeServiceInstance;
