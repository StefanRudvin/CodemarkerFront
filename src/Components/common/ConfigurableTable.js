import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

class ConfigurableTable extends React.Component {

    deleteItem (id) {
        axios.delete(this.props.link + '/' + id)
            .then((response) => {
                console.log('Item ' + id + 'deleted via ConfigurableTable')
            })
            .then((json) => {
            })
    }
    render () {
        const tableStyle = {
            textAlign: 'left',
        }
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>{this.props.tableHeader}</th>
                        <th>{this.props.tableDescription}</th>
                        {this.props.showDelete ? (
                        <th>Delete</th>
                        ):null}
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.items.map(item => (
                        <tr>
                            <td>{item.id}</td>
                            <td><Link to={this.props.link + '/' + item.id}>{item.name}</Link></td>
                            <td>{item.description}</td>
                            {this.props.showDelete ? (
                                <td><a className="button">Delete</a></td>
                            ):null}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ConfigurableTable