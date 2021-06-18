import React from "react";
import ReactDom from "react-dom";
import "./index.css";
//Stateless Function Component, Returns JSX

//JSX Rules
//return Single Element
//div / section / article
//use camelCase for html attribute
//className instead of class
//close every element
//formatting

//Destructor
class Student extends React.Component {
  state = {
    students: [
      {
        id: "1",
        fname: "Narendra",
        lname: "Selot",
        job: "Developer",
        age: 23,
        company: "RadixWeb",
        college: "Parul Universtiy",
        DOB: "29/08/1998",
        address: "Vadodara",
        collegeLogo:
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
      },
      {
        id: "2",
        fname: "Devisha",
        lname: "Parekh",
        job: "Data Scientist",
        age: 24,
        company: "Radix",
        college: "Parul Universtiy",
        DOB: "11/08/1997",
        address: "Kolkata",
        collegeLogo:
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
      },
      {
        id: "3",
        fname: "Naina",
        lname: "Selot",
        job: "Designer",
        age: 21,
        company: "OnPrintShop",
        college: "MSU",
        DOB: "26/08/2000",
        address: "Vadodara",
        collegeLogo:
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
      },
      {
        id: "4",
        fname: "Pratik",
        lname: "Kakkad",
        job: "Developer",
        age: 23,
        company: "OnPrintShop",
        college: "Parul Universtiy",
        DOB: "26/06/1998",
        address: "Ahmedabad",
        collegeLogo:
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHUC1RaXZAmDw/company-logo_200_200/0/1546516257572?e=2159024400&v=beta&t=iIYRgIk8_IXGCmTHs9UkCxLR1PeFznJf4Bhd-45aJGY",
      },
    ],
  };
  removeStudentFromList = (id) => {
    const { students } = this.state;
    const sortedStudents = students.filter((student) => student.id !== id);
    this.setState({
      students: sortedStudents,
    });
  };
  render() {
    const { students } = this.state;
    return (
      <section className="person-list">
        {students.map((student) => (
          <Person
            removeStudentFromList={this.removeStudentFromList}
            key={"perIn" + student.id}
            person={student}
          >
            <p>--Student Details--</p>
          </Person>
        ))}
      </section>
    );
  }
}

class CollegeInfo extends React.Component {
  render() {
    const { college, address } = this.props.person;
    return (
      <div>
        <p>{college}</p>
        <p>{address}</p>
      </div>
    );
  }
}
class Person extends React.Component {
  render() {
    const { fname, job, age, company, collegeLogo, id } = this.props.person;
    const children = this.props.children;
    const { removeStudentFromList } = this.props;
    console.log(this.props);
    return (
      <article className="person">
        <img
          draggable="false"
          src={collegeLogo}
          alt="College Logos"
          height="100px"
          width="100px"
        />
        {children}
        <h1>Name: {fname}</h1>
        <p>
          ID: <b>{id}</b>
        </p>
        <p>Aspiring To be: {job}</p>
        <i>Age: {age}</i>
        <p>Dream Company: {company}</p>
        <CollegeInfo person={this.props.person} />
        <button
          className="fancyButton"
          type="button"
          onClick={() => {
            removeStudentFromList(id);
          }}
        >
          Remove Student
        </button>
        <hr />
      </article>
    );
  }
}

ReactDom.render(<Student />, document.getElementById("root"));
