import React, { Component } from "react";
import MyEditor from "./components/MyEditor";
import "./App.css";
import { Layout } from "antd";
import { Row, Col } from "antd";
import axios from "axios";
import { Editor, EditorState } from "draft-js";
import { Input } from "antd";

// import MyForm from "./components/MyForm";

const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      topics: "",
      richEditor: EditorState.createEmpty()
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleRichEditorChange = event => {
    this.setState({ richEditor: event.target.value });
  };

  handleChange(event, name) {
    this.setState({
      [name]: event.target.value
    });
  }

  myPost = () => {
    //
    console.log(this.state);

    axios
      .post("/user", {
        title: this.state.title,
        topics: this.state.topics,
        richText: this.state.MyEditor
      })
      .then(function(response) {
        //if success
        console.log(response);
      })
      .catch(function(error) {
        //if failed
        console.log(error);
      });
  };

  render() {
    return (
      <div className="patikoMain">
        <Layout>
          <Header>Header</Header>
          <Layout>
            <Content>
              <Row>
                <Col span={4}> </Col>
                <Col span={12}>
                  <div className="partikoBody">
                    <form onSubmit={this.handleSubmit}>
                      <div className="example-input">
                        <label>
                          <p> Title </p>
                          <input
                            name="title"
                            type="text"
                            placeholder="This is a post"
                            value={this.state.title}
                            onChange={e => this.handleChange(e, "title")}
                          />
                        </label>
                        <br /> <br />
                        <label>
                          <p> Topics </p>
                          <input
                            name="topics"
                            type="text"
                            placeholder="Add story topics here"
                            value={this.state.topics}
                            onChange={e => this.handleChange(e, "topics")}
                          />
                        </label>
                      </div>
                      <br />
                      <p>
                        {" "}
                        Seperate topics with commas.Only lowercase letters,
                        numbers and hyphen character is permitted
                      </p>
                      <br />
                      <br />
                      <div className="ParkoEditor">
                        {" "}
                        <MyEditor
                          className="ParkoEditor"
                          onChange={this.handleRichEditorChange}
                        />{" "}
                      </div>
                      <button onClick={this.myPost}>Post</button>
                    </form>
                  </div>
                </Col>

                <Col span={4} />
                <Col span={4} />
              </Row>
            </Content>
            {/* <Sider>
              <div className="mySider">
                <p>Sider</p>
              </div>
            </Sider> */}
          </Layout>
          <Footer>
            <div> </div>
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default App;

{
  /* <div className="partikoBody">
          <form onSubmit={this.handleSubmit}>
            <label>
              <p> Title </p>
              <input
                name="title"
                type="text"
                placeholder="This is a post"
                value={this.state.title}
                onChange={e => this.handleChange(e, "title")}
              />
            </label>
            <br /> <br />
            <label>
              <p> Topics </p>
              <input
                name="topics"
                type="text"
                placeholder="Add story topics here"
                value={this.state.topics}
                onChange={e => this.handleChange(e, "topics")}
              />
            </label>
            <br />
            <p>
              {" "}
              Seperate topics with commas.Only lowercase letters, numbers and
              hyphen character is permitted
            </p>
            <br />
            <br />
            <div className="ParkoEditor">
              {" "}
              <MyEditor className="ParkoEditor" />{" "}
            </div>
          </form>
        </div> */
}
