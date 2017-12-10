import React from 'react';

class ListItem extends React.Component {
    render(){

        let { recentCampers, allTimeCampers, currentView } = this.props.studentsData.studentsData;
        let currentList = currentView === "recentCampers" ? recentCampers : allTimeCampers;

        return (
            currentList.map(student=>{
                return <tr key={Math.random()}>
                    <td>{currentList.indexOf(student) + 1}</td>
                    <td>{student.username}</td>
                    <td>{student.recent}</td>
                    <td>{student.alltime}</td>
                  </tr>;
            })

        ); // end of return
    }// end of render
} // end of ListItem class

export default ListItem;