import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import "../CSS/Style.css";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


export default function GetEmployees() {

    const [allEmployees, setAllEmployees] = useState([]);
        
    useEffect(() => {
        fetch("http://localhost:9000/emps") //Node service
            .then(resp => resp.json())
            .then(emps => setAllEmployees(emps))

    }, []);

   
    const navigate = useNavigate();
    return (
        <div>

            <Container fluid>
                <Row>
                    <Col>
                        <h1>Employees</h1>
                        <br></br>
                        <table className="c-disppackagetable">
                            <tr>
                                <th>EmpId</th>
                                <th>DOB</th>
                                <th>FName</th>
                                <th>LName</th>
                                <th>Designation</th>
                                <th>Contact</th>
                            </tr>
                            {
                                allEmployees.map((allemp, i) => {
                                    return <tr>
                                        <td>{allemp.employee_id}</td>
                                        <td><b>{allemp.e_bdate}</b></td>
                                        <td>{allemp.e_fname}</td>
                                        <td>{allemp.e_lname}</td>
                                        <td>{allemp.e_designation}</td>
                                        <td>{allemp.e_contact}</td>
                                    </tr>
                                })
                            }
                        </table>
                    </Col>
                </Row>
            </Container>

        </div>

    )
}







