import React, { Component } from 'react';
import { Container, Accordion, Icon, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Modal from './Modal';

class App extends Component {
  state = {
    activeIndex: 0,
    tasks: [],
    newTitle: "",
    newDescription: "",
    modalOpen: false,
    inputInvalid: false,
    isEdit: false
    
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  handleTitleChange = (e) => {
    this.setState({ newTitle: e.target.value })
  }

  handleDescriptionChange = (e) => {
    this.setState({ newDescription: e.target.value })
    
  }

  setTask = () => {
    const tasks = this.state.tasks.slice("");
    if (this.state.newTitle === "" || this.state.description === "") {
      this.setState({inputInvalid: true})
      return tasks
    } else {
        tasks.push({
      title: this.state.newTitle, description: this.state.newDescription
    })
    }
  

    this.setState({
      tasks,
      modalOpen: false,
      newTitle: ""
    })
  }

  modalOpen = () => {
    this.setState({
      modalOpen: true
    })
  }
  modalClose = () => {
    this.setState({
      modalOpen: false,
      inputInvalid: false,
      newTitle: "",
      isEdit: false
    })
  }

  deleteItem = (index) => {
    let newTask = this.state.tasks.slice("")
    newTask.splice(index, 1);
    this.setState({
      tasks: newTask
    })
  }

  onEdit = () => {
    this.setState({isEdit: true, modalOpen: true})
  }

  render() {
    const { activeIndex } = this.state;
    const tasks = this.state.tasks;

    return (
      <Container>
        <Accordion styled style={{ margin: "0 auto", width: "100%" }}>
            {tasks.length !== 0 ? tasks.map((task, index) => {
            return (
              <div key={index}>
                <Accordion.Title active={activeIndex === index} index={index} onClick={this.handleClick}>
                  <Icon name='dropdown' />
                  {task.title}
                </Accordion.Title>
                <Accordion.Content active={activeIndex === index}>

                    {task.description}
              
                </Accordion.Content>
                <Button
                        positive
                        style={{ margin: "5px" }}
                        size='mini'
                        onClick={this.onEdit}
                    >Edit</Button>
                     <Button
                        negative
                        style={{ margin: "5px" }}
                        size='mini'
                        onClick={(e) => this.deleteItem(index)}
                    >Delete</Button>
              </div>
            )
          }) : <Message negative>Start adding tasks</Message>}
        </Accordion>
        <Modal
          title={this.state.newTitle}
          description={this.state.newDescription}
          titleChange={this.handleTitleChange.bind(this)}
          descriptionChange={this.handleDescriptionChange.bind(this)}
          setTask={this.setTask}
          modalOpen={this.modalOpen}
          modalClose={this.modalClose}
          modal={this.state.modalOpen}
          validity={this.state.inputInvalid}
          isEdit={this.state.isEdit}
        ></Modal>
      </Container >
    )
  }
}

export default App;
