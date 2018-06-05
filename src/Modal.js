import React, { Component } from 'react';
import { Button, Modal, Form, Input, TextArea, Message } from 'semantic-ui-react'

class modal extends Component {
 
    render() {
        return (
        !this.props.isEdit
            ?
            <div>
                <Button
                    onClick={this.props.modalOpen}
                    style={{ margin: "20px auto", display: "block" }}>Add Item
        </Button>
                <Modal open={this.props.modal}>
                    <Modal.Header>What are you going to do?</Modal.Header>
                    <Modal.Content>
                        {this.props.validity && <Message negative>
                            <Message.Header>Fill at least one field</Message.Header>
                        </Message>}
                        <h3>Task</h3>

                        <Input
                            placeholder='Your task'
                            style={{ width: "100%" }}
                            value={this.props.title}
                            onChange={this.props.titleChange}
                        />
                        <h4>Description</h4>
                        <Form>
                            <TextArea
                                placeholder='Detailed description'
                                value={this.props.descripton}
                                onChange={this.props.descriptionChange} />
                        </Form>
                        <Button
                            positive
                            style={{ margin: "20px 10px 0 0" }}
                            onClick={this.props.setTask}
                        >Add</Button>
                        <Button
                            negative
                            style={{ margin: "20px 10px 0 0" }}
                            onClick={this.props.modalClose}
                            >Cancel</Button>
                    </Modal.Content>

                </Modal>
            </div>
            : (
                <div>
                    <Button
                        onClick={this.props.modalOpen}
                        style={{ margin: "20px auto", display: "block" }}>Add Item
                    </Button>
                    <Modal open={this.props.modal}>
                        <Modal.Header>Enter your changes</Modal.Header>
                        <Modal.Content>
                            {this.props.validity && <Message negative>
                                <Message.Header>Fill at least one field</Message.Header>
                            </Message>}
                            <h3>Task</h3>

                            <Input
                                placeholder='Your task'
                                style={{ width: "100%" }}
                                
                            />
                            <h4>Description</h4>
                            <Form>
                                <TextArea
                                    placeholder='Detailed description'
                                   />
                            </Form>
                            <Button
                                positive
                                style={{ margin: "20px 10px 0 0" }}
                                

                            >Update</Button>
                            <Button
                                negative
                                style={{ margin: "20px 10px 0 0" }}
                                onClick={this.props.modalClose}>Cancel</Button>
                        </Modal.Content>

                    </Modal>
                </div>
            )
    )
    }
    
}

export default modal;