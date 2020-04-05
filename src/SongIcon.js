import React, { Component } from 'react';
import { Card } from 'antd';
import { Button } from 'antd';
import { CaretRightOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import './SongIcon.css';

const { Meta } = Card;

class SongIcon extends Component {
    constructor() {
        super();
        this.state = {
            like: <HeartOutlined />,
            like_status: false
        };
    }
    static getDerivedStateFromProps(props, state) {
        if(props.like_status)
             return {like:<HeartFilled />, like_status: true};
        return undefined;
  }

    changeHeart = (event) => {
        if (this.state.like_status === false) {
            console.log('Liked');
            this.setState({
                like: <HeartFilled />,
                like_status: true
            });
            this.props.callbackFromParent([this.props.index,true]);
        }
        else if (this.state.like_status === true) {
            console.log('Unliked');
            this.setState({
                like: <HeartOutlined />,
                like_status: false
            });
            this.props.callbackFromParent([this.props.index,false]);
        }
        
    }

    render() {
        return (
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img className="AlbumImage" alt="cover" src={this.props.image} />}
            >
                <Meta title={this.props.name} description={this.props.description} />

                <Button
                    style={{ borderColor: "black" }}
                    onClick={this.changeHeart}
                    icon={this.state.like}
                />
                <Button
                    style={{ borderColor: "black" }}
                    icon={<CaretRightOutlined />}
                    onClick={this.props.onClick}
                />
                <p>{this.props.index}</p>
            </Card>
        )
    }
}

export default SongIcon;
