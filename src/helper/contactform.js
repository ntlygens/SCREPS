import React, { Component, Fragment } from 'react';

class Contactform extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            subject: '',
            message: ''
        }
    } 
    onNameChange(event) {
        this.setState({ name: event.target.value })
    }
    onPhoneChange(event) {
        this.setState({ phone: event.target.value })
    }
    onEmailChange(event) {
        this.setState({ email: event.target.value })
    }
    onSubjectChange(event) {
        this.setState({ subject: event.target.value })
    }
    onMessageChange(event) {
        this.setState({ message: event.target.value })
    }  
    handleSubmit(e) {
        e.preventDefault();
        fetch('https://primehostingindia.com/scripts/sendmail.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response) => {
            if (response.id !== '') {
                document.getElementById("server_response_success").classList.add("d-block");
                this.resetForm();
            } else {
                document.getElementById("server_response_danger").classList.add("d-block");
            }
        })
    }
    resetForm() {
        this.setState({ name: "", phone: "", email: "", subject: "", message: "", })
    }
    render() {
        return (
            <Fragment/>
        );
    }
}

export default Contactform;