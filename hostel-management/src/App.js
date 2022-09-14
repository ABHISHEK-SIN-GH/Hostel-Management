import "./App.css";
import AddStudent from "./components/AddStudent";
import AddEmployee from "./components/AddEmployee";
import AddRoom from "./components/AddRoom";
import AddVisitor from "./components/AddVisitor";
import Fees from "./components/Fees";
import Feedbacks from "./components/Feedbacks";
import AllStudents from "./components/AllStudents";
import AllEmployees from "./components/AllEmployees";
import AllRooms from "./components/AllRooms";
import AllFees from "./components/AllFees";
import AllVisitors from "./components/AllVisitors";
import AllFeedbacks from "./components/AllFeedbacks";
import EditStudent from "./components/EditStudent";
import EditEmployee from "./components/EditEmployee";
import EditRoom from "./components/EditRoom";
import EditFee from "./components/EditFee";
import EditVisitor from "./components/EditVisitor";
import EditFeedback from "./components/EditFeedback";
import LoginPage from "./components/LoginPage";
import StudentPage from "./components/StudentPage";
import EmployeePage from "./components/EmployeePage";
import OwnerPage from './components/OwnerPage'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/editStudent/:id" element={<EditStudent/>} />
          <Route path="/editEmployee/:id" element={<EditEmployee/>} />
          <Route path="/editRoom/:id" element={<EditRoom/>} />
          <Route path="/editVisitor/:id" element={<EditVisitor/>} />
          <Route path="/editFee/:id" element={<EditFee/>} />
          <Route path="/editFeedback/:id" element={<EditFeedback/>} />
          <Route path="/addStudents" element={<AddStudent/>} />
          <Route path="/addEmployees" element={<AddEmployee/>} />
          <Route path="/addRooms" element={<AddRoom/>} />
          <Route path="/addVisitors" element={<AddVisitor/>} />
          <Route path="/addFees" element={<Fees/>} />
          <Route path="/addFeedbacks" element={<Feedbacks/>} />
          <Route path="/Students" element={<AllStudents/>} />
          <Route path="/Employees" element={<AllEmployees/>} />
          <Route path="/Rooms" element={<AllRooms/>} />
          <Route path="/Fees" element={<AllFees/>} />
          <Route path="/Visitors" element={<AllVisitors/>} />
          <Route path="/Feedbacks" element={<AllFeedbacks/>} />
          <Route path="/studentPage" element={<StudentPage/>} />
          <Route path="/employeePage" element={<EmployeePage/>} />
          <Route path="/ownerPage" element={<OwnerPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;