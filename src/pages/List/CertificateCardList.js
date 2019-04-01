import React, { Component } from 'react';
import { Card, Icon, Avatar, Col, Row, List, Modal, Button } from 'antd';

const { Meta } = Card;

const data = [
    {
      title: 'Title 1',
    },
    {
      title: 'Title 2',
    },
    {
      title: 'Title 3',
    },
    {
      title: 'Title 4',
    },
    {
      title: 'Title 5',
    },
    {
      title: 'Title 6',
    },
  ];
  

class CertificateCardList extends Component {

    state = {
        loading: false,
        visible: false,
        clickedCertificate: {
            ID:"",
            achievementTitle:"",
            domain:"",
            coverImage: "",
            receiverName: "",
            blockstackID: "",
            issuerName: "",
            description: "",
            issueDate: "",
            expirationDate: "",
            signature: ""            
        }
    };

    onSearchChange = (value) => {
        const input = value;
        this.setState({searchInput: value});
        let newData = Object.values(this.state.myData);
    
        let processedData = [];
    
        newData.forEach((element) =>
          {
            if((element.receiver_name.includes(input)) || (element.receiver_blockstack_id.includes(input)))
            {
              console.log("Name: ", element);
              processedData.push(element);
            }
          });
          if(processedData.length > 0)
          {
            console.log(processedData);
            this.setState({searchData: processedData});
          }
          else
          {
            this.setState({searchData: processedData});        
          }
    }

    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = () => {
        this.setState({ loading: false, visible: false });
      }
    
      handleCancel = () => {
        this.setState({ visible: false });
      }
        

    render() {
        const { visible, loading } = this.state;
        
        return (
            <div>
                <br />
                <h2>All Certificates</h2>
                <br /> <br/>
                <div>
                    <Row>
                    {/* { xs: 8, sm: 16, md: 24, lg: 32 } */}
                    <List
                        grid={{
                        gutter: 40, xs: 1, sm: 2, md: 3, lg: 4
                        }}
                        dataSource={data}
                        renderItem={item => (
                        <List.Item>
                            {/* <Card title={item.title}>Card content</Card> */}
                            <Card
                                onClick={this.showModal}                        
                                style={{ width: "100%" }}
                                cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                                // actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
                            >
                                <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                                />
                            </Card>                
                        </List.Item>
                        )}
                    />
                    </Row>
                </div> 
                <div>
                        <Modal
                    visible={visible}
                    title="Certificate Details"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                        <Button key="submit" type="primary" onClick={this.handleOk}>
                        OK
                        </Button>,
                    ]}
                    >
                    <p>{`ID: ${this.state.clickedCertificate.ID}`}</p>
                    <p>{`Achievement Title:  ${this.state.clickedCertificate.achievementTitle}`}</p>
                    <p>{`Domain:  ${this.state.clickedCertificate.domain}`}</p>
                    <p>{`Cover Image: ${this.state.clickedCertificate.coverImage}`}</p>
                    <p>{`Receiver Name: ${this.state.clickedCertificate.receiverName}`}</p>
                    <p>{`Blockstack ID: ${this.state.clickedCertificate.blockstackID}`}</p>
                    <p>{`Issuer Name: ${this.state.clickedCertificate.coverImage}`}</p>
                    <p>{`Description: ${this.state.clickedCertificate.description}`}</p>
                    <p>{`Issue Date: ${this.state.clickedCertificate.issueDate}`}</p>
                    <p>{`Expiration Date (if any): ${this.state.clickedCertificate.expirationDate}`}</p>
                    <p>{`Signature: ${this.state.clickedCertificate.signature}`}</p>

                    </Modal>
                </div>            
      </div>
            );
    }
}

export default CertificateCardList;


