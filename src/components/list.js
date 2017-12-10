import React from 'react';
import ListItem from './list_item';

class List extends React.Component {

    render(){
        return(
            <table className="table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>UserName</th>
                        <th>Points in past 30 days</th>
                        <th>All time points</th>
                    </tr>
                </thead>

                <tbody>
                  <ListItem
                    studentsData={this.props}
                  />  
                </tbody>
                
    
            </table>
        ); // end of return
    } // end of render
} // end of List class

export default List;